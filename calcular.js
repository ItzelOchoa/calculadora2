const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesNumeros = document.querySelectorAll('[data-numero]')
const botonesOperadores = document.querySelectorAll('[data-operador]')
const botonBorrar = document.querySelector('[data-borrar]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')

class CalcularN{
    constructor(displayValorAnterior, displayValorActual){
     this.displayValorAnterior = displayValorAnterior
     this.displayValorActual = displayValorActual
     this.ValorAnterior = ''
     this.ValorActual = ''
     this.operador = undefined
    }


agregarNumero(numero){
        if (numero === '.' && this.ValorActual.includes('.')) {
        return;
    }
 this.ValorActual = this.ValorActual + numero;
 }
     imprimirDisplay(){
         this.displayValorActual.innerText = this.ValorActual
         this.displayValorAnterior.innerText = this.ValorAnterior
     }

     borrar(){
        this.ValorActual = this.ValorActual.slice(0,-1)
     }

     elegirOperacion(operador){
        if(this.ValorActual == '') return
        if(this.ValorAnterior != ''){
            this.realizarCalculo()
        }
        this.operador = operador
        this.ValorAnterior = this.ValorActual
        this.ValorActual = ''
     }

     realizarCalculo(){
        let resultado
        let conversionValorAnterior = parseFloat(this.ValorAnterior)
        let conversionValorActual = parseFloat(this.ValorActual)

        switch (this.operador)
        {
            case '+':
                resultado = conversionValorAnterior + conversionValorActual
                break
            case '-':
                resultado = conversionValorAnterior - conversionValorActual
                break
            case '*':
                resultado = conversionValorAnterior * conversionValorActual
                break
            case '/':
                resultado = conversionValorAnterior / conversionValorActual
                break
                default: return
         }

        this.ValorActual = resultado
        this.operador = undefined
        this.ValorAnterior = ''
     }

     limpiarPantalla(){
          this.ValorActual = ''
          this.ValorAnterior = ''
          this.operador = undefined  
     }
 
}


const calcularN = new CalcularN (displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
       calcularN.agregarNumero(boton.innerText)
       calcularN.imprimirDisplay()
    })
});

botonBorrar.addEventListener('click', () =>{
    calcularN.borrar()
    calcularN.imprimirDisplay()
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
       calcularN.elegirOperacion(boton.innerText)
       calcularN.imprimirDisplay()
    })
});

botonIgual.addEventListener('click', () =>{
    calcularN.realizarCalculo()
    calcularN.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click', () =>{
    calcularN.limpiarPantalla()
    calcularN.imprimirDisplay()
})







