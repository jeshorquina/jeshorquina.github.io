<?php
namespace Jesh\Repository;

use \Jesh\Core\Wrappers\Repository;
use \Jesh\Models\StaticData;

class SystemAdministratorOperationsRepository extends Repository
{
    public function GetPassword()
    {
        $record = self::Get(
            "StaticData", 
            "Value", 
            array("Name" => "SystemAdminPassword")
        );
        
        if(sizeof($record) === 1)
        {
            return $record[0]["Value"];
        }
        else 
        {
            throw new \Exception("No record for system admin password found");
        }
    }

    public function UpdatePassword($password)
    {
        return self::Update(
            "StaticData", 
            array("Name" => "SystemAdminPassword"), 
            array("Value" => $password)
        );
    }

    public function GetBatches()
    {
        return self::Get("Batch", "*");
    }

    public function GetMembers()
    {
        return self::Get("Member", "MemberID, FirstName, MiddleName, LastName");
    }
}