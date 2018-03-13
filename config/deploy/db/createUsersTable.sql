CREATE TABLE `users` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(45) NOT NULL,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `username_UNIQUE` (`username` ASC),
UNIQUE INDEX `email_UNIQUE` (`email` ASC));
