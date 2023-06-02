export const information = {
  status: {
    code: 200,
    description: "OK",
    message: null,
  },
  data: {
    orden: null,
    hijos: [
      {
        codigo: 3087,
        nombre: "Consultas",
        titulo: "Consultas",
        orden: 1,
        hijos: [
          {
            codigo: 3088,
            nombre: "ConsultarUsuarios",
            titulo: "Consultar todos los Usuarios",
            accion: "Nueva",
            sistema: "MicrofrontEnd",
            padre: 3087,
            orden: 1,
            hijos: null,
          },
          {
            codigo: 3091,
            nombre: "ConsultarPorUsuario",
            titulo: "Consulta de usuario",
            accion: null,
            sistema: "MicrofrontEnd",
            padre: 3087,
            orden: 2,
            hijos: null,
          },
        ],
      },
      {
        codigo: 3089,
        nombre: "Especialistas",
        titulo: "Especialistas",
        accion: null,
        sistema: "MicrofrontEnd",
        padre: 3075,
        orden: 2,
        hijos: [
          {
            codigo: 3090,
            nombre: "Especiailstas",
            titulo: "Todos los especialistas",
            accion: null,
            sistema: "MicrofrontEnd",
            padre: 3089,
            orden: 1,
            hijos: null,
          },
        ],
      },
      {
        codigo: 3089,
        nombre: "Discapacidades",
        titulo: "Discapacidades",
        accion: null,
        sistema: "MicrofrontEnd",
        padre: 3075,
        orden: 2,
        hijos: [
          {
            codigo: 3090,
            nombre: "Discapacidades",
            titulo: "Discapacidades",
            accion: null,
            sistema: "MicrofrontEnd",
            padre: 3089,
            orden: 1,
            hijos: null,
          },
        ],
      },
      {
        codigo: 3089,
        nombre: "Guía  Entrenamiento",
        titulo: "Guía  Entrenamiento",
        accion: null,
        sistema: "MicrofrontEnd",
        padre: 3075,
        orden: 2,
        hijos: [
          {
            codigo: 3090,
            nombre: "RutinaEntrenamiento",
            titulo: "Rutina Entrenamiento",
            accion: null,
            sistema: "MicrofrontEnd",
            padre: 3089,
            orden: 1,
            hijos: null,
          },
        ],
      },
    ],
  },
};
