-- phpMyAdmin SQL Dump
-- version 4.3.4
-- http://www.phpmyadmin.net
--
-- VÃ¤rd: localhost
-- Tid vid skapande: 16 feb 2015 kl 17:43
-- Serverversion: 5.6.22
-- PHP-version: 5.4.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `mayo`
--
CREATE DATABASE mayo;

-- --------------------------------------------------------

--
-- Tabellstruktur `footer`
--

CREATE TABLE IF NOT EXISTS `footer` (
  `name` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `postalcode` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `iid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `menu_name` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `machine_name` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `menu_links`
--

CREATE TABLE IF NOT EXISTS `menu_links` (
  `mlid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `plid` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `menu_links`
--

INSERT INTO `menu_links` (`mlid`, `title`, `path`, `menu`, `plid`, `weight`) VALUES
(24, 'Home', 'home', 'menu-main-menu', NULL, 0);

-- --------------------------------------------------------

--
-- Tabellstruktur `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `pid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` tinytext NOT NULL,
  `img_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `pages`
--

INSERT INTO `pages` (`pid`, `title`, `body`, `img_id`, `user_id`, `video_id`, `created`) VALUES
(1, 'My first title!', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex e', 0, 1, 0, '2015-02-02 10:12:17'),
(2, 'Sida 2', 'IpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIpsumPipsumPirumParonIps', NULL, 1, NULL, '2015-02-07 22:00:18');

-- --------------------------------------------------------

--
-- Tabellstruktur `url_alias`
--

CREATE TABLE IF NOT EXISTS `url_alias` (
  `aid` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `url_alias`
--

INSERT INTO `url_alias` (`aid`, `path`, `pid`) VALUES
(1, 'bla-bla-bla-bla', 1);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `description` text,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`uid`, `fname`, `lname`, `email`, `pass`, `description`, `joined`) VALUES
(1, 'Bengt', 'Andersson', 'abengt@live.com', 'bengoboy', NULL, '2015-02-03 10:09:23');

-- --------------------------------------------------------

--
-- Tabellstruktur `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `vid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index fÃ¶r dumpade tabeller
--

--
-- Index fÃ¶r tabell `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`iid`), ADD KEY `user_id` (`user_id`);

--
-- Index fÃ¶r tabell `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`machine_name`);

--
-- Index fÃ¶r tabell `menu_links`
--
ALTER TABLE `menu_links`
  ADD PRIMARY KEY (`mlid`), ADD KEY `plid` (`plid`), ADD KEY `path` (`path`);

--
-- Index fÃ¶r tabell `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`pid`), ADD UNIQUE KEY `img_id` (`img_id`);

--
-- Index fÃ¶r tabell `url_alias`
--
ALTER TABLE `url_alias`
  ADD PRIMARY KEY (`aid`), ADD KEY `pid` (`pid`);

--
-- Index fÃ¶r tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`), ADD UNIQUE KEY `email` (`email`);

--
-- Index fÃ¶r tabell `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`vid`), ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT fÃ¶r dumpade tabeller
--

--
-- AUTO_INCREMENT fÃ¶r tabell `images`
--
ALTER TABLE `images`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT fÃ¶r tabell `menu_links`
--
ALTER TABLE `menu_links`
  MODIFY `mlid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT fÃ¶r tabell `pages`
--
ALTER TABLE `pages`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT fÃ¶r tabell `url_alias`
--
ALTER TABLE `url_alias`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT fÃ¶r tabell `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT fÃ¶r tabell `video`
--
ALTER TABLE `video`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restriktioner fÃ¶r dumpade tabeller
--

--
-- Restriktioner fÃ¶r tabell `images`
--
ALTER TABLE `images`
ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

--
-- Restriktioner fÃ¶r tabell `menu_links`
--
ALTER TABLE `menu_links`
ADD CONSTRAINT `menu_links_ibfk_1` FOREIGN KEY (`plid`) REFERENCES `menu_links` (`mlid`);

--
-- Restriktioner fÃ¶r tabell `url_alias`
--
ALTER TABLE `url_alias`
ADD CONSTRAINT `url_alias_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `pages` (`pid`);

--
-- Restriktioner fÃ¶r tabell `video`
--
ALTER TABLE `video`
ADD CONSTRAINT `video_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
