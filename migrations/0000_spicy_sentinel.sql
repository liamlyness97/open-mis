CREATE TABLE `pupils` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`middle_names` text,
	`surname` text NOT NULL,
	`current_year` text
);
--> statement-breakpoint
CREATE TABLE `school` (
	`id` integer PRIMARY KEY NOT NULL,
	`school_name` text NOT NULL,
	`local_authority` text
);
