# ************************************************************
# Sequel Ace SQL dump
# Versão 20029
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Servidor: 127.0.0.1 (MySQL 5.7.38)
# Banco de Dados: viviajar
# Tempo de geração: 2022-10-24 22:30:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump de tabela clientes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump de tabela destino
# ------------------------------------------------------------

DROP TABLE IF EXISTS `destino`;

CREATE TABLE `destino` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump de tabela passagem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `passagem`;

CREATE TABLE `passagem` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_cliente` bigint(20) DEFAULT NULL,
  `id_destino` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKc1qulo03xlpd88ud6eeakjhhc` (`id_cliente`),
  KEY `FK2hop6o9qk71s8dgmita86kv5q` (`id_destino`),
  CONSTRAINT `FK2hop6o9qk71s8dgmita86kv5q` FOREIGN KEY (`id_destino`) REFERENCES `destino` (`id`),
  CONSTRAINT `FKc1qulo03xlpd88ud6eeakjhhc` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
