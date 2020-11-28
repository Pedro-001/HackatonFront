import express from "express";
import main_router from "./api/routes";

const app = express();
const router = express.Router();

// Configuraciones
const port = 3000;

// Body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Archivos estaticos
app.use('/photos', express.static(__dirname + 'files'));

// Rutas
app.use('/api', main_router);

// Servidor
app.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`);
    
})