import { Router, Request, Response, NextFunction, response } from "express";
import respuesta from "../../response";
import controller from "./localidad.controller"
import Localidad from "./localidad.interface";
const router = Router();

// Rutas
router.get('', list);
router.get('/:idLocalidad', get);
router.post('', insert);
router.put('/:idLocalidad', update);
router.delete('/:idLocalidad', drop)

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
        let { idLocalidad } = req.params;
        const idLocalidadNumber = Number.parseInt(idLocalidad)

        const data = await controller.get(idLocalidadNumber)
        respuesta.success(req,res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

    
}


async function insert(req:Request, res:Response, next: NextFunction) {
    try {

        const localidad:Localidad = req.body;
        const data = await controller.insert(localidad);

        respuesta.success(req, res, data, 200)
            
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }
    
}


async function update(req:Request, res:Response, next: NextFunction) {
    
    try {
        const localidad = req.body;
        const {idLocalidad} = req.params;
        const idLocalidadNumber = Number.parseInt(idLocalidad);
        const data = await controller.update(localidad, idLocalidadNumber)
        respuesta.success(req, res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

        
}

async function drop(req:Request, res:Response, next: NextFunction) {
    
    try {
        const { idLocalidad } = req.params;
        const idLocalidadNumber = Number.parseInt(idLocalidad);
        const data = await controller.drop(idLocalidadNumber)
        respuesta.success(req, res, data, 200);
    } catch (error) {
        respuesta.error(req, res, error, 500)
    }

    
}

export default router;