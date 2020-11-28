import store from "./../../store/mysql";
import Estacion from "./estacion.interface";

const TABLA = 'estacion';

function list() {
    return store.list(TABLA);
}

function get(id:number) {
    return store.get(TABLA, id)
}

function insert(data:Estacion) {
    return store.insert(TABLA, data);
}

function update(data:Estacion, id:number) {
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