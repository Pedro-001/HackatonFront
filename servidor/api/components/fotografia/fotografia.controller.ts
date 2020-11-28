

import { response } from "express";
import store from "../../store/mysql";
import Estacion from "./fotografia.interface";


const TABLA = 'fotografia';

function list() {
    return store.list(TABLA);
}

function get(id:number) {
    return store.get(TABLA, id)
}

async function insert(idCamara:any, fotos:any[]) {
    let data:any[] = [];
    
    for (let i = 0; i < fotos.length; i++) {
        const foto = fotos[i];
        let path = String(foto['path']);
        path = path.replace(/\\/, "/");
        data.push([
            null,
            path,
            Number.parseInt(idCamara)
        ])
    }

    
    return store.multipleInsertion(TABLA, data);

}

function update(data:any, id:number) {
    return store.update(TABLA, data, id)
}

function drop(id: number) {
    return store.drop(TABLA, id);
}

export default {
    list,
    get,
    insert,
    drop,
    update
}