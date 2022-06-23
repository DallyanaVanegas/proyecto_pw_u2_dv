console.log("Objetos y librerias de Vue.js")
console.log(Vue)

const app = Vue.createApp(
    {
        //alt+96 backticks
        //Vue utiliza una represetacion declarativa para evaluar/ejecutar experisones JS
        // template: 
        // `
        //<h1>Hola mundo desde Vue.js </h1>
        //<p>Expresion JS</p>
        //<p>{{1+1}}</p>
        //<h2>Arreglo</h2>
        //<p>{{[1,2,3,4,5,6]}}}</p>
        //<h2>Objeto</h2>
        //<p>{{ {nombre:"Dallyana", apellido:"Vanegas"} }}</p>
        //<h2>Funcion ternaria</h2>
        //<p>{{true ? 'Activo' : 'Inactivo'}}</p>
        //`

        data() {
            return {
                mensaje: 'Mensaje desde un atributo DATA',
                mensaje2: 'Prueba m2'
            }
        }
    }
)

app.mount('#myApp')