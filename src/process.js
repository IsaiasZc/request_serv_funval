// import { findInfo } from "./json.js";

// aqui guardaremos la respuesta que nos brinde el json
var objeto;

const findInfo = (jsonFile, usuario = "paula") => {
  // Buscamos con un filtro para ver si el archivo Json tiene el usuario que buscamos
  let respuesta = jsonFile.rows.filter((row) => {
    // console.log(row.c[1].v);

    // Aqui regreso solo el array que coincida con lo que pidió el cliente
    return row.c[1].v == usuario;
  });

  return respuesta[0].c; // regresamos como objeto la fila donde se encuentran los valores
};

// Aqui hacemos el fetch del la URL
function reqListener(userName) {
  console.log("Aqui");
  console.log(userName)
  let jsonString = this.responseText.match(/(?<="table":).*(?=}\);)/g)[0];
  let jsonFile = JSON.parse(jsonString);

  // console.log(findInfo(jsonFile));
  objeto = findInfo(jsonFile);
  console.log(objeto);
  // console.log(intento.rows);   // Aqui queriamos ver como era el json por dentro para ver la ruta exacta
}

function requestInfo(userName) {
  let usuario = userName;
  let id = "1_sN9SdRO5G0xrrisgpB-MkXI0-nOtcZsfFhrCnvikwM";
  let gid = "0";
  let url =
    "https://docs.google.com/spreadsheets/d/" +
    id +
    "/gviz/tq?tqx=out:json&tq&gid=" +
    gid;
  let oReq = new XMLHttpRequest();
  oReq.onload = reqListener,userName;
  console.log(oReq.onload)
  oReq.open("get", url, true);
  oReq.send();
}

export { requestInfo };
