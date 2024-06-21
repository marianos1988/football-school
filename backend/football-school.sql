-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-06-2024 a las 21:20:03
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
(20, 1, 'Tomas', '132341234', '2024-06-08', '2024-06-10', '2024-06-10 16:30:00', 10000);

--
-- Índices para tablas volcadas
--

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
