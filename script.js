import {calcularMedia, definirStatus} from './opc.js'


let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

// Preencher Tabela
let promise = await fetch('http://192.168.0.157:5500/bd.json')
let alunos = await promise.json()
console.log(alunos)

for (let index = 0; index < trs.length; index++){
    let filhos = trs[index].children

    filhos = Array.from(filhos)

    filhos[0].textContent = alunos[index].nome
    filhos[1].textContent = alunos[index].nota_1
    filhos[2].textContent = alunos[index].nota_2
    filhos[3].textContent = alunos[index].nota_3

    //console.log(filhos)
}







for (let index = 0; index < trs.length; index++) {
    let filho = trs[index].children

    let nota1 = parseFloat(filho[1].textContent)
    let nota2 = parseFloat( filho[2].textContent)
    let nota3 = parseFloat(filho[3].textContent)
    
    let tdStatus = filho[5]

    let media = calcularMedia(nota1, nota2, nota3)
    let tdMedia = filho[4]
    tdMedia.textContent = media.toFixed(2)
    let status = definirStatus(media, tdStatus)
}

// // ITERADOR
// trs.forEach(tr => {
//     let filhos = tr.children
    
//     let status = filhos[5]
       
//     if(status.textContent == 'REPROVADO'){
//         status.style.backgroundColor = 'red'
//     } else if(status.textContent == 'RECUPERAÇÃO'){
//        status.style.backgroundColor = 'gray'
//     } else{ 
//         status.style.backgroundColor = 'green'
//     }
// })

// trs.forEach(tr =>{
//     let filhos = tr.children
    
//     let status = filhos[5]
//     if(status.textContent == 'RECUPERAÇÃO'){
//         tr.classList.add('recuperacao')
//     }
// })

// // filtro na tabela
// input.addEventListener('input', ()=>{

//     //let texto = entrada.value
//     let esconder = true

//     trs.forEach(tr => {
//         tr.visible = true
//         let tds = tr.children
        
                
//         if(!tds[5].textContent.includes(input.value)){
//             tr.visible = false      
//         }
        
//         console.log(tr.visible)
        
//         if(tr.visible){
//             tr.style.display = 'table-row'
//         } else {
//             tr.style.display = 'none'
//         }
        
//     })
//     console.log('----')

// })





