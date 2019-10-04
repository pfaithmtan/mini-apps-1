DROP DATABASE IF EXISTS checkout_info;
CREATE DATABASE checkout_info;

USE checkout_info;

CREATE TABLE item (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
    -- address VARCHAR(255) NOT NULL,
    -- city VARCHAR(255) NOT NULL,
    -- state VARCHAR(255) NOT NULL,
    -- zipcode VARCHAR(255) NOT NULL,
    -- card_num VARCHAR(255) NOT NULL,
    -- expiry_date DATE NOT NULL,
    -- cvv VARCHAR(255) NOT NULL,
    -- billing_zipcode VARCHAR(255) NOT NULL,
);