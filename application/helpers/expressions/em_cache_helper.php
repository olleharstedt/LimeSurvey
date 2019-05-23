<?php

/**
 * Discussion here: https://bugs.limesurvey.org/view.php?id=14859
 *
 * @since 2019-05-23
 * @author Olle Haerstedt
 */
class EmCacheHelper
{
    /**
     * Survey info from getSurveyInfo.
     *
     * @var array|null
     */
    protected static $surveyinfo = null;

    /**
     * Set survey info used by this request.
     *
     * @param array|null $surveyinfo
     * @return void
     * @throws InvalidArgumentException if $surveyinfo is null.
     */
    public static function init(array $surveyinfo = null)
    {
        if (empty($surveyinfo)) {
            throw new \InvalidArgumentException('$surveyinfo is empty, cannot initialise helper');
        }

        self::$surveyinfo = $surveyinfo;
    }

    /**
     * Flush cache for initialised survey.
     * Should be done at all places where the cache is invalidated, e.g. at save survey/question/etc.
     *
     * @return void
     * @throws EmCacheException if surveyinfo is not initialised.
     */
    public static function flush()
    {
        if (empty(self::$surveyinfo)) {
            throw new EmCacheHelper('self::$surveyinfo is null, helper not initialised');
        }

        // Set survey cache array to empty.
        \Yii::app()->emcache->set(self::$surveyinfo['sid'], []);
    }

    /**
     * Flush ALL emcache, for all surveys.
     *
     * @return void
     */
    public static function flushAll()
    {
        \Yii::app()->emcache->flush();
    }

    /**
     * Get cache value with $key for initialised survey.
     *
     * @param string $key
     * @return mixed
     */
    public static function get($key)
    {
        if (!self::useCache()) {
            return false;
        }

        $surveyCache = self::getSurveyCache();

        if (empty($surveyCache)) {
            return false;
        }

        if (empty($surveyCache[$key])) {
            return false;
        }

        return $surveyCache[$key];
    }

    /**
     * Set cache $value for $key for initialised survey.
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public static function set($key, $value)
    {
        if (!self::useCache()) {
            return;
        }

        \Yii::app()->cache->set($key, $value);
    }

    /**
     * Get cache for initialised survey.
     *
     * @return array|null
     * @throws EmCacheException if surveyinfo is not initialised.
     */
    protected static function getSurveyCache()
    {
        if (empty(self::$surveyinfo)) {
            throw new EmCacheHelper('self::$surveyinfo is null, helper not initialised');
        }

        return \Yii::app()->emcache->get(self::$surveyinfo['sid']);
    }

    /**
     * True if all conditions are set to use the emcache.
     *
     * @return boolean
     */
    protected static function useCache()
    {
        // If forced, always use.
        if (\Yii::app()->getConfig("force_emcache")) {
            return true;
        }

        // Don't use when debugging.
        if (YII_DEBUG) {
            return false;
        }

        // TODO: Check activated, randomized.
    }
}
