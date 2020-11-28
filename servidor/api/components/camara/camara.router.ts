import { Router, Request, Response, NextFunction } from 'express'
import respuesta from "../../response";
import controller from './camara.controller';
import Estacion from './camara.interface'


const router = Router();

// Rutas
router.get('', list);
router.get('/:id', get);
router.post('', insert);
router.put('/:id', update);
router.delete('/:id', drop)

// Funciones
async function list(req:Request, res:Response, next: NextFunction) {
    
    try {
        const data = await controller.list()
        respuesta.success(req, res, data, 200)
    } catch (error) {
        respuesta.error(req, res, error, 500);
    }
    
}

async function get(req:Request, res:Response, next: NextFunction) {
    
    try {
        let { id } = req.params;
        const idNumber = Number.parseInt(id)

        const data = await controller.get(idNumber)
        respuesta.success(req,res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

    
}


async function insert(req:Request, res:Response, next: NextFunction) {
    try {

        const body:Estacion = req.body;
        const data = await controller.insert(body);

        respuesta.success(req, res, data, 200)
            
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }
    
}


async function update(req:Request, res:Response, next: NextFunction) {
    
    try {
        const localidad = req.body;
        const {id} = req.params;
        const idNumber = Number.parseInt(id);
        const data = await controller.update(localidad, idNumber)
        respuesta.success(req, res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

        
}

async function drop(req:Request, res:Response, next: NextFunction) {
    
    try {
        const { id } = req.params;
        const idNumber = Number.parseInt(id);
        const data = await controller.drop(idNumber)
        respuesta.success(req, res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

    
}

export default router;