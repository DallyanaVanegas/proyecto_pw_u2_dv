const lista = [
    { nombre: " Hayat ", apellido: " Cañas ", edad: " 45 ", materia: " Física Aplicada ", correo: " haca@uce.edu.ec " },
    { nombre: " Marino ", apellido: " Huertas ", edad: " 56 ", materia: " Arquitectura y Diseño ", correo: " mahu@uce.edu.ec " },
    { nombre: " Victorina ", apellido: " Salazar ", edad: " 33 ", materia: " Bellas Artes ", correo: " visa@uce.edu.ec " },
    { nombre: " Thais ", apellido: " Acevedo ", edad: " 25 ", materia: " Odontología ", correo: " thac@uce.edu.ec " },
    { nombre: " Ivet ", apellido: " Guevara ", edad: " 38 ", materia: " Ciencias Administrativas ", correo: " ivgu@uce.edu.ec " },
]

const app = Vue.createApp({
    //Options API
    data() {
        return {
            //propiedades reactivas
            lista: lista,
        }
    },
    methods: {
        agregarProfesor() {
            this.lista.unshift({ nombre: "Ines", apellido: "Mateos", edad: "38", materia: "Derecho", correo: "inma@uce.edu.ec" })
        }

    }
})

app.mount("#myApp")