/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 11.5.2-MariaDB : Database - db_task
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_task` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;

USE `db_task`;

/*Table structure for table `tbl_product` */

DROP TABLE IF EXISTS `tbl_product`;

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NULL DEFAULT current_timestamp(),
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

/*Data for the table `tbl_product` */

insert  into `tbl_product`(`id`,`name`,`desc`,`price`,`created_on`,`updated_on`,`status`) values 
(1,'Wireless Bluetooth Headphones','Experience premium sound quality and comfortable listening with these wireless Bluetooth headphones. Ideal for music lovers, these headphones offer noise-canceling features, long battery life, and are sweat-resistant.',79.99,'2025-05-06 16:25:43','2025-05-06 16:25:43',1),
(2,'SolarGlow Wireless Charger','Charge your devices wirelessly with the sleek and energy-efficient SolarGlow charger. With fast-charging capabilities and a stylish LED ring, it’s perfect for both home and office use.',29.98,'2025-05-08 10:14:11','2025-05-08 10:14:11',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
