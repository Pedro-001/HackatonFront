import { Router, Request, Response, NextFunction } from 'express'
import path from 'path';
import multer from "multer";
import respuesta from "../../response";
import controller from './fotografia.controller';
import Fotografia from './fotografia.interface'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', '..', 'files'))
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname)
    }
})
const upload = multer({storage})

const router = Router();

// Rutas
router.get('', list);
router.get('/:id', get);
router.post('', upload.array('photos'), insert);
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

        const {idCamara}:any = req.body;
        let files = req.files;
        console.log(files);
        
        const data = await controller.insert(idCamara, files);
        console.log(files); 
        

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