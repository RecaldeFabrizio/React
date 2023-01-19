
const promise = (dataBase, time) => {
  return new Promise((resolve, reject) => {
        setTimeout (() =>{
          resolve(dataBase);
          reject(new Error("Algo salio mal"))
        },time) 
  }) 
}

export default promise