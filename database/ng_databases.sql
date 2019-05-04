DROP DATABASE IF EXISTS store;

CREATE DATABASE store;
USE store;

CREATE TABLE `products` (
  `sku` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `short_description` varchar(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `information` varchar(500) NOT NULL,
  `stock` int(10) unsigned NOT NULL default 0,
  PRIMARY KEY (`sku`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4;

# drop table `products`;

describe `products`;
