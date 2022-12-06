
/* Desafio 02 */
const dia = 5
const mes = 12
const ano = 2022
const FraseDoDia = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const Autoria = "Aaron Swartz"

//frase 2

const dia6 = 6
const mes12 = 12
const ano22 = 2022
const FraseDoDia2 = "A águia voa sozinha, os corvos voam em bandos. O tolo necessita de companhia, o sábio necessita de solidão!."
const Autoria2 = "Friedrich Ruckert"

document.write(`<div class="citacao">
                <h2>Frase do Dia</h2>
                <h3>${dia}/${mes}/${ano}</h3>
                <blockquote>&#10077;${FraseDoDia}&#10078;</blockquote>
                <p>${Autoria}</p>
                </div>
               `)

               //frase2

document.write(`<div class="citacao2">
                <h2>Frase do Dia</h2>
                <h3>${dia6}/${mes12}/${ano22}</h3>
                <blockquote>&#10077;${FraseDoDia2}&#10078;</blockquote>
                <p>${Autoria2}</p>
                </div>
               `)
