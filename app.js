const form = document.querySelector('.form-imc')
const feedback = document.querySelector('.feedback')
const clearButton = document.querySelector('.clear-button')

const calcImc = (weight, height) => weight / height ** 2

const getMessageImc = (resultImc) => {
  const underWeight = resultImc < 18.5
  const normalWeight = resultImc >= 18.5 && resultImc <= 24.99
  const excessWeight = resultImc >= 25 && resultImc <= 29.99
  const obesityGrade1 = resultImc >= 30 && resultImc <= 34.99
  const obesityGrade2 = resultImc >= 35 && resultImc <= 39.99
  const obesityGrade3 = resultImc >= 40

  const message = underWeight
    ? `IMC: ${resultImc} | Abaixo do peso. Seu IMC deve estar entre 18,5 e 24,9.`
    : normalWeight
      ? `IMC: ${resultImc} | Parabéns! Você está no peso normal.`
      : excessWeight
        ? `IMC: ${resultImc} | Acima do peso. Seu IMC deve estar entre 18,5 e 24,9.`
        : obesityGrade1
          ? `IMC: ${resultImc} | Obesidade grau 1. Seu IMC deve estar entre 18,5 e 24,9.`
          : obesityGrade2
            ? `IMC: ${resultImc} | Obesidade grau 2. Seu IMC deve estar entre 18,5 e 24,9.`
            : obesityGrade3
              ? `IMC: ${resultImc} | Obesidade grau 3. Seu IMC deve estar entre 18,5 e 24,9.` : resultImc

  return message
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputHeight = event.target.height.value
  const inputWeight = event.target.weight.value

  const resultImc = calcImc(inputWeight, inputHeight).toFixed(1)
  feedback.textContent = getMessageImc(resultImc)

  // if (underWeight) {
  //   feedback.textContent = imcMessages.underWeight
  //   getColorMessage('style', 'color: #856404')
  //   return
  // }

  // if (normalWeight) {
  //   feedback.textContent = imcMessages.normalWeight
  //   getColorMessage('style', 'color: #155724')
  //   return
  // }

  // if (overWeight) {
  //   feedback.textContent = imcMessages.overWeight
  //   getColorMessage('style', 'color: #e9828c')
  //   return
  // }

  // if (obesityGrade1) {
  //   feedback.textContent = imcMessages.obesityGrade1
  //   getColorMessage('style', 'color: #f04254')
  //   return
  // }

  // if (obesityGrade2) {
  //   feedback.textContent = imcMessages.obesityGrade2
  //   getColorMessage('style', 'color: #d41024')
  //   return
  // }

  // if (obesityGrade3) {
  //   feedback.textContent = imcMessages.obesityGrade3
  //   getColorMessage('style', 'color: #6d040e')
  //   return
  // }
})

const clearInputsAndMessage = () => {
  feedback.textContent = ''
  feedback.setAttribute('style', '')
}

clearButton.addEventListener('click', clearInputsAndMessage)
