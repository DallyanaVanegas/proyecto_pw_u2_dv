const lista = []

const app = Vue.createApp({
    //Options API
    data() {
        return {
            //propiedades reactivas
            lista: lista,
            tarea: ""
        }
    },
    methods: {
        agregarTarea() {
            this.lista.push({tarea: this.tarea })
            this.tarea = ""
        },
        eventoFinal() {
            console.log("se dispara el evento")
            this.lista.push({ tarea: this.tarea })
            this.tarea = ""
        }

    }
})

app.mount("#myApp")