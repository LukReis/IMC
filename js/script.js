import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()
  
  const height = inputHeight.value
  const weight = inputWeight.value

  const weightOrHeightIsNotaNumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotaNumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  const result = calculateIMC(weight, height)
  
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message =
  `Seu IMC é de ${result}`
  

  Modal.open()
  Modal.message.innerText = message
}

inputWeight.oninput = () => {
  AlertError.close()
}

inputHeight.oninput = () => {
  AlertError.close()
}

