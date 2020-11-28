import store from "./../../store/mysql";
import Camara from "./camara.interface";

const TABLA = 'camara';

function list() {
    return store.list(TABLA);
}

function get(id:number) {
    return store.get(TABLA, id)
}

function insert(data:Camara) {
    return store.insert(TABLA, data);
}

function update(data:Camara, id:number) {
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