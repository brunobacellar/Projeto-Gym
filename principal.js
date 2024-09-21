const inputName = document.querySelector('.name');
const checked = document.querySelector('.checked');
const btnConfirmar = document.querySelector('.btn-confirmar');

const alternandoButton = () => {
  isInputName = inputName.value.trim() !== '';
  isChecked = checked.checked;
  if (isInputName && isChecked) {
    btnConfirmar.classList.remove('btn-confirmar-disabled')
  } else {
    btnConfirmar.classList.add('btn-confirmar-disabled')
  }
}
inputName.addEventListener('input', alternandoButton);
checked.addEventListener('click', alternandoButton);

const clicandoBtnConfirmar = () => {
  const divBlur = document.querySelector('.div-blur');
  const containerLogin = document.querySelector('.container-login');
  containerLogin.style.display = 'none'
  divBlur.style.filter = 'none'
}

const getCard = localStorage.getItem('card1')
const parseCard = JSON.parse(getCard)
const containerEx = document.querySelector('.containerCard')
containerEx.textContent = parseCard