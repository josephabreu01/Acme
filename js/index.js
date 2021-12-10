let archivo = document.getElementById("archivo");
let output = document.getElementById("output");
const r_name = "^\\w+";
const expre = /.[A-Z][0-9]\W.+/m;
let employee = [];

archivo.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    let myFile = this.files[0];
    let reader = new FileReader();

    reader.addEventListener("loadend", function (e) {
      let contenido = e.target.result;
      let lineas = contenido.split("\n");

      for (const linea of lineas) {
        let nombre = linea.match(r_name);

        let fechas = linea.match(expre);

        employee.push(empleado(nombre, fechas));

        
       
      }

      
      console.log({ employee });
      
         
     
     
    });

    reader.readAsBinaryString(myFile);
  }
});

function empleado(nombre, fecha) {
  const empleado = {
    nombre: '',
    fecha: ''
  };


  if (nombre) {
    nombre.forEach((element) => {
      empleado.nombre = element;
    });
  }

  
  if (fecha) {
    fecha.forEach((element) => {
      empleado.fecha = element.split(/\,/);
    });
  }

  
  return empleado;
}


