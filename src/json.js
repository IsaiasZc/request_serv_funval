// Aqui procesaremos el Json y daremos la respuesta al cliente

const findInfo = (json, usuario="paula") => {

  // Buscamos con un filtro para ver si el archivo Json tiene el usuario que buscamos
  let respuesta = json.rows.filter((row, index) => row[0].c[index].v == usuario)

  return respuesta
}


export {findInfo}