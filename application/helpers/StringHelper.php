<?php
namespace Jesh\Helpers;

Class StringHelper
{
    public static function NoBreakString($string)
    {
        return trim(preg_replace('/\s+/', ' ', $string));
    }
}