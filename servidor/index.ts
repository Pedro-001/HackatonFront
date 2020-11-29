import express from "express";
import main_router from "./api/routes";
import path from "path";
import cors from 'cors';

const app = express();
const router = express.Router();

// Configuraciones
const port = 3000;

// Body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// CORS
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

// Archivos estaticos
app.use('/static', express.static(path.join(__dirname, 'files')));

// Rutas
app.use('/api', main_router);

// Servidor
app.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`);
    
})