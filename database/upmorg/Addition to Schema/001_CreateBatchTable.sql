USE upmorg;

CREATE TABLE IF NOT EXISTS `Batch` (
    `BatchID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `AcadYear` CHAR(9) NOT NULL,
    PRIMARY KEY(`BatchID`)
);
