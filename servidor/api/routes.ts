import { Router } from 'express';
import RUTAS_LOCALIDAD from './components/localidad/localidad.router';
import RUTAS_ESTACION from './components/estacion/estacion.router';
import RUTAS_CAMARA from './components/camara/camara.router';
import RUTAS_FOTOGRAFIA from './components/fotografia/fotografia.router';

const router = Router();

// Rutas
router.use('/localidad', RUTAS_LOCALIDAD)
router.use('/estacion', RUTAS_ESTACION)
router.use('/camara', RUTAS_CAMARA)
router.use('/fotografia', RUTAS_FOTOGRAFIA)

export default router;