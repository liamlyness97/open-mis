CREATE TABLE `parents` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`surname` text NOT NULL,
	`primary_contact` integer,
	`contact_number` text NOT NULL,
	`email_address` text NOT NULL
);
