<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Jesh\Core\Wrappers\Controller;

use \Jesh\Helpers\Http;
use \Jesh\Helpers\PageRenderer;

use \Jesh\Operations\Admin\AccessActionOperations;

class AccessActionController extends Controller
{
    private $operations;

    public function __construct()
    {
        parent::__construct();

        $this->operations = new AccessActionOperations;
    }

    public function Login()
    {
        $password = Http::Request(Http::POST, "password");
        
        if(!$this->operations->MatchingPassword($password))
        {
            Http::Response(
                Http::UNPROCESSABLE_ENTITY, array(
                    "message" => "Password does not match!"
                )
            );
        }
        else 
        {
            $this->operations->SetLoggedInState();
            Http::Response(
                Http::OK, array(
                    "message" => "Successfully logged in.",
                    "redirect_url" => self::GetBaseURL('admin')
                )
            );
        }
    }

    public function Logout()
    {
        if(!$this->operations->SetLoggedOutState())
        {
            Http::Response(
                Http::INTERNAL_SERVER_ERROR, array(
                    "message" => "Could not log out. Please try again."
                )
            );
        }
        else
        {
            Http::Response(
                HTTP::FOUND, array(
                    "message" => "Successfully logged out."
                ),
                "Location: " . self::GetBaseURL('admin')
            );
        }
    }
}