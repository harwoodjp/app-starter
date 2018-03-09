## Overview

This is a custom Express application template with [passport](http://www.passportjs.org/) authentication. It uses MySQL for data persistence and the [knex](http://knexjs.org/) query builder. It uses [ejs](http://ejs.co/) templating and [static-starter](https://github.com/harwoodjp/static-starter/) for the `public` directory.

## Setup

### Database

Execute the following script in your MySQL shell or IDE:

```
CREATE TABLE `YOUR_DATABASE`.`users` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(45) NOT NULL,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `username_UNIQUE` (`username` ASC),
UNIQUE INDEX `email_UNIQUE` (`email` ASC));
```

### .env

* `cd` into the cloned directory and execute `npm install`
* Create a `.env` file with the following key/value pairs:
```
PORT=
SESSION_SECRET=
DB_HOST=
DB_USER=
DB_PASS=
DB_DATABASE=
```

## Credit

I adapted the authentication strategies from [jkup](https://github.com/jkup/)'s [hammer](https://github.com/jkup/hammer) repo.