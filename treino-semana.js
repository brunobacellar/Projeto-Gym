function selectDay(numSemana) {
  const dia = document.querySelector(`.dia${numSemana}`).textContent
  localStorage.setItem('day', `${dia}`)
  alert(localStorage.getItem('day'))
}