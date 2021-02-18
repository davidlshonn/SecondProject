DROP DATABASE IF EXISTS dev_jobs_db;
CREATE DATABASE dev_jobs_db;
USE dev_jobs_db;

CREATE TABLE jobs (
	id int NOT NULL AUTO_INCREMENT,
	title varchar(50) NOT NULL,
	skills varchar(255) NOT NULL,
    salary int(20) NOT NULL,
    description varchar(255) NOT NULL,
    email_address varchar(50) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)

);