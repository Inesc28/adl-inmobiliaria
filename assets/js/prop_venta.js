const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de campo con amplio jardín",
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    descripcion:
      "Hermosa casa de campo con un gran jardín, ideal para familias.",
    ubicacion: "101 Rural Lane, Countryside, CA 12345",
    habitaciones: 5,
    costo: 6000,
    smoke: true,
    pets: true,
  },
];

document.getElementById("cardProps");

let section = "";

for (let propiedad of propiedades_venta) {
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
                    <i class="fas fa-bed"></i>${propiedad.habitaciones} ${"Habitaciones"}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
              </div>`;

                if (propiedad.pets === true) {
                  section += `<p class="text-success">
                                <i class="fas fa-paw"></i>${"Mascotas Permitidas"}
                              </p>`;
                } else {
                  section +=`<p class="text-danger">
                                <i class="fas fa-ban"></i>${"No se permiten mascotas"}
                             </p>`
                }

                if (propiedad.smoke === true) {
                  section += `<p class="text-success">
                                <i class="fas fa-smoking"></i>${"Permitido fumar"}
                              </p>`;
                } else {
                  section +=`<p class="text-danger">
                                <i class="fas fa-smoking-ban"></i>${"No se permite fumar"}
                             </p>`
                }

}

cardProps.innerHTML = section;
