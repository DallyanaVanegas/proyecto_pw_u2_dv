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
            mensaje: "",
            nombre:"",
            apellido:"",
            edad:""
        }
    },
    methods: {
        agregarEstudianteI() {
            this.lista.unshift({ nombre: this.nombre, apellido: "cedeño", edad: "21" })
            this.mensaje = ""
        },
        agregarEstudianteF() {
            this.lista.push({ nombre: this.nombre, apellido: "cedeño", edad: "21" })
            this.mensaje = ""
        },
        agregarEstudiante(type) {
            if (type === 'inicio') {
                this.lista.unshift({ nombre: this.nombre, apellido: this.apellido, edad: this.edad })
            } else {
                this.lista.push({ nombre: this.nombre, apellido: this.apellido, edad: this.edad })
            }
            this.nombre = ""
            this.apellido = ""
            this.edad = ""
        },
        eventoKey(event) {
            if (event.charCode === 13) {
                console.log("se dispara el evento")
                console.log(event)
                this.lista.unshift({ nombre: this.mensaje, apellido: "Cedeño", edad: "21" })
            }
        },
        eventoKeyDesestructurado({ charCode, key }) {
            //console.log(key)
            //console.log(charCode)
            console.log("entro al evento")
            //Evento desestructurado
            if (charCode === 13) {
                console.log("se dispara el evento")
                this.lista.unshift({ nombre: this.mensaje, apellido: "Cedeño", edad: "21" })
            }
        },
        eventoFinal() {
            //Ejemplo de modificadores de eventos
            console.log("entro al evento")
            this.lista.unshift({ nombre: this.mensaje, apellido: "Cedeño", edad: "21" })
            this.mensaje=""
        }

    }
})

app.mount("#myApp")