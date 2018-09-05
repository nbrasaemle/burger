-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;

-- USE burgers_db;
USE nst2yloy9t3sf1ii;

CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

alter table burgers 
modify devoured boolean not null default 0;
