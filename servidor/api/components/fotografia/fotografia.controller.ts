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
    const { tagName, probability } = prediccion['data']['predictions'][0];

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

async function onUpload(fileName: any) {
  const image = await fs.readFile(path.join("dist","files", fileName));
    
//   const formData = new FormData();
//   formData.append("image", image, image.name);
  return axios.post(
    "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0cfacc40-5db4-468e-aa75-ce5c9e5b078c/detect/iterations/Hackathon%20modelo%201/image",
    image,
    {
      headers: {
        "Prediction-Key": "d5255a630d514403811ceab4988dcc4f",
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
};