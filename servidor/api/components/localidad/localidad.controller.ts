import store from "./../../store/mysql";
import Localidad from "./localidad.interface";

const TABLA = 'localidad';

function list() {
    return store.list(TABLA);
}

function get(idLocalidad:number) {
    return store.get(TABLA, idLocalidad)
}

function insert(localidad:Localidad) {
    return store.insert(TABLA, localidad);
}

function update(localidad:Localidad, id:number) {
    return store.update(TABLA, localidad, id)
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