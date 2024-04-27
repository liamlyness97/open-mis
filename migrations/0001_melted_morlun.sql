CREATE TABLE `staff` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`middle_names` text,
	`surname` text NOT NULL,
	`dob` text NOT NULL,
	`category` text NOT NULL,
	`start_date` text NOT NULL,
	`leave_date` text
);
