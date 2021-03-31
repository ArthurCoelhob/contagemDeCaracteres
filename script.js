const areaDoTexto = document.querySelector('textarea') // seleciona a areatexto
const conta = document.querySelector('.resultado') // seleciona a conta

// ao receber valor já ira demonstrar o tamanho do texto 
// inserido pelo user
function somarCaractere() {
    const tamanhoTexto = areaDoTexto.value.length
    conta.innerHTML = `${tamanhoTexto}` // adiciona um texto no html

}
areaDoTexto.addEventListener('keyup', somarCaractere) // ao receber o metodo aciona a função.