const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "789 Residential Street, Quiet Neighborhood, CA 67890",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Estudio compacto en el centro financiero",
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRpb3xlbnwwfHwwfHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    descripcion:
      "Estudio ideal para profesionales, ubicado en el corazón del distrito financiero.",
    ubicacion: "100 Financial Plaza, Downtown, CA 10001",
    habitaciones: 1,
    costo: 1800,
    smoke: false,
    pets: false,
  },
];

document.getElementById("cardProps");

let section = "";

for (let propiedad of propiedades_alquiler) {
  section += `<div class="card">
                  <img src="${propiedad.src}" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${propiedad.nombre}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${propiedad.ubicacion}
                  </p>
                  <p class="rooms">
                    <i class="fas fa-bed"></i>${
                      propiedad.habitaciones
                    } ${"Habitaciones"}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                </div>`;

  if (propiedad.pets === true) {
    section += `<p class="text-success">
                                <i class="fas fa-paw"></i>${"Mascotas Permitidas"}
                              </p>`;
  } else {
    section += `<p class="text-danger">
                                <i class="fas fa-ban"></i>${"No se permiten mascotas"}
                             </p>`;
  }

  if (propiedad.smoke === true) {
    section += `<p class="text-success">
                                <i class="fas fa-smoking"></i>${"Permitido fumar"}
                              </p>`;
  } else {
    section += `<p class="text-danger">
                                <i class="fas fa-smoking-ban"></i>${"No se permite fumar"}
                             </p>`;
  }
}

cardProps.innerHTML = section;
