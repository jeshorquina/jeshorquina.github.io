<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Jesh\Core\Wrappers\Controller;

class PublicPagesController extends Controller {

	private static $data;

	public function __construct()
	{
		parent::__construct();
        self::$data = array(
			'csrf' => array(
				'name' => $this->security->get_csrf_token_name(),
				'hash' => $this->security->get_csrf_hash()
			)
		);
	}

	public function index()
	{
		self::view("public-pages/index.inc");
	}

	public function Login()
	{
		self::view("public-pages/login.inc", self::$data);
	}

	public function Signup()
	{
		self::view("public-pages/signup.inc", self::$data);
	}
}