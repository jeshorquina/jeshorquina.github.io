<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Jesh\Core\Wrappers\Controller;

use \Jesh\Helpers\Security;
use \Jesh\Helpers\Session;

class TaskManagerController extends Controller 
{
    public function __construct()
    {
        parent::__construct();
    }

    public function FullTask()
    {
        self::SetBody("user-pages/minor-pages/task.html.inc");
        self::RenderView(Security::GetCSRFData());
    }
}