<?php
namespace Jesh\Operations;

use \Jesh\Helpers\Security;
use \Jesh\Helpers\Session;
use \Jesh\Helpers\ValidationDataBuilder;

use \Jesh\Repository\TaskManagerActionOperationsRepository;

use \Jesh\Models\TaskModel;

class TaskManagerActionOperations
{
    public function __construct()
    {
        $this->repository = new TaskManagerActionOperationsRepository;
    }

    public function GetMemberID($username)
    {
        return $this->repository->GetMemberID($username);
    }

    public function GetTaskStatus($value)
    {
        return $this->repository->GetTaskStatus($value);
    }

    public function AddTask(Taskmodel $task)
    {
        return $this->repository->AddTask($task);
    }

    public function ValidateTaskData($title, $description, $assignee, $month, $day, $year)
    {
        $validation = new ValidationDataBuilder;

        $validation->CheckString("title", $title);
        $validation->CheckString("description", $description);
        //$validation->CheckString("assignee", $assignee);
        $validation->CheckString("month", $month);
        $validation->CheckString("day", $day);
        $validation->CheckString("year", $year);
                
        return array(
            "status"  => $validation->GetStatus(),
            "message" => $validation->GetValidationData()
        );
    }

    public function SubmitTask()
    {
        
    }
}
