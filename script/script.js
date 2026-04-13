import {calcularMedia, definirStatus} from './opc.js'
import {preencherTabela} from  './preencher.js'
import { atualizarTabela, realcarStatus } from './atualizarTabela.js'

let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

// Preencher Tabela
trs = await preencherTabela(trs)
trs = atualizarTabela(trs, calcularMedia, definirStatus)
trs = realcarStatus(trs)









