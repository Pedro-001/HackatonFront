-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2020 a las 05:44:10
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `karma_platform`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camara`
--

CREATE TABLE `camara` (
  `id` int(11) NOT NULL,
  `marca` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `dia_colocacion` date DEFAULT NULL,
  `dia_remocion` date DEFAULT NULL,
  `latitud` float DEFAULT NULL,
  `longitud` float DEFAULT NULL,
  `altitud` int(11) DEFAULT NULL,
  `vegetacion` varchar(50) DEFAULT NULL,
  `collector` varchar(50) DEFAULT NULL,
  `idEstacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camara`
--

INSERT INTO `camara` (`id`, `marca`, `modelo`, `dia_colocacion`, `dia_remocion`, `latitud`, `longitud`, `altitud`, `vegetacion`, `collector`, `idEstacion`) VALUES
(1, 'bull', '4k', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4),
(2, 'bull', '4k', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacion`
--

CREATE TABLE `estacion` (
  `id` int(11) NOT NULL,
  `provincia` varchar(30) NOT NULL,
  `pais` varchar(30) NOT NULL,
  `notas` text NOT NULL,
  `idLocalidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estacion`
--

INSERT INTO `estacion` (`id`, `provincia`, `pais`, `notas`, `idLocalidad`) VALUES
(4, 'morelos', 'mexico', 'ninguna nota', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotografia`
--

CREATE TABLE `fotografia` (
  `id` int(11) NOT NULL,
  `path` varchar(100) NOT NULL,
  `idCamara` int(11) NOT NULL,
  `especie` varchar(50) NOT NULL DEFAULT 'Sin analizar',
  `probabilidad` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fotografia`
--

INSERT INTO `fotografia` (`id`, `path`, `idCamara`, `especie`, `probabilidad`) VALUES
(100, '1606607519169Puma_6.png', 1, 'Puma', 0.552735),
(101, '1606607657099Puma_6.png', 1, 'Puma', 0.552735),
(102, '1606607769598Ocelot_(Jaguatirica)_Zoo_Itatiba.jpg', 1, 'Ocelote', 0.0744139),
(103, '1606607769599Puma_6.png', 1, 'Puma', 0.552735),
(104, '1606611593434Ocelot_(Jaguatirica)_Zoo_Itatiba.jpg', 1, 'Ocelote', 0.0744139),
(105, '1606611593436Puma_6.png', 1, 'Puma', 0.552735),
(106, '1606611624388Ocelot_(Jaguatirica)_Zoo_Itatiba.jpg', 1, 'Ocelote', 0.0744139),
(107, '1606611624390Puma_6.png', 1, 'Puma', 0.552735);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`id`, `nombre`) VALUES
(1, 'Comunidad Achuar de Wachirpas Amazonas Ecuatoriano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado_analisis`
--

CREATE TABLE `resultado_analisis` (
  `id` int(11) NOT NULL,
  `idFotografia` int(11) NOT NULL,
  `analisado` tinyint(1) NOT NULL DEFAULT 0,
  `especie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `camara`
--
ALTER TABLE `camara`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estacion`
--
ALTER TABLE `estacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idLocalidad` (`idLocalidad`);

--
-- Indices de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCamara` (`idCamara`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `resultado_analisis`
--
ALTER TABLE `resultado_analisis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFotografia` (`idFotografia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `camara`
--
ALTER TABLE `camara`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estacion`
--
ALTER TABLE `estacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `resultado_analisis`
--
ALTER TABLE `resultado_analisis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estacion`
--
ALTER TABLE `estacion`
  ADD CONSTRAINT `estacion_ibfk_1` FOREIGN KEY (`idLocalidad`) REFERENCES `localidad` (`id`);

--
-- Filtros para la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD CONSTRAINT `fotografia_ibfk_1` FOREIGN KEY (`idCamara`) REFERENCES `camara` (`id`);

--
-- Filtros para la tabla `resultado_analisis`
--
ALTER TABLE `resultado_analisis`
  ADD CONSTRAINT `resultado_analisis_ibfk_1` FOREIGN KEY (`idFotografia`) REFERENCES `fotografia` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
