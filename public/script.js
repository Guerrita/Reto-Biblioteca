function showForm(element) {
  document.getElementById(element).style.display = "block";
}

function hide(element) {
  document.getElementById(element).style.display = "none";
}
function crudLibros() {
  let buscar = document.getElementById("buscar_opt_1").checked;
  let modificar = document.getElementById("modificar_opt_1").checked;
  let eliminar = document.getElementById("eliminar_opt_1").checked;
  let agregar = document.getElementById("agregar_opt_1").checked;
  let id = document.getElementById("id_libro").value;

  let url = window.location +"api/v1/libros";

  if (buscar) {
    if (id) {
      url = url + "/" + id;
    }
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {console.log(response.json());})
      .then(() => location.replace(url))
      .catch((error) => console.error("Error:", error));
  }
  if (agregar) {
    let id = document.getElementById("id_libro").value;
    let titulo = document.getElementById("titulo_libro").value;
    let categoria = document.getElementById("tipo_categoria").value;
    let data = {
      idLibro: parseInt(id),
      titulo: titulo,
      idCategoria: parseInt(categoria),
    };

    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    postData(url, data)
      .then(() => location.replace(url + "/" + id))
  }

  if (eliminar) {
    let id = document.getElementById("id_libro").value;
    let url = window.location + "api/v1/libros/" + id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(alert("Libro eliminado"))
      .catch((error) => console.error("Error:", error));
  }
  if(modificar){
    let id = document.getElementById("id_libro").value;
    let titulo = document.getElementById("titulo_libro").value;
    let categoria = document.getElementById("tipo_categoria").value;
    let data 
    if(titulo==""){
      data = {
        idCategoria: parseInt(categoria),
      };
    }
    else if(categoria==""){
      data = {
        titulo: titulo,
      };
    }
    else if(!(titulo == "" && categoria == "")){
      data = {
          titulo: titulo,
          idCategoria: parseInt(categoria),
      };
    }else{
      alert("Debe colocar al menos un dato")
    }
    async function patchtData(url = "", data = {}) {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
    url = url + "/" + id
    patchtData(url, data)
      .then(() => location.replace(url))
      .catch((error) => console.error("Error:", error));
  }
}


  //CRUD prestamos
  function crudPrestamos() {
    let buscar = document.getElementById("buscar_opt_2").checked;
    let modificar = document.getElementById("modificar_opt_2").checked;
    let eliminar = document.getElementById("eliminar_opt_2").checked;
    let agregar = document.getElementById("agregar_opt_2").checked;
    
    let id = document.getElementById("id_prestamo").value;
  
    let url = window.location +"api/v1/prestamos/";
  
    if (buscar) {
      if (id) {
        url = url + id;
      }
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {console.log(response.json());})
      .then(() => location.replace(url))
      .catch((error) => console.error("Error:", error));
    }

    if (agregar) {
      let idEstudiante = document.getElementById("id_estudiante_prestamo").value;
      let idLibro = document.getElementById("id_libro_prestamo").value;
      let data = {
        idPrestamo: parseInt(id),
        idLibro: parseInt(idLibro),
        idLector: parseInt(idEstudiante),
        
      };
  
      async function postData(url = "", data = {}) {
          const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
              'Content-Type': 'application/json'
              }
          });
          return response.json();
      }
  
      postData(url, data)
        .then(alert("Prestamo Agregado"))
        .catch((error) => console.error("Error:", error));
    }
  
    if (eliminar) {
      let id = document.getElementById("id_prestamo").value;
      url = url + id;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(alert("Prestamo eliminado"))
        .catch((error) => console.error("Error:", error));
    }

    /*if(modificar){
      let id = document.getElementById("id_libro").value;
      let titulo = document.getElementById("titulo_libro").value;
      let categoria = document.getElementById("tipo_categoria").value;
      let data 
      if(titulo==""){
        data = {
          idCategoria: parseInt(categoria),
        };
      }
      else if(categoria==""){
        data = {
          titulo: titulo,
        };
      }
      else if(!(titulo == "" && categoria == "")){
        data = {
            titulo: titulo,
            idCategoria: parseInt(categoria),
        };
      }else{
        alert("Debe colocar al menos un dato")
      }
      async function patchtData(url = "", data = {}) {
          const response = await fetch(url, {
              method: 'PATCH',
              body: JSON.stringify(data),
              headers: {
              'Content-Type': 'application/json'
              }
          });
          return response.json();
      }
      url = url + "/" + id
      patchtData(url, data)
        .then(() => location.replace(url))
        .catch((error) => console.error("Error:", error));
    }*/
  }

  /*function crudCategorias() {
    let tipo = document.getElementById("tipo_opt_2").checked;
    let buscar = document.getElementById("buscar_opt_2").checked;
    let modificar = document.getElementById("modificar_opt_2").checked;
    let eliminar = document.getElementById("eliminar_opt_2").checked;
    let agregar = document.getElementById("agregar_opt_2").checked;
    
    let id = document.getElementById("id_prestamo").value;
  
    let url = window.location +"api/v1/prestamos/";
  
    if (tipo || buscar) {
      if (id) {
        url = url + id;
      }
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {console.log(response.json());})
      .then(() => location.replace(url))
      .catch((error) => console.error("Error:", error));
    }

    if (agregar) {
      let id = document.getElementById("id_prestamo").value;
      let idEstudiante = document.getElementById("id_estudiante_prestamo").value;
      let idLibro = document.getElementById("id_libro_prestamo").value;
      let data = {
        idLibro: parseInt(id),
        idEstudiante: parseInt(idEstudiante),
        idLibro: parseInt(idLibro),
      };
  
      async function postData(url = "", data = {}) {
          const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
              'Content-Type': 'application/json'
              }
          });
          return response.json();
      }
  
      postData(url, data)
        .then(() => location.replace(url + "/" + id))
    }
  
    if (eliminar) {
      let id = document.getElementById("id_prestamo").value;
      let url = url + id;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(alert("Prestamo eliminado"))
        .catch((error) => console.error("Error:", error));
    }

    /*if(modificar){
      let id = document.getElementById("id_libro").value;
      let titulo = document.getElementById("titulo_libro").value;
      let categoria = document.getElementById("tipo_categoria").value;
      let data 
      if(titulo==""){
        data = {
          idCategoria: parseInt(categoria),
        };
      }
      else if(categoria==""){
        data = {
          titulo: titulo,
        };
      }
      else if(!(titulo == "" && categoria == "")){
        data = {
            titulo: titulo,
            idCategoria: parseInt(categoria),
        };
      }else{
        alert("Debe colocar al menos un dato")
      }
      async function patchtData(url = "", data = {}) {
          const response = await fetch(url, {
              method: 'PATCH',
              body: JSON.stringify(data),
              headers: {
              'Content-Type': 'application/json'
              }
          });
          return response.json();
      }
      url = url + "/" + id
      patchtData(url, data)
        .then(() => location.replace(url))
        .catch((error) => console.error("Error:", error));
    }
  }*/
  

  //CRUD estudiantes

