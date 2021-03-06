<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Jesh\Core\Wrappers\Controller;

use \Jesh\Helpers\PageRenderer;
use \Jesh\Helpers\Security;
use \Jesh\Helpers\Session;
use \Jesh\Helpers\StringHelper;
use \Jesh\Helpers\Url;

class BatchPageController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        if(PageRenderer::HasAdminPageAccess()) 
        {
            $this->SetTemplates();
        }
    }

    private function SetTemplates()
    {
        self::SetHeader("templates/header.html.inc");
        self::SetHeader("templates/nav.html.inc");
        self::SetFooter("templates/footer.html.inc");
    }

    public function Batch()
    {
        $other_details = array(
            Security::GetCSRFData(),
            array(
                "page" => array(
                    "title" => "Admin - Batch Management"
                )
            )
        );

        self::SetBody("admin/batch.html.inc");
        self::RenderView(
            PageRenderer::GetAdminPageData("batch", $other_details)
        ); 
    }

    public function BatchDetails($batch_id)
    {
        $other_details = array(
            Security::GetCSRFData(),
            array(
                "page" => array(
                    "title" => "Admin - Batch Details",
                    "details" => array(
                        "batch_id" => $batch_id
                    )
                )
            )
        );

        self::SetBody("admin/batch/details.html.inc");
        self::RenderView(
            PageRenderer::GetAdminPageData("batch-details", $other_details)
        );
    }

    public function BatchCommitteeDetails($batch_id, $committee_name)
    {
        $body = ($committee_name == "frontman") ? (
            "admin/batch/details/frontman.html.inc"
        ) : (
            "admin/batch/details/committee.html.inc"
        );
        $other_details = array(
            Security::GetCSRFData(),
            array(
                "page" => array(
                    "title" => "Admin - Batch Committee Details",
                    "urls" =>array(
                        "batch_list" => Url::GetBaseURL('admin/batch'),
                        "batch_details" => Url::GetBaseURL(
                            'admin/batch/details/'.$batch_id
                        )
                    ),
                    "details" => array(
                        "batch_id" => $batch_id,
                        "committee_name" => StringHelper::UnmakeIndex(
                            $committee_name
                        )
                    )
                )
            )
        );

        self::SetBody($body); 
        self::RenderView(
            PageRenderer::GetAdminPageData(
                "batch-details-committee", $other_details
            )
        );
    }
}
