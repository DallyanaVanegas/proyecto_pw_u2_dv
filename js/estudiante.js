const lista = [
    { nombre: "Dallyana", apellido: "Vanegas", edad: "23" },
    { nombre: "Milena", apellido: "Jaramillo", edad: "22" },
    { nombre: "Ismael", apellido: "Asimbaya", edad: "22" },
    { nombre: "Roberth", apellido: "Troya", edad: "26" },
    { nombre: "Leonardo", apellido: "Zuñiga", edad: "22" },
    { nombre: "Anthonny", apellido: "Montero", edad: "26" }
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
        agregarEstudiante(){
            this.lista.unshift({ nombre: "Cristian", apellido: "Cedeño", edad: "21"})
        }

    }
})

app.mount("#myApp")