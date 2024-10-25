-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2024 a las 15:21:07
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `football-school`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floors`
--

CREATE TABLE `floors` (
  `id_floor` int(10) NOT NULL,
  `type_floor` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `floors`
--

INSERT INTO `floors` (`id_floor`, `type_floor`) VALUES
(1, 'Cemento'),
(2, 'Cesped Natural'),
(3, 'Cesped Sintetico'),
(4, 'Salon');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'admin', '03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `id_stadium` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `cliente` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `fecha_reserva` date NOT NULL,
  `hora_reserva` datetime NOT NULL,
  `email` varchar(50) NOT NULL,
  `senia` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `id_stadium`, `id_user`, `cliente`, `telefono`, `fecha_ingreso`, `fecha_reserva`, `hora_reserva`, `email`, `senia`) VALUES
(45, 0, 0, 'Santiago', '4444888899', '2024-09-25', '2024-09-26', '2024-09-26 18:00:00', 'nicolas@asd.com', 10000),
(46, 0, 0, 'Santiagox', '4444888899', '2024-09-25', '2024-09-26', '2024-09-26 18:00:00', 'nicolas@asd.com', 10000),
(47, 0, 0, 'Facundo', '1234123455', '2024-09-25', '2024-12-12', '2024-12-12 18:10:00', 'mariano@hotmail.com', 10000),
(48, 0, 0, 'Tomas', '12341234', '2024-09-25', '2024-09-25', '2024-09-25 17:10:00', 'nicolas@asd.com', 120000),
(49, 6, 0, 'Martin', '43214444', '2024-09-26', '2024-09-26', '2024-09-26 18:10:00', 'mariano.floresta@hotmail.com', 14998),
(50, 0, 0, 'Nicolas', '12345678', '2024-09-26', '2024-09-27', '2024-09-27 20:00:00', 'mariano@hotmail.com', 15000),
(51, 0, 0, 'Marcos', '1566889977', '2024-10-23', '2024-10-31', '2024-10-31 12:15:00', 'mariano.floresta@hotmail.com', 170000),
(52, 5, 1, 'Mariano', '1145678892', '2024-10-25', '2024-10-31', '2024-10-31 15:15:00', 'mariano@hotmail.com', 20000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stadiums`
--

CREATE TABLE `stadiums` (
  `id` int(5) NOT NULL,
  `id_user` int(50) NOT NULL,
  `typeStadium` int(5) NOT NULL,
  `type_floor` varchar(25) DEFAULT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `stadiums`
--

INSERT INTO `stadiums` (`id`, `id_user`, `typeStadium`, `type_floor`, `name`, `description`) VALUES
(5, 1, 5, 'Cesped Sintetico', 'Cancha 5', 'Cancha 5 de cesped sintetico'),
(6, 1, 8, 'Cesped Natural', 'Cancha 8', 'Cancha 8 de Cesped Natural');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `floors`
--
ALTER TABLE `floors`
  ADD PRIMARY KEY (`type_floor`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `stadiums`
--
ALTER TABLE `stadiums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_floors` (`type_floor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `stadiums`
--
ALTER TABLE `stadiums`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stadiums`
--
ALTER TABLE `stadiums`
  ADD CONSTRAINT `type_floors` FOREIGN KEY (`type_floor`) REFERENCES `floors` (`type_floor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
