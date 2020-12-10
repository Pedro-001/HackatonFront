import axios from "axios";
import { response } from "express";
import store from "../../store/mysql";
import Estacion from "./fotografia.interface";
import path from "path";
const fs = require("fs").promises;

const TABLA = "fotografia";

function list() {
  return store.list(TABLA);
}

function get(id: number) {
  return store.get(TABLA, id);
}

async function insert(idCamara: any, fotos: any[]) {
  let data: any[] = [];

  for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i];

    let path = String(foto["filename"]);
    path = path.replace(/\\/, "/");

    const prediccion = await onUpload(foto["filename"])
    let { tagName, probability } = prediccion['data']['predictions'][0];
    if (probability < .8) {
      tagName = 'sin resultado';
    }

    data.push([null, path, Number.parseInt(idCamara), tagName, probability]);
  }

  return store.multipleInsertion(TABLA, data);
}

function update(data: any, id: number) {
  return store.update(TABLA, data, id);
}

function drop(id: number) {
  return store.drop(TABLA, id);
}

function query(queryUser:any) {
  return store.query(TABLA, queryUser, null)
}

async function onUpload(fileName: any) {

  const image = await fs.readFile(path.join(__dirname,'files', fileName));

    
//   const formData = new FormData();
//   formData.append("image", image, image.name);
  return axios.post(
    "https://northcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/eaa0d30d-1694-4328-a6ee-0aadae74d795/classify/iterations/Modelo%202024/image",
    image,
    {
      headers: {
        "Prediction-Key": "db5a1c510c634625918c1d3d892c7ded",
        "Content-Type": "application/octet-stream",
      },
    }
  );
}
export default {
  list,
  get,
  insert,
  drop,
  update,
  query
};
