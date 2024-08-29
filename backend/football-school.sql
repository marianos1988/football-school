-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-08-2024 a las 22:02:20
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
  `cliente` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `fecha_reserva` date NOT NULL,
  `hora_reserva` datetime NOT NULL,
  `senia` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `id_stadium`, `cliente`, `telefono`, `fecha_ingreso`, `fecha_reserva`, `hora_reserva`, `senia`) VALUES
(16, 1, 'Tomas', '12345678', '2024-05-28', '2024-05-28', '2024-05-28 15:00:00', 20000),
(17, 2, 'Juan Ignacio', '43214321', '2024-05-28', '2024-05-28', '2024-05-28 20:00:00', 15000),
(18, 2, 'Sabrina', '12341234', '2024-06-05', '2024-06-05', '2024-06-05 15:00:00', 19990),
(19, 2, 'Julio', '12341234', '2024-06-07', '2024-06-07', '2024-06-07 12:38:00', 0),
(20, 1, 'Tomas', '132341234', '2024-06-08', '2024-06-10', '2024-06-10 16:30:00', 10000),
(21, 1, 'Marcos', '12341234', '2024-08-11', '2024-08-12', '2024-08-12 15:00:00', 20000),
(22, 1, 'Belen', '12341234', '2024-08-17', '2024-08-19', '2024-08-19 19:00:00', 20000);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
