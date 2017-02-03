<?php
namespace Jesh\Helpers;

Class Session
{
    public static function Get($key)
    {
        self::Open();
        $value = $_SESSION[$key];
        self::Close();

        return $value;
    }

    public static function Set($key, $value)
    {
        self::Open();
        $_SESSION[$key] = $value;
        self::Close();

        return true;
    }

    public static function Find($key) //tinitignan kung may existing session na siya
    {
        self::Open();
        $value = isset($_SESSION[$key]);
        self::Close();

        return $value;
    }

    public static function Delete($key)
    {
        self::Open();
        unset($_SESSION[$key]); //Free registered session
        self::Close();
    }

    public static function End()
    {
        self::Open();
        $_SESSION = array();

        if (ini_get("session.use_cookies")) { // ???
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
    }

    private static function Open()
    {
        if(!isset($_SESSION)) 
        { 
            session_start();
            session_regenerate_id(true); //Update the current session id with a newly generated one
        }
    }

    private static function Close()
    {
        session_commit();
    }
}