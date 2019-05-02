CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */
CREATE TABLE `persons` ( `id` int(11) NOT NULL AUTO_INCREMENT,   `name` varchar(15) NOT NULL, `age` int(11) DEFAULT NULL, PRIMARY KEY (`id`) );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

