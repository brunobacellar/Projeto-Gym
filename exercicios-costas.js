const btnConfirm = document.querySelector('#btn');
const imgInfo = document.querySelector('.img-info');
const divInfo = document.querySelector('.div-info');
let totalSelectCards = 0;
function verificandoBtnConfirm() {
  if (totalSelectCards > 2 && totalSelectCards < 8) {
    btnConfirm.classList.remove('disabled');
  } else if (totalSelectCards > 7){
    btnConfirm.classList.add('disabled')
  } else if (totalSelectCards < 3) {
    btnConfirm.classList.add('disabled')
  }
}
function clickInfo() {
  if (divInfo.style.display == 'block') {
    divInfo.style.display = 'none'
  } else {
    divInfo.style.display = 'block'
  }
}
function saveCard(ref, n) {
  const cardString = JSON.stringify(ref)
  localStorage.setItem(`card${n}`, cardString)
}

// CARD 1
const card1 = document.querySelector('.card1');
const inputS1 = document.querySelector('.inputS1');
const inputR1 = document.querySelector('.inputR1');
const dropDownS1 = document.querySelector('.dropDownS1');
const dropDownR1 = document.querySelector('.dropDownR1');
const btn1 = document.querySelector('.btn1')
const btnDesfazer1 = document.querySelector('.divDesfazer1');

// Selecionando card
function selectCard1() {
  if (card1.style.opacity == '0.8') {
    card1.style.opacity = '1'
  } else {
    card1.style.opacity = '0.8'
  }
  if (inputS1.style.display == 'inline') {
    inputS1.style.display = 'none'
    inputS1.value = ''
  } else {
    inputS1.style.display = 'inline'
  }
  if (inputR1.style.display == 'inline') {
    inputR1.style.display = 'none'
    inputR1.value = ''
  } else {
    inputR1.style.display = 'inline'
  }
  if (dropDownS1.style.display == 'block') {
    dropDownS1.style.display = 'none'
  }
  if (dropDownR1.style.display == 'block') {
    dropDownR1.style.display = 'none'
  }
  if (btn1.style.display == 'inline') {
    btn1.style.display = 'none'
  } else {
    btn1.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS1() {
  if (dropDownR1.style.display == 'block') {
    dropDownR1.style.display = 'none'
  }
  if (dropDownS1.style.display == 'block') {
    dropDownS1.style.display = 'none'
  } else {
    dropDownS1.style.position = 'absolute'
    dropDownS1.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR1() {
  if (dropDownS1.style.display == 'block') {
    dropDownS1.style.display = 'none'
  }
  if (dropDownR1.style.display == 'block') {
    dropDownR1.style.display = 'none'
  } else {
    dropDownR1.style.position = 'absolute'
    dropDownR1.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS1(c) {
  const itemS = document.querySelector('#itemS1-' + c).innerHTML;
  inputS1.value = itemS;
  dropDownS1.style.display = 'none';
  dropDownS1.style.position = 'static'
  verificandoBtn1()
}

// Selecionando opção de Repetições
function choiceR1(c) {
  const itemR = document.querySelector('#itemR1-' + c).innerHTML;
  inputR1.value = itemR;
  dropDownR1.style.display = 'none';
  dropDownR1.style.position = 'static'
  verificandoBtn1()
}

// Ativando Botão
function verificandoBtn1 () {
  if (inputS1.value !== "" && inputR1.value !== "") {
    btn1.removeAttribute('disabled');
    btn1.classList.remove('btnDesabilitado')
    btn1.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn1() {
  card1.classList.add('cardComCheck', '::before')
  card1.removeAttribute('onclick')
  card1.classList.remove('efeitoCard')
  inputS1.style.display = 'none'
  inputR1.style.display = 'none'
  btn1.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer1.style.display = 'flex'
  imgCardC1 = document.querySelector('.imgCardC1')
  capCardC1 = document.querySelector('.cap1')
  const cardSave1 = [imgCardC1.src, capCardC1.textContent, inputS1.value, inputR1.value]
  saveCard(cardSave1, 1)
  
}

function clickBtnDesfazer1() {
  inputS1.value = ''
  inputR1.value = ''
  btnDesfazer1.style.display = 'none'
  card1.style.opacity = '1'
  card1.classList.remove('cardComCheck', '::before')
  card1.setAttribute('onclick', 'selectCard1()')
  card1.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas1')
}


// CARD 2
const card2 = document.querySelector('.card2');
const inputS2 = document.querySelector('.inputS2');
const inputR2 = document.querySelector('.inputR2');
const dropDownS2 = document.querySelector('.dropDownS2');
const dropDownR2 = document.querySelector('.dropDownR2');
const btn2 = document.querySelector('.btn2')
const btnDesfazer2 = document.querySelector('.divDesfazer2');

// Selecionando card
function selectCard2() {
  if (card2.style.opacity == '0.8') {
    card2.style.opacity = '1'
  } else {
    card2.style.opacity = '0.8'
  }
  if (inputS2.style.display == 'inline') {
    inputS2.style.display = 'none'
    inputS2.value = ''
  } else {
    inputS2.style.display = 'inline'
  }
  if (inputR2.style.display == 'inline') {
    inputR2.style.display = 'none'
    inputR2.value = ''
  } else {
    inputR2.style.display = 'inline'
  }
  if (dropDownS2.style.display == 'block') {
    dropDownS2.style.display = 'none'
  }
  if (dropDownR2.style.display == 'block') {
    dropDownR2.style.display = 'none'
  }
  if (btn2.style.display == 'inline') {
    btn2.style.display = 'none'
  } else {
    btn2.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS2() {
  if (dropDownR2.style.display == 'block') {
    dropDownR2.style.display = 'none'
  }
  if (dropDownS2.style.display == 'block') {
    dropDownS2.style.display = 'none'
  } else {
    dropDownS2.style.position = 'absolute'
    dropDownS2.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR2() {
  if (dropDownS2.style.display == 'block') {
    dropDownS2.style.display = 'none'
  }
  if (dropDownR2.style.display == 'block') {
    dropDownR2.style.display = 'none'
  } else {
    dropDownR2.style.position = 'absolute'
    dropDownR2.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS2(c) {
  const itemS = document.querySelector('#itemS2-' + c).innerHTML;
  inputS2.value = itemS;
  dropDownS2.style.display = 'none';
  dropDownS2.style.position = 'static'
  verificandoBtn2()
}

// Selecionando opção de Repetições
function choiceR2(c) {
  const itemR = document.querySelector('#itemR2-' + c).innerHTML;
  inputR2.value = itemR;
  dropDownR2.style.display = 'none';
  dropDownR2.style.position = 'static'
  verificandoBtn2()
}

// Ativando Botão
function verificandoBtn2 () {
  if (inputS2.value !== "" && inputR2.value !== "") {
    btn2.removeAttribute('disabled');
    btn2.classList.remove('btnDesabilitado')
    btn2.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn2() {
  card2.classList.add('cardComCheck', '::before')
  card2.removeAttribute('onclick')
  card2.classList.remove('efeitoCard')
  inputS2.style.display = 'none'
  inputR2.style.display = 'none'
  btn2.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer2.style.display = 'flex'
  imgCardC2 = document.querySelector('.imgCardC2')
  capCardC2 = document.querySelector('.cap2')
  const cardSave2 = [imgCardC2.src, capCardC2.textContent, inputS2.value, inputR2.value]
  saveCard(cardSave2, 2)
}

function clickBtnDesfazer2() {
  inputS2.value = ''
  inputR2.value = ''
  btnDesfazer2.style.display = 'none'
  card2.style.opacity = '1'
  card2.classList.remove('cardComCheck', '::before')
  card2.setAttribute('onclick', 'selectCard2()')
  card2.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas2')
}


// CARD 3
const card3 = document.querySelector('.card3');
const inputS3 = document.querySelector('.inputS3');
const inputR3 = document.querySelector('.inputR3');
const dropDownS3 = document.querySelector('.dropDownS3');
const dropDownR3 = document.querySelector('.dropDownR3');
const btn3 = document.querySelector('.btn3')
const btnDesfazer3 = document.querySelector('.divDesfazer3');

// Selecionando card
function selectCard3() {
  if (card3.style.opacity == '0.8') {
    card3.style.opacity = '1'
  } else {
    card3.style.opacity = '0.8'
  }
  if (inputS3.style.display == 'inline') {
    inputS3.style.display = 'none'
    inputS3.value = ''
  } else {
    inputS3.style.display = 'inline'
  }
  if (inputR3.style.display == 'inline') {
    inputR3.style.display = 'none'
    inputR3.value = ''
  } else {
    inputR3.style.display = 'inline'
  }
  if (dropDownS3.style.display == 'block') {
    dropDownS3.style.display = 'none'
  }
  if (dropDownR3.style.display == 'block') {
    dropDownR3.style.display = 'none'
  }
  if (btn3.style.display == 'inline') {
    btn3.style.display = 'none'
  } else {
    btn3.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS3() {
  if (dropDownR3.style.display == 'block') {
    dropDownR3.style.display = 'none'
  }
  if (dropDownS3.style.display == 'block') {
    dropDownS3.style.display = 'none'
  } else {
    dropDownS3.style.position = 'absolute'
    dropDownS3.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR3() {
  if (dropDownS3.style.display == 'block') {
    dropDownS3.style.display = 'none'
  }
  if (dropDownR3.style.display == 'block') {
    dropDownR3.style.display = 'none'
  } else {
    dropDownR3.style.position = 'absolute'
    dropDownR3.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS3(c) {
  const itemS = document.querySelector('#itemS3-' + c).innerHTML;
  inputS3.value = itemS;
  dropDownS3.style.display = 'none';
  dropDownS3.style.position = 'static'
  verificandoBtn3()
}

// Selecionando opção de Repetições
function choiceR3(c) {
  const itemR = document.querySelector('#itemR3-' + c).innerHTML;
  inputR3.value = itemR;
  dropDownR3.style.display = 'none';
  dropDownR3.style.position = 'static'
  verificandoBtn3()
}

// Ativando Botão
function verificandoBtn3 () {
  if (inputS3.value !== "" && inputR3.value !== "") {
    btn3.removeAttribute('disabled');
    btn3.classList.remove('btnDesabilitado')
    btn3.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn3() {
  card3.classList.add('cardComCheck', '::before')
  card3.removeAttribute('onclick')
  card3.classList.remove('efeitoCard')
  inputS3.style.display = 'none'
  inputR3.style.display = 'none'
  btn3.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer3.style.display = 'flex'
  imgCardC3 = document.querySelector('.imgCardC3')
  capCardC3 = document.querySelector('.cap3')
  const cardSave3 = [imgCardC3.src, capCardC3.textContent, inputS3.value, inputR3.value]
  saveCard(cardSave3, 3)
}

function clickBtnDesfazer3() {
  inputS3.value = ''
  inputR3.value = ''
  btnDesfazer3.style.display = 'none'
  card3.style.opacity = '1'
  card3.classList.remove('cardComCheck', '::before')
  card3.setAttribute('onclick', 'selectCard3()')
  card3.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas3')
}


// CARD 4
const card4 = document.querySelector('.card4');
const inputS4 = document.querySelector('.inputS4');
const inputR4 = document.querySelector('.inputR4');
const dropDownS4 = document.querySelector('.dropDownS4');
const dropDownR4 = document.querySelector('.dropDownR4');
const btn4 = document.querySelector('.btn4')
const btnDesfazer4 = document.querySelector('.divDesfazer4');

// Selecionando card
function selectCard4() {
  if (card4.style.opacity == '0.8') {
    card4.style.opacity = '1'
  } else {
    card4.style.opacity = '0.8'
  }
  if (inputS4.style.display == 'inline') {
    inputS4.style.display = 'none'
    inputS4.value = ''
  } else {
    inputS4.style.display = 'inline'
  }
  if (inputR4.style.display == 'inline') {
    inputR4.style.display = 'none'
    inputR4.value = ''
  } else {
    inputR4.style.display = 'inline'
  }
  if (dropDownS4.style.display == 'block') {
    dropDownS4.style.display = 'none'
  }
  if (dropDownR4.style.display == 'block') {
    dropDownR4.style.display = 'none'
  }
  if (btn4.style.display == 'inline') {
    btn4.style.display = 'none'
  } else {
    btn4.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS4() {
  if (dropDownR4.style.display == 'block') {
    dropDownR4.style.display = 'none'
  }
  if (dropDownS4.style.display == 'block') {
    dropDownS4.style.display = 'none'
  } else {
    dropDownS4.style.position = 'absolute'
    dropDownS4.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR4() {
  if (dropDownS4.style.display == 'block') {
    dropDownS4.style.display = 'none'
  }
  if (dropDownR4.style.display == 'block') {
    dropDownR4.style.display = 'none'
  } else {
    dropDownR4.style.position = 'absolute'
    dropDownR4.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS4(c) {
  const itemS = document.querySelector('#itemS4-' + c).innerHTML;
  inputS4.value = itemS;
  dropDownS4.style.display = 'none';
  dropDownS4.style.position = 'static'
  verificandoBtn4()
}

// Selecionando opção de Repetições
function choiceR4(c) {
  const itemR = document.querySelector('#itemR4-' + c).innerHTML;
  inputR4.value = itemR;
  dropDownR4.style.display = 'none';
  dropDownR4.style.position = 'static'
  verificandoBtn4()
}

// Ativando Botão
function verificandoBtn4 () {
  if (inputS4.value !== "" && inputR4.value !== "") {
    btn4.removeAttribute('disabled');
    btn4.classList.remove('btnDesabilitado')
    btn4.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn4() {
  card4.classList.add('cardComCheck', '::before')
  card4.removeAttribute('onclick')
  card4.classList.remove('efeitoCard')
  inputS4.style.display = 'none'
  inputR4.style.display = 'none'
  btn4.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer4.style.display = 'flex'
  imgCardC4 = document.querySelector('.imgCardC4')
  capCardC4 = document.querySelector('.cap4')
  const cardSave4 = [imgCardC4.src, capCardC4.textContent, inputS4.value, inputR4.value]
  saveCard(cardSave4, 4)
}

function clickBtnDesfazer4() {
  inputS4.value = ''
  inputR4.value = ''
  btnDesfazer4.style.display = 'none'
  card4.style.opacity = '1'
  card4.classList.remove('cardComCheck', '::before')
  card4.setAttribute('onclick', 'selectCard4()')
  card4.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas4')
}


// CARD 5
const card5 = document.querySelector('.card5');
const inputS5 = document.querySelector('.inputS5');
const inputR5 = document.querySelector('.inputR5');
const dropDownS5 = document.querySelector('.dropDownS5');
const dropDownR5 = document.querySelector('.dropDownR5');
const btn5 = document.querySelector('.btn5')
const btnDesfazer5 = document.querySelector('.divDesfazer5');

// Selecionando card
function selectCard5() {
  if (card5.style.opacity == '0.8') {
    card5.style.opacity = '1'
  } else {
    card5.style.opacity = '0.8'
  }
  if (inputS5.style.display == 'inline') {
    inputS5.style.display = 'none'
    inputS5.value = ''
  } else {
    inputS5.style.display = 'inline'
  }
  if (inputR5.style.display == 'inline') {
    inputR5.style.display = 'none'
    inputR5.value = ''
  } else {
    inputR5.style.display = 'inline'
  }
  if (dropDownS5.style.display == 'block') {
    dropDownS5.style.display = 'none'
  }
  if (dropDownR5.style.display == 'block') {
    dropDownR5.style.display = 'none'
  }
  if (btn5.style.display == 'inline') {
    btn5.style.display = 'none'
  } else {
    btn5.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS5() {
  if (dropDownR5.style.display == 'block') {
    dropDownR5.style.display = 'none'
  }
  if (dropDownS5.style.display == 'block') {
    dropDownS5.style.display = 'none'
  } else {
    dropDownS5.style.position = 'absolute'
    dropDownS5.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR5() {
  if (dropDownS5.style.display == 'block') {
    dropDownS5.style.display = 'none'
  }
  if (dropDownR5.style.display == 'block') {
    dropDownR5.style.display = 'none'
  } else {
    dropDownR5.style.position = 'absolute'
    dropDownR5.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS5(c) {
  const itemS = document.querySelector('#itemS5-' + c).innerHTML;
  inputS5.value = itemS;
  dropDownS5.style.display = 'none';
  dropDownS5.style.position = 'static'
  verificandoBtn5()
}

// Selecionando opção de Repetições
function choiceR5(c) {
  const itemR = document.querySelector('#itemR5-' + c).innerHTML;
  inputR5.value = itemR;
  dropDownR5.style.display = 'none';
  dropDownR5.style.position = 'static'
  verificandoBtn5()
}

// Ativando Botão
function verificandoBtn5 () {
  if (inputS5.value !== "" && inputR5.value !== "") {
    btn5.removeAttribute('disabled');
    btn5.classList.remove('btnDesabilitado')
    btn5.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn5() {
  card5.classList.add('cardComCheck', '::before')
  card5.removeAttribute('onclick')
  card5.classList.remove('efeitoCard')
  inputS5.style.display = 'none'
  inputR5.style.display = 'none'
  btn5.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer5.style.display = 'flex'
  imgCardC5 = document.querySelector('.imgCardC5')
  capCardC5 = document.querySelector('.cap5')
  const cardSave5 = [imgCardC5.src, capCardC5.textContent, inputS5.value, inputR5.value]
  saveCard(cardSave5, 5)
}

function clickBtnDesfazer5() {
  inputS5.value = ''
  inputR5.value = ''
  btnDesfazer5.style.display = 'none'
  card5.style.opacity = '1'
  card5.classList.remove('cardComCheck', '::before')
  card5.setAttribute('onclick', 'selectCard5()')
  card5.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas5')
}


// CARD 6
const card6 = document.querySelector('.card6');
const inputS6 = document.querySelector('.inputS6');
const inputR6 = document.querySelector('.inputR6');
const dropDownS6 = document.querySelector('.dropDownS6');
const dropDownR6 = document.querySelector('.dropDownR6');
const btn6 = document.querySelector('.btn6')
const btnDesfazer6 = document.querySelector('.divDesfazer6');

// Selecionando card
function selectCard6() {
  if (card6.style.opacity == '0.8') {
    card6.style.opacity = '1'
  } else {
    card6.style.opacity = '0.8'
  }
  if (inputS6.style.display == 'inline') {
    inputS6.style.display = 'none'
    inputS6.value = ''
  } else {
    inputS6.style.display = 'inline'
  }
  if (inputR6.style.display == 'inline') {
    inputR6.style.display = 'none'
    inputR6.value = ''
  } else {
    inputR6.style.display = 'inline'
  }
  if (dropDownS6.style.display == 'block') {
    dropDownS6.style.display = 'none'
  }
  if (dropDownR6.style.display == 'block') {
    dropDownR6.style.display = 'none'
  }
  if (btn6.style.display == 'inline') {
    btn6.style.display = 'none'
  } else {
    btn6.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS6() {
  if (dropDownR6.style.display == 'block') {
    dropDownR6.style.display = 'none'
  }
  if (dropDownS6.style.display == 'block') {
    dropDownS6.style.display = 'none'
  } else {
    dropDownS6.style.position = 'absolute'
    dropDownS6.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR6() {
  if (dropDownS6.style.display == 'block') {
    dropDownS6.style.display = 'none'
  }
  if (dropDownR6.style.display == 'block') {
    dropDownR6.style.display = 'none'
  } else {
    dropDownR6.style.position = 'absolute'
    dropDownR6.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS6(c) {
  const itemS = document.querySelector('#itemS6-' + c).innerHTML;
  inputS6.value = itemS;
  dropDownS6.style.display = 'none';
  dropDownS6.style.position = 'static'
  verificandoBtn6()
}

// Selecionando opção de Repetições
function choiceR6(c) {
  const itemR = document.querySelector('#itemR6-' + c).innerHTML;
  inputR6.value = itemR;
  dropDownR6.style.display = 'none';
  dropDownR6.style.position = 'static'
  verificandoBtn6()
}

// Ativando Botão
function verificandoBtn6 () {
  if (inputS6.value !== "" && inputR6.value !== "") {
    btn6.removeAttribute('disabled');
    btn6.classList.remove('btnDesabilitado')
    btn6.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn6() {
  card6.classList.add('cardComCheck', '::before')
  card6.removeAttribute('onclick')
  card6.classList.remove('efeitoCard')
  inputS6.style.display = 'none'
  inputR6.style.display = 'none'
  btn6.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer6.style.display = 'flex'
  imgCardC6 = document.querySelector('.imgCardC6')
  capCardC6 = document.querySelector('.cap6')
  const cardSave6 = [imgCardC6.src, capCardC6.textContent, inputS6.value, inputR6.value]
  saveCard(cardSave6, 6)
}

function clickBtnDesfazer6() {
  inputS6.value = ''
  inputR6.value = ''
  btnDesfazer6.style.display = 'none'
  card6.style.opacity = '1'
  card6.classList.remove('cardComCheck', '::before')
  card6.setAttribute('onclick', 'selectCard6()')
  card6.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas6')
}


// CARD 7
const card7 = document.querySelector('.card7');
const inputS7 = document.querySelector('.inputS7');
const inputR7 = document.querySelector('.inputR7');
const dropDownS7 = document.querySelector('.dropDownS7');
const dropDownR7 = document.querySelector('.dropDownR7');
const btn7 = document.querySelector('.btn7')
const btnDesfazer7 = document.querySelector('.divDesfazer7');

// Selecionando card
function selectCard7() {
  if (card7.style.opacity == '0.8') {
    card7.style.opacity = '1'
  } else {
    card7.style.opacity = '0.8'
  }
  if (inputS7.style.display == 'inline') {
    inputS7.style.display = 'none'
    inputS7.value = ''
  } else {
    inputS7.style.display = 'inline'
  }
  if (inputR7.style.display == 'inline') {
    inputR7.style.display = 'none'
    inputR7.value = ''
  } else {
    inputR7.style.display = 'inline'
  }
  if (dropDownS7.style.display == 'block') {
    dropDownS7.style.display = 'none'
  }
  if (dropDownR7.style.display == 'block') {
    dropDownR7.style.display = 'none'
  }
  if (btn7.style.display == 'inline') {
    btn7.style.display = 'none'
  } else {
    btn7.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS7() {
  if (dropDownR7.style.display == 'block') {
    dropDownR7.style.display = 'none'
  }
  if (dropDownS7.style.display == 'block') {
    dropDownS7.style.display = 'none'
  } else {
    dropDownS7.style.position = 'absolute'
    dropDownS7.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR7() {
  if (dropDownS7.style.display == 'block') {
    dropDownS7.style.display = 'none'
  }
  if (dropDownR7.style.display == 'block') {
    dropDownR7.style.display = 'none'
  } else {
    dropDownR7.style.position = 'absolute'
    dropDownR7.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS7(c) {
  const itemS = document.querySelector('#itemS7-' + c).innerHTML;
  inputS7.value = itemS;
  dropDownS7.style.display = 'none';
  dropDownS7.style.position = 'static'
  verificandoBtn7()
}

// Selecionando opção de Repetições
function choiceR7(c) {
  const itemR = document.querySelector('#itemR7-' + c).innerHTML;
  inputR7.value = itemR;
  dropDownR7.style.display = 'none';
  dropDownR7.style.position = 'static'
  verificandoBtn7()
}

// Ativando Botão
function verificandoBtn7 () {
  if (inputS7.value !== "" && inputR7.value !== "") {
    btn7.removeAttribute('disabled');
    btn7.classList.remove('btnDesabilitado')
    btn7.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn7() {
  card7.classList.add('cardComCheck', '::before')
  card7.removeAttribute('onclick')
  card7.classList.remove('efeitoCard')
  inputS7.style.display = 'none'
  inputR7.style.display = 'none'
  btn7.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer7.style.display = 'flex'
  imgCardC7 = document.querySelector('.imgCardC7')
  capCardC7 = document.querySelector('.cap7')
  const cardSave7 = [imgCardC7.src, capCardC7.textContent, inputS7.value, inputR7.value]
  saveCard(cardSave7, 7)
}

function clickBtnDesfazer7() {
  inputS7.value = ''
  inputR7.value = ''
  btnDesfazer7.style.display = 'none'
  card7.style.opacity = '1'
  card7.classList.remove('cardComCheck', '::before')
  card7.setAttribute('onclick', 'selectCard7()')
  card7.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas7')
}


// CARD 8
const card8 = document.querySelector('.card8');
const inputS8 = document.querySelector('.inputS8');
const inputR8 = document.querySelector('.inputR8');
const dropDownS8 = document.querySelector('.dropDownS8');
const dropDownR8 = document.querySelector('.dropDownR8');
const btn8 = document.querySelector('.btn8')
const btnDesfazer8 = document.querySelector('.divDesfazer8');

// Selecionando card
function selectCard8() {
  if (card8.style.opacity == '0.8') {
    card8.style.opacity = '1'
  } else {
    card8.style.opacity = '0.8'
  }
  if (inputS8.style.display == 'inline') {
    inputS8.style.display = 'none'
    inputS8.value = ''
  } else {
    inputS8.style.display = 'inline'
  }
  if (inputR8.style.display == 'inline') {
    inputR8.style.display = 'none'
    inputR8.value = ''
  } else {
    inputR8.style.display = 'inline'
  }
  if (dropDownS8.style.display == 'block') {
    dropDownS8.style.display = 'none'
  }
  if (dropDownR8.style.display == 'block') {
    dropDownR8.style.display = 'none'
  }
  if (btn8.style.display == 'inline') {
    btn8.style.display = 'none'
  } else {
    btn8.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS8() {
  if (dropDownR8.style.display == 'block') {
    dropDownR8.style.display = 'none'
  }
  if (dropDownS8.style.display == 'block') {
    dropDownS8.style.display = 'none'
  } else {
    dropDownS8.style.position = 'absolute'
    dropDownS8.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR8() {
  if (dropDownS8.style.display == 'block') {
    dropDownS8.style.display = 'none'
  }
  if (dropDownR8.style.display == 'block') {
    dropDownR8.style.display = 'none'
  } else {
    dropDownR8.style.position = 'absolute'
    dropDownR8.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS8(c) {
  const itemS = document.querySelector('#itemS8-' + c).innerHTML;
  inputS8.value = itemS;
  dropDownS8.style.display = 'none';
  dropDownS8.style.position = 'static'
  verificandoBtn8()
}

// Selecionando opção de Repetições
function choiceR8(c) {
  const itemR = document.querySelector('#itemR8-' + c).innerHTML;
  inputR8.value = itemR;
  dropDownR8.style.display = 'none';
  dropDownR8.style.position = 'static'
  verificandoBtn8()
}

// Ativando Botão
function verificandoBtn8 () {
  if (inputS8.value !== "" && inputR8.value !== "") {
    btn8.removeAttribute('disabled');
    btn8.classList.remove('btnDesabilitado')
    btn8.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn8() {
  card8.classList.add('cardComCheck', '::before')
  card8.removeAttribute('onclick')
  card8.classList.remove('efeitoCard')
  inputS8.style.display = 'none'
  inputR8.style.display = 'none'
  btn8.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer8.style.display = 'flex'
  imgCardC8 = document.querySelector('.imgCardC8')
  capCardC8 = document.querySelector('.cap8')
  const cardSave8 = [imgCardC8.src, capCardC8.textContent, inputS8.value, inputR8.value]
  saveCard(cardSave8, 8)
}

function clickBtnDesfazer8() {
  inputS8.value = ''
  inputR8.value = ''
  btnDesfazer8.style.display = 'none'
  card8.style.opacity = '1'
  card8.classList.remove('cardComCheck', '::before')
  card8.setAttribute('onclick', 'selectCard8()')
  card8.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas8')
}


// CARD 9
const card9 = document.querySelector('.card9');
const inputS9 = document.querySelector('.inputS9');
const inputR9 = document.querySelector('.inputR9');
const dropDownS9 = document.querySelector('.dropDownS9');
const dropDownR9 = document.querySelector('.dropDownR9');
const btn9 = document.querySelector('.btn9')
const btnDesfazer9 = document.querySelector('.divDesfazer9');

// Selecionando card
function selectCard9() {
  if (card9.style.opacity == '0.8') {
    card9.style.opacity = '1'
  } else {
    card9.style.opacity = '0.8'
  }
  if (inputS9.style.display == 'inline') {
    inputS9.style.display = 'none'
    inputS9.value = ''
  } else {
    inputS9.style.display = 'inline'
  }
  if (inputR9.style.display == 'inline') {
    inputR9.style.display = 'none'
    inputR9.value = ''
  } else {
    inputR9.style.display = 'inline'
  }
  if (dropDownS9.style.display == 'block') {
    dropDownS9.style.display = 'none'
  }
  if (dropDownR9.style.display == 'block') {
    dropDownR9.style.display = 'none'
  }
  if (btn9.style.display == 'inline') {
    btn9.style.display = 'none'
  } else {
    btn9.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS9() {
  if (dropDownR9.style.display == 'block') {
    dropDownR9.style.display = 'none'
  }
  if (dropDownS9.style.display == 'block') {
    dropDownS9.style.display = 'none'
  } else {
    dropDownS9.style.position = 'absolute'
    dropDownS9.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR9() {
  if (dropDownS9.style.display == 'block') {
    dropDownS9.style.display = 'none'
  }
  if (dropDownR9.style.display == 'block') {
    dropDownR9.style.display = 'none'
  } else {
    dropDownR9.style.position = 'absolute'
    dropDownR9.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS9(c) {
  const itemS = document.querySelector('#itemS9-' + c).innerHTML;
  inputS9.value = itemS;
  dropDownS9.style.display = 'none';
  dropDownS9.style.position = 'static'
  verificandoBtn9()
}

// Selecionando opção de Repetições
function choiceR9(c) {
  const itemR = document.querySelector('#itemR9-' + c).innerHTML;
  inputR9.value = itemR;
  dropDownR9.style.display = 'none';
  dropDownR9.style.position = 'static'
  verificandoBtn9()
}

// Ativando Botão
function verificandoBtn9() {
  if (inputS9.value !== "" && inputR9.value !== "") {
    btn9.removeAttribute('disabled');
    btn9.classList.remove('btnDesabilitado')
    btn9.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn9() {
  card9.classList.add('cardComCheck', '::before')
  card9.removeAttribute('onclick')
  card9.classList.remove('efeitoCard')
  inputS9.style.display = 'none'
  inputR9.style.display = 'none'
  btn9.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer9.style.display = 'flex'
  imgCardC9 = document.querySelector('.imgCardC9')
  capCardC9 = document.querySelector('.cap9')
  const cardSave9 = [imgCardC9.src, capCardC9.textContent, inputS9.value, inputR9.value]
  saveCard(cardSave9, 9)
}

function clickBtnDesfazer9() {
  inputS9.value = ''
  inputR9.value = ''
  btnDesfazer9.style.display = 'none'
  card9.style.opacity = '1'
  card9.classList.remove('cardComCheck', '::before')
  card9.setAttribute('onclick', 'selectCard9()')
  card9.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas9')
}


// CARD 10
const card10 = document.querySelector('.card10');
const inputS10 = document.querySelector('.inputS10');
const inputR10 = document.querySelector('.inputR10');
const dropDownS10 = document.querySelector('.dropDownS10');
const dropDownR10 = document.querySelector('.dropDownR10');
const btn10 = document.querySelector('.btn10')
const btnDesfazer10 = document.querySelector('.divDesfazer10');

// Selecionando card
function selectCard10() {
  if (card10.style.opacity == '0.8') {
    card10.style.opacity = '1'
  } else {
    card10.style.opacity = '0.8'
  }
  if (inputS10.style.display == 'inline') {
    inputS10.style.display = 'none'
    inputS10.value = ''
  } else {
    inputS10.style.display = 'inline'
  }
  if (inputR10.style.display == 'inline') {
    inputR10.style.display = 'none'
    inputR10.value = ''
  } else {
    inputR10.style.display = 'inline'
  }
  if (dropDownS10.style.display == 'block') {
    dropDownS10.style.display = 'none'
  }
  if (dropDownR10.style.display == 'block') {
    dropDownR10.style.display = 'none'
  }
  if (btn10.style.display == 'inline') {
    btn10.style.display = 'none'
  } else {
    btn10.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS10() {
  if (dropDownR10.style.display == 'block') {
    dropDownR10.style.display = 'none'
  }
  if (dropDownS10.style.display == 'block') {
    dropDownS10.style.display = 'none'
  } else {
    dropDownS10.style.position = 'absolute'
    dropDownS10.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR10() {
  if (dropDownS10.style.display == 'block') {
    dropDownS10.style.display = 'none'
  }
  if (dropDownR10.style.display == 'block') {
    dropDownR10.style.display = 'none'
  } else {
    dropDownR10.style.position = 'absolute'
    dropDownR10.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS10(c) {
  const itemS = document.querySelector('#itemS10-' + c).innerHTML;
  inputS10.value = itemS;
  dropDownS10.style.display = 'none';
  dropDownS10.style.position = 'static'
  verificandoBtn10()
}

// Selecionando opção de Repetições
function choiceR10(c) {
  const itemR = document.querySelector('#itemR10-' + c).innerHTML;
  inputR10.value = itemR;
  dropDownR10.style.display = 'none';
  dropDownR10.style.position = 'static'
  verificandoBtn10()
}

// Ativando Botão
function verificandoBtn10() {
  if (inputS10.value !== "" && inputR10.value !== "") {
    btn10.removeAttribute('disabled');
    btn10.classList.remove('btnDesabilitado')
    btn10.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn10() {
  card10.classList.add('cardComCheck', '::before')
  card10.removeAttribute('onclick')
  card10.classList.remove('efeitoCard')
  inputS10.style.display = 'none'
  inputR10.style.display = 'none'
  btn10.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer10.style.display = 'flex'
  imgCardC10 = document.querySelector('.imgCardC10')
  capCardC10 = document.querySelector('.cap10')
  const cardSave10 = [imgCardC10.src, capCardC10.textContent, inputS10.value, inputR10.value]
  saveCard(cardSave10, 10)
}

function clickBtnDesfazer10() {
  inputS10.value = ''
  inputR10.value = ''
  btnDesfazer10.style.display = 'none'
  card10.style.opacity = '1'
  card10.classList.remove('cardComCheck', '::before')
  card10.setAttribute('onclick', 'selectCard10()')
  card10.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas10')
}


// CARD 11
const card11 = document.querySelector('.card11');
const inputS11 = document.querySelector('.inputS11');
const inputR11 = document.querySelector('.inputR11');
const dropDownS11 = document.querySelector('.dropDownS11');
const dropDownR11 = document.querySelector('.dropDownR11');
const btn11 = document.querySelector('.btn11')
const btnDesfazer11 = document.querySelector('.divDesfazer11');

// Selecionando card
function selectCard11() {
  if (card11.style.opacity == '0.8') {
    card11.style.opacity = '1'
  } else {
    card11.style.opacity = '0.8'
  }
  if (inputS11.style.display == 'inline') {
    inputS11.style.display = 'none'
    inputS11.value = ''
  } else {
    inputS11.style.display = 'inline'
  }
  if (inputR11.style.display == 'inline') {
    inputR11.style.display = 'none'
    inputR11.value = ''
  } else {
    inputR11.style.display = 'inline'
  }
  if (dropDownS11.style.display == 'block') {
    dropDownS11.style.display = 'none'
  }
  if (dropDownR11.style.display == 'block') {
    dropDownR11.style.display = 'none'
  }
  if (btn11.style.display == 'inline') {
    btn11.style.display = 'none'
  } else {
    btn11.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS11() {
  if (dropDownR11.style.display == 'block') {
    dropDownR11.style.display = 'none'
  }
  if (dropDownS11.style.display == 'block') {
    dropDownS11.style.display = 'none'
  } else {
    dropDownS11.style.position = 'absolute'
    dropDownS11.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR11() {
  if (dropDownS11.style.display == 'block') {
    dropDownS11.style.display = 'none'
  }
  if (dropDownR11.style.display == 'block') {
    dropDownR11.style.display = 'none'
  } else {
    dropDownR11.style.position = 'absolute'
    dropDownR11.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS11(c) {
  const itemS = document.querySelector('#itemS11-' + c).innerHTML;
  inputS11.value = itemS;
  dropDownS11.style.display = 'none';
  dropDownS11.style.position = 'static'
  verificandoBtn11()
}

// Selecionando opção de Repetições
function choiceR11(c) {
  const itemR = document.querySelector('#itemR11-' + c).innerHTML;
  inputR11.value = itemR;
  dropDownR11.style.display = 'none';
  dropDownR11.style.position = 'static'
  verificandoBtn11()
}

// Ativando Botão
function verificandoBtn11 () {
  if (inputS11.value !== "" && inputR11.value !== "") {
    btn11.removeAttribute('disabled');
    btn11.classList.remove('btnDesabilitado')
    btn11.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn11() {
  card11.classList.add('cardComCheck', '::before')
  card11.removeAttribute('onclick')
  card11.classList.remove('efeitoCard')
  inputS11.style.display = 'none'
  inputR11.style.display = 'none'
  btn11.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer11.style.display = 'flex'
  imgCardC11 = document.querySelector('.imgCardC11')
  capCardC11 = document.querySelector('.cap11')
  const cardSave11 = [imgCardC11.src, capCardC11.textContent, inputS11.value, inputR11.value]
  saveCard(cardSave11, 11)
}

function clickBtnDesfazer11() {
  inputS11.value = ''
  inputR11.value = ''
  btnDesfazer11.style.display = 'none'
  card11.style.opacity = '1'
  card11.classList.remove('cardComCheck', '::before')
  card11.setAttribute('onclick', 'selectCard11()')
  card11.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas11')
}


// CARD 12
const card12 = document.querySelector('.card12');
const inputS12 = document.querySelector('.inputS12');
const inputR12 = document.querySelector('.inputR12');
const dropDownS12 = document.querySelector('.dropDownS12');
const dropDownR12 = document.querySelector('.dropDownR12');
const btn12 = document.querySelector('.btn12')
const btnDesfazer12 = document.querySelector('.divDesfazer12');

// Selecionando card
function selectCard12() {
  if (card12.style.opacity == '0.8') {
    card12.style.opacity = '1'
  } else {
    card12.style.opacity = '0.8'
  }
  if (inputS12.style.display == 'inline') {
    inputS12.style.display = 'none'
    inputS12.value = ''
  } else {
    inputS12.style.display = 'inline'
  }
  if (inputR12.style.display == 'inline') {
    inputR12.style.display = 'none'
    inputR12.value = ''
  } else {
    inputR12.style.display = 'inline'
  }
  if (dropDownS12.style.display == 'block') {
    dropDownS12.style.display = 'none'
  }
  if (dropDownR12.style.display == 'block') {
    dropDownR12.style.display = 'none'
  }
  if (btn12.style.display == 'inline') {
    btn12.style.display = 'none'
  } else {
    btn12.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS12() {
  if (dropDownR12.style.display == 'block') {
    dropDownR12.style.display = 'none'
  }
  if (dropDownS12.style.display == 'block') {
    dropDownS12.style.display = 'none'
  } else {
    dropDownS12.style.position = 'absolute'
    dropDownS12.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR12() {
  if (dropDownS12.style.display == 'block') {
    dropDownS12.style.display = 'none'
  }
  if (dropDownR12.style.display == 'block') {
    dropDownR12.style.display = 'none'
  } else {
    dropDownR12.style.position = 'absolute'
    dropDownR12.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS12(c) {
  const itemS = document.querySelector('#itemS12-' + c).innerHTML;
  inputS12.value = itemS;
  dropDownS12.style.display = 'none';
  dropDownS12.style.position = 'static'
  verificandoBtn12()
}

// Selecionando opção de Repetições
function choiceR12(c) {
  const itemR = document.querySelector('#itemR12-' + c).innerHTML;
  inputR12.value = itemR;
  dropDownR12.style.display = 'none';
  dropDownR12.style.position = 'static'
  verificandoBtn12()
}

// Ativando Botão
function verificandoBtn12 () {
  if (inputS12.value !== "" && inputR12.value !== "") {
    btn12.removeAttribute('disabled');
    btn12.classList.remove('btnDesabilitado')
    btn12.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn12() {
  card12.classList.add('cardComCheck', '::before')
  card12.removeAttribute('onclick')
  card12.classList.remove('efeitoCard')
  inputS12.style.display = 'none'
  inputR12.style.display = 'none'
  btn12.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer12.style.display = 'flex'
  imgCardC12 = document.querySelector('.imgCardC12')
  capCardC12 = document.querySelector('.cap12')
  const cardSave12 = [imgCardC12.src, capCardC12.textContent, inputS12.value, inputR12.value]
  saveCard(cardSave12, 12)
}

function clickBtnDesfazer12() {
  inputS12.value = ''
  inputR12.value = ''
  btnDesfazer12.style.display = 'none'
  card12.style.opacity = '1'
  card12.classList.remove('cardComCheck', '::before')
  card12.setAttribute('onclick', 'selectCard12()')
  card12.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas12')
}


// CARD 13
const card13 = document.querySelector('.card13');
const inputS13 = document.querySelector('.inputS13');
const inputR13 = document.querySelector('.inputR13');
const dropDownS13 = document.querySelector('.dropDownS13');
const dropDownR13 = document.querySelector('.dropDownR13');
const btn13 = document.querySelector('.btn13')
const btnDesfazer13 = document.querySelector('.divDesfazer13');

// Selecionando card
function selectCard13() {
  if (card13.style.opacity == '0.8') {
    card13.style.opacity = '1'
  } else {
    card13.style.opacity = '0.8'
  }
  if (inputS13.style.display == 'inline') {
    inputS13.style.display = 'none'
    inputS13.value = ''
  } else {
    inputS13.style.display = 'inline'
  }
  if (inputR13.style.display == 'inline') {
    inputR13.style.display = 'none'
    inputR13.value = ''
  } else {
    inputR13.style.display = 'inline'
  }
  if (dropDownS13.style.display == 'block') {
    dropDownS13.style.display = 'none'
  }
  if (dropDownR13.style.display == 'block') {
    dropDownR13.style.display = 'none'
  }
  if (btn13.style.display == 'inline') {
    btn13.style.display = 'none'
  } else {
    btn13.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS13() {
  if (dropDownR13.style.display == 'block') {
    dropDownR13.style.display = 'none'
  }
  if (dropDownS13.style.display == 'block') {
    dropDownS13.style.display = 'none'
  } else {
    dropDownS13.style.position = 'absolute'
    dropDownS13.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR13() {
  if (dropDownS13.style.display == 'block') {
    dropDownS13.style.display = 'none'
  }
  if (dropDownR13.style.display == 'block') {
    dropDownR13.style.display = 'none'
  } else {
    dropDownR13.style.position = 'absolute'
    dropDownR13.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS13(c) {
  const itemS = document.querySelector('#itemS13-' + c).innerHTML;
  inputS13.value = itemS;
  dropDownS13.style.display = 'none';
  dropDownS13.style.position = 'static'
  verificandoBtn13()
}

// Selecionando opção de Repetições
function choiceR13(c) {
  const itemR = document.querySelector('#itemR13-' + c).innerHTML;
  inputR13.value = itemR;
  dropDownR13.style.display = 'none';
  dropDownR13.style.position = 'static'
  verificandoBtn13()
}

// Ativando Botão
function verificandoBtn13 () {
  if (inputS13.value !== "" && inputR13.value !== "") {
    btn13.removeAttribute('disabled');
    btn13.classList.remove('btnDesabilitado')
    btn13.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn13() {
  card13.classList.add('cardComCheck', '::before')
  card13.removeAttribute('onclick')
  card13.classList.remove('efeitoCard')
  inputS13.style.display = 'none'
  inputR13.style.display = 'none'
  btn13.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer13.style.display = 'flex'
  imgCardC13 = document.querySelector('.imgCardC13')
  capCardC13 = document.querySelector('.cap13')
  const cardSave13 = [imgCardC13.src, capCardC13.textContent, inputS13.value, inputR13.value]
  saveCard(cardSave13, 13)
}

function clickBtnDesfazer13() {
  inputS13.value = ''
  inputR13.value = ''
  btnDesfazer13.style.display = 'none'
  card13.style.opacity = '1'
  card13.classList.remove('cardComCheck', '::before')
  card13.setAttribute('onclick', 'selectCard13()')
  card13.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas13')
}


// CARD 14
const card14 = document.querySelector('.card14');
const inputS14 = document.querySelector('.inputS14');
const inputR14 = document.querySelector('.inputR14');
const dropDownS14 = document.querySelector('.dropDownS14');
const dropDownR14 = document.querySelector('.dropDownR14');
const btn14 = document.querySelector('.btn14')
const btnDesfazer14 = document.querySelector('.divDesfazer14');

// Selecionando card
function selectCard14() {
  if (card14.style.opacity == '0.8') {
    card14.style.opacity = '1'
  } else {
    card14.style.opacity = '0.8'
  }
  if (inputS14.style.display == 'inline') {
    inputS14.style.display = 'none'
    inputS14.value = ''
  } else {
    inputS14.style.display = 'inline'
  }
  if (inputR14.style.display == 'inline') {
    inputR14.style.display = 'none'
    inputR14.value = ''
  } else {
    inputR14.style.display = 'inline'
  }
  if (dropDownS14.style.display == 'block') {
    dropDownS14.style.display = 'none'
  }
  if (dropDownR14.style.display == 'block') {
    dropDownR14.style.display = 'none'
  }
  if (btn14.style.display == 'inline') {
    btn14.style.display = 'none'
  } else {
    btn14.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS14() {
  if (dropDownR14.style.display == 'block') {
    dropDownR14.style.display = 'none'
  }
  if (dropDownS14.style.display == 'block') {
    dropDownS14.style.display = 'none'
  } else {
    dropDownS14.style.position = 'absolute'
    dropDownS14.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR14() {
  if (dropDownS14.style.display == 'block') {
    dropDownS14.style.display = 'none'
  }
  if (dropDownR14.style.display == 'block') {
    dropDownR14.style.display = 'none'
  } else {
    dropDownR14.style.position = 'absolute'
    dropDownR14.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS14(c) {
  const itemS = document.querySelector('#itemS14-' + c).innerHTML;
  inputS14.value = itemS;
  dropDownS14.style.display = 'none';
  dropDownS14.style.position = 'static'
  verificandoBtn14()
}

// Selecionando opção de Repetições
function choiceR14(c) {
  const itemR = document.querySelector('#itemR14-' + c).innerHTML;
  inputR14.value = itemR;
  dropDownR14.style.display = 'none';
  dropDownR14.style.position = 'static'
  verificandoBtn14()
}

// Ativando Botão
function verificandoBtn14 () {
  if (inputS14.value !== "" && inputR14.value !== "") {
    btn14.removeAttribute('disabled');
    btn14.classList.remove('btnDesabilitado')
    btn14.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn14() {
  card14.classList.add('cardComCheck', '::before')
  card14.removeAttribute('onclick')
  card14.classList.remove('efeitoCard')
  inputS14.style.display = 'none'
  inputR14.style.display = 'none'
  btn14.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer14.style.display = 'flex'
  imgCardC14 = document.querySelector('.imgCardC14')
  capCardC14 = document.querySelector('.cap14')
  const cardSave14 = [imgCardC14.src, capCardC14.textContent, inputS14.value, inputR14.value]
  saveCard(cardSave14, 14)
}

function clickBtnDesfazer14() {
  inputS14.value = ''
  inputR14.value = ''
  btnDesfazer14.style.display = 'none'
  card14.style.opacity = '1'
  card14.classList.remove('cardComCheck', '::before')
  card14.setAttribute('onclick', 'selectCard14()')
  card14.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas14')
}

// CARD 15
const card15 = document.querySelector('.card15');
const inputS15 = document.querySelector('.inputS15');
const inputR15 = document.querySelector('.inputR15');
const dropDownS15 = document.querySelector('.dropDownS15');
const dropDownR15 = document.querySelector('.dropDownR15');
const btn15 = document.querySelector('.btn15')
const btnDesfazer15 = document.querySelector('.divDesfazer15');

// Selecionando card
function selectCard15() {
  if (card15.style.opacity == '0.8') {
    card15.style.opacity = '1'
  } else {
    card15.style.opacity = '0.8'
  }
  if (inputS15.style.display == 'inline') {
    inputS15.style.display = 'none'
    inputS15.value = ''
  } else {
    inputS15.style.display = 'inline'
  }
  if (inputR15.style.display == 'inline') {
    inputR15.style.display = 'none'
    inputR15.value = ''
  } else {
    inputR15.style.display = 'inline'
  }
  if (dropDownS15.style.display == 'block') {
    dropDownS15.style.display = 'none'
  }
  if (dropDownR15.style.display == 'block') {
    dropDownR15.style.display = 'none'
  }
  if (btn15.style.display == 'inline') {
    btn15.style.display = 'none'
  } else {
    btn15.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS15() {
  if (dropDownR15.style.display == 'block') {
    dropDownR15.style.display = 'none'
  }
  if (dropDownS15.style.display == 'block') {
    dropDownS15.style.display = 'none'
  } else {
    dropDownS15.style.position = 'absolute'
    dropDownS15.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR15() {
  if (dropDownS15.style.display == 'block') {
    dropDownS15.style.display = 'none'
  }
  if (dropDownR15.style.display == 'block') {
    dropDownR15.style.display = 'none'
  } else {
    dropDownR15.style.position = 'absolute'
    dropDownR15.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS15(c) {
  const itemS = document.querySelector('#itemS15-' + c).innerHTML;
  inputS15.value = itemS;
  dropDownS15.style.display = 'none';
  dropDownS15.style.position = 'static'
  verificandoBtn15()
}

// Selecionando opção de Repetições
function choiceR15(c) {
  const itemR = document.querySelector('#itemR15-' + c).innerHTML;
  inputR15.value = itemR;
  dropDownR15.style.display = 'none';
  dropDownR15.style.position = 'static'
  verificandoBtn15()
}

// Ativando Botão
function verificandoBtn15 () {
  if (inputS15.value !== "" && inputR15.value !== "") {
    btn15.removeAttribute('disabled');
    btn15.classList.remove('btnDesabilitado')
    btn15.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn15() {
  card15.classList.add('cardComCheck', '::before')
  card15.removeAttribute('onclick')
  card15.classList.remove('efeitoCard')
  inputS15.style.display = 'none'
  inputR15.style.display = 'none'
  btn15.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer15.style.display = 'flex'
  imgCardC15 = document.querySelector('.imgCardC15')
  capCardC15 = document.querySelector('.cap15')
  const cardSave15 = [imgCardC15.src, capCardC15.textContent, inputS15.value, inputR15.value]
  saveCard(cardSave15, 15)
}

function clickBtnDesfazer15() {
  inputS15.value = ''
  inputR15.value = ''
  btnDesfazer15.style.display = 'none'
  card15.style.opacity = '1'
  card15.classList.remove('cardComCheck', '::before')
  card15.setAttribute('onclick', 'selectCard15()')
  card15.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas15')
}


// CARD 16
const card16 = document.querySelector('.card16');
const inputS16 = document.querySelector('.inputS16');
const inputR16 = document.querySelector('.inputR16');
const dropDownS16 = document.querySelector('.dropDownS16');
const dropDownR16 = document.querySelector('.dropDownR16');
const btn16 = document.querySelector('.btn16')
const btnDesfazer16 = document.querySelector('.divDesfazer16');

// Selecionando card
function selectCard16() {
  if (card16.style.opacity == '0.8') {
    card16.style.opacity = '1'
  } else {
    card16.style.opacity = '0.8'
  }
  if (inputS16.style.display == 'inline') {
    inputS16.style.display = 'none'
    inputS16.value = ''
  } else {
    inputS16.style.display = 'inline'
  }
  if (inputR16.style.display == 'inline') {
    inputR16.style.display = 'none'
    inputR16.value = ''
  } else {
    inputR16.style.display = 'inline'
  }
  if (dropDownS16.style.display == 'block') {
    dropDownS16.style.display = 'none'
  }
  if (dropDownR16.style.display == 'block') {
    dropDownR16.style.display = 'none'
  }
  if (btn16.style.display == 'inline') {
    btn16.style.display = 'none'
  } else {
    btn16.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS16() {
  if (dropDownR16.style.display == 'block') {
    dropDownR16.style.display = 'none'
  }
  if (dropDownS16.style.display == 'block') {
    dropDownS16.style.display = 'none'
  } else {
    dropDownS16.style.position = 'absolute'
    dropDownS16.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR16() {
  if (dropDownS16.style.display == 'block') {
    dropDownS16.style.display = 'none'
  }
  if (dropDownR16.style.display == 'block') {
    dropDownR16.style.display = 'none'
  } else {
    dropDownR16.style.position = 'absolute'
    dropDownR16.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS16(c) {
  const itemS = document.querySelector('#itemS16-' + c).innerHTML;
  inputS16.value = itemS;
  dropDownS16.style.display = 'none';
  dropDownS16.style.position = 'static'
  verificandoBtn16()
}

// Selecionando opção de Repetições
function choiceR16(c) {
  const itemR = document.querySelector('#itemR16-' + c).innerHTML;
  inputR16.value = itemR;
  dropDownR16.style.display = 'none';
  dropDownR16.style.position = 'static'
  verificandoBtn16()
}

// Ativando Botão
function verificandoBtn16 () {
  if (inputS16.value !== "" && inputR16.value !== "") {
    btn16.removeAttribute('disabled');
    btn16.classList.remove('btnDesabilitado')
    btn16.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn16() {
  card16.classList.add('cardComCheck', '::before')
  card16.removeAttribute('onclick')
  card16.classList.remove('efeitoCard')
  inputS16.style.display = 'none'
  inputR16.style.display = 'none'
  btn16.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer16.style.display = 'flex'
  imgCardC16 = document.querySelector('.imgCardC16')
  capCardC16 = document.querySelector('.cap16')
  const cardSave16 = [imgCardC16.src, capCardC16.textContent, inputS16.value, inputR16.value]
  saveCard(cardSave16, 16)
}

function clickBtnDesfazer16() {
  inputS16.value = ''
  inputR16.value = ''
  btnDesfazer16.style.display = 'none'
  card16.style.opacity = '1'
  card16.classList.remove('cardComCheck', '::before')
  card16.setAttribute('onclick', 'selectCard16()')
  card16.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas16')
}


// CARD 17
const card17 = document.querySelector('.card17');
const inputS17 = document.querySelector('.inputS17');
const inputR17 = document.querySelector('.inputR17');
const dropDownS17 = document.querySelector('.dropDownS17');
const dropDownR17 = document.querySelector('.dropDownR17');
const btn17 = document.querySelector('.btn17')
const btnDesfazer17 = document.querySelector('.divDesfazer17');

// Selecionando card
function selectCard17() {
  if (card17.style.opacity == '0.8') {
    card17.style.opacity = '1'
  } else {
    card17.style.opacity = '0.8'
  }
  if (inputS17.style.display == 'inline') {
    inputS17.style.display = 'none'
    inputS17.value = ''
  } else {
    inputS17.style.display = 'inline'
  }
  if (inputR17.style.display == 'inline') {
    inputR17.style.display = 'none'
    inputR17.value = ''
  } else {
    inputR17.style.display = 'inline'
  }
  if (dropDownS17.style.display == 'block') {
    dropDownS17.style.display = 'none'
  }
  if (dropDownR17.style.display == 'block') {
    dropDownR17.style.display = 'none'
  }
  if (btn17.style.display == 'inline') {
    btn17.style.display = 'none'
  } else {
    btn17.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS17() {
  if (dropDownR17.style.display == 'block') {
    dropDownR17.style.display = 'none'
  }
  if (dropDownS17.style.display == 'block') {
    dropDownS17.style.display = 'none'
  } else {
    dropDownS17.style.position = 'absolute'
    dropDownS17.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR17() {
  if (dropDownS17.style.display == 'block') {
    dropDownS17.style.display = 'none'
  }
  if (dropDownR17.style.display == 'block') {
    dropDownR17.style.display = 'none'
  } else {
    dropDownR17.style.position = 'absolute'
    dropDownR17.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS17(c) {
  const itemS = document.querySelector('#itemS17-' + c).innerHTML;
  inputS17.value = itemS;
  dropDownS17.style.display = 'none';
  dropDownS17.style.position = 'static'
  verificandoBtn17()
}

// Selecionando opção de Repetições
function choiceR17(c) {
  const itemR = document.querySelector('#itemR17-' + c).innerHTML;
  inputR17.value = itemR;
  dropDownR17.style.display = 'none';
  dropDownR17.style.position = 'static'
  verificandoBtn17()
}

// Ativando Botão
function verificandoBtn17 () {
  if (inputS17.value !== "" && inputR17.value !== "") {
    btn17.removeAttribute('disabled');
    btn17.classList.remove('btnDesabilitado')
    btn17.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn17() {
  card17.classList.add('cardComCheck', '::before')
  card17.removeAttribute('onclick')
  card17.classList.remove('efeitoCard')
  inputS17.style.display = 'none'
  inputR17.style.display = 'none'
  btn17.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer17.style.display = 'flex'
  imgCardC17 = document.querySelector('.imgCardC17')
  capCardC17 = document.querySelector('.cap17')
  const cardSave17 = [imgCardC17.src, capCardC17.textContent, inputS17.value, inputR17.value]
  saveCard(cardSave17, 17)
}

function clickBtnDesfazer17() {
  inputS17.value = ''
  inputR17.value = ''
  btnDesfazer17.style.display = 'none'
  card17.style.opacity = '1'
  card17.classList.remove('cardComCheck', '::before')
  card17.setAttribute('onclick', 'selectCard17()')
  card17.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas17')
}


// CARD 18
const card18 = document.querySelector('.card18');
const inputS18 = document.querySelector('.inputS18');
const inputR18 = document.querySelector('.inputR18');
const dropDownS18 = document.querySelector('.dropDownS18');
const dropDownR18 = document.querySelector('.dropDownR18');
const btn18 = document.querySelector('.btn18')
const btnDesfazer18 = document.querySelector('.divDesfazer18');

// Selecionando card
function selectCard18() {
  if (card18.style.opacity == '0.8') {
    card18.style.opacity = '1'
  } else {
    card18.style.opacity = '0.8'
  }
  if (inputS18.style.display == 'inline') {
    inputS18.style.display = 'none'
    inputS18.value = ''
  } else {
    inputS18.style.display = 'inline'
  }
  if (inputR18.style.display == 'inline') {
    inputR18.style.display = 'none'
    inputR18.value = ''
  } else {
    inputR18.style.display = 'inline'
  }
  if (dropDownS18.style.display == 'block') {
    dropDownS18.style.display = 'none'
  }
  if (dropDownR18.style.display == 'block') {
    dropDownR18.style.display = 'none'
  }
  if (btn18.style.display == 'inline') {
    btn18.style.display = 'none'
  } else {
    btn18.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS18() {
  if (dropDownR18.style.display == 'block') {
    dropDownR18.style.display = 'none'
  }
  if (dropDownS18.style.display == 'block') {
    dropDownS18.style.display = 'none'
  } else {
    dropDownS18.style.position = 'absolute'
    dropDownS18.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR18() {
  if (dropDownS18.style.display == 'block') {
    dropDownS18.style.display = 'none'
  }
  if (dropDownR18.style.display == 'block') {
    dropDownR18.style.display = 'none'
  } else {
    dropDownR18.style.position = 'absolute'
    dropDownR18.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS18(c) {
  const itemS = document.querySelector('#itemS18-' + c).innerHTML;
  inputS18.value = itemS;
  dropDownS18.style.display = 'none';
  dropDownS18.style.position = 'static'
  verificandoBtn18()
}

// Selecionando opção de Repetições
function choiceR18(c) {
  const itemR = document.querySelector('#itemR18-' + c).innerHTML;
  inputR18.value = itemR;
  dropDownR18.style.display = 'none';
  dropDownR18.style.position = 'static'
  verificandoBtn18()
}

// Ativando Botão
function verificandoBtn18 () {
  if (inputS18.value !== "" && inputR18.value !== "") {
    btn18.removeAttribute('disabled');
    btn18.classList.remove('btnDesabilitado')
    btn18.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn18() {
  card18.classList.add('cardComCheck', '::before')
  card18.removeAttribute('onclick')
  card18.classList.remove('efeitoCard')
  inputS18.style.display = 'none'
  inputR18.style.display = 'none'
  btn18.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer18.style.display = 'flex'
  imgCardC18 = document.querySelector('.imgCardC18')
  capCardC18 = document.querySelector('.cap18')
  const cardSave18 = [imgCardC18.src, capCardC18.textContent, inputS18.value, inputR18.value]
  saveCard(cardSave18, 18)
}

function clickBtnDesfazer18() {
  inputS18.value = ''
  inputR18.value = ''
  btnDesfazer18.style.display = 'none'
  card18.style.opacity = '1'
  card18.classList.remove('cardComCheck', '::before')
  card18.setAttribute('onclick', 'selectCard18()')
  card18.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas18')
}


// CARD 19
const card19 = document.querySelector('.card19');
const inputS19 = document.querySelector('.inputS19');
const inputR19 = document.querySelector('.inputR19');
const dropDownS19 = document.querySelector('.dropDownS19');
const dropDownR19 = document.querySelector('.dropDownR19');
const btn19 = document.querySelector('.btn19')
const btnDesfazer19 = document.querySelector('.divDesfazer19');

// Selecionando card
function selectCard19() {
  if (card19.style.opacity == '0.8') {
    card19.style.opacity = '1'
  } else {
    card19.style.opacity = '0.8'
  }
  if (inputS19.style.display == 'inline') {
    inputS19.style.display = 'none'
    inputS19.value = ''
  } else {
    inputS19.style.display = 'inline'
  }
  if (inputR19.style.display == 'inline') {
    inputR19.style.display = 'none'
    inputR19.value = ''
  } else {
    inputR19.style.display = 'inline'
  }
  if (dropDownS19.style.display == 'block') {
    dropDownS19.style.display = 'none'
  }
  if (dropDownR19.style.display == 'block') {
    dropDownR19.style.display = 'none'
  }
  if (btn19.style.display == 'inline') {
    btn19.style.display = 'none'
  } else {
    btn19.style.display = 'inline'
  }
}

// Revelando opções de Séries
function revelandoInputS19() {
  if (dropDownR19.style.display == 'block') {
    dropDownR19.style.display = 'none'
  }
  if (dropDownS19.style.display == 'block') {
    dropDownS19.style.display = 'none'
  } else {
    dropDownS19.style.position = 'absolute'
    dropDownS19.style.display = 'block'
  }
}

// Revelando opções de Repetições
function revelandoInputR19() {
  if (dropDownS19.style.display == 'block') {
    dropDownS19.style.display = 'none'
  }
  if (dropDownR19.style.display == 'block') {
    dropDownR19.style.display = 'none'
  } else {
    dropDownR19.style.position = 'absolute'
    dropDownR19.style.display = 'block'
  }
}

// Selecionando opção de Série
function choiceS19(c) {
  const itemS = document.querySelector('#itemS19-' + c).innerHTML;
  inputS19.value = itemS;
  dropDownS19.style.display = 'none';
  dropDownS19.style.position = 'static'
  verificandoBtn19()
}

// Selecionando opção de Repetições
function choiceR19(c) {
  const itemR = document.querySelector('#itemR19-' + c).innerHTML;
  inputR19.value = itemR;
  dropDownR19.style.display = 'none';
  dropDownR19.style.position = 'static'
  verificandoBtn19()
}

// Ativando Botão
function verificandoBtn19() {
  if (inputS19.value !== "" && inputR19.value !== "") {
    btn19.removeAttribute('disabled');
    btn19.classList.remove('btnDesabilitado')
    btn19.classList.add('btnActive');
  }
}

// Clicando no Botão
function clickBtn19() {
  card19.classList.add('cardComCheck', '::before')
  card19.removeAttribute('onclick')
  card19.classList.remove('efeitoCard')
  inputS19.style.display = 'none'
  inputR19.style.display = 'none'
  btn19.style.display = 'none'
  totalSelectCards += 1
  verificandoBtnConfirm()
  btnDesfazer19.style.display = 'flex'
  imgCardC19 = document.querySelector('.imgCardC19')
  capCardC19 = document.querySelector('.cap19')
  const cardSave19 = [imgCardC19.src, capCardC19.textContent, inputS19.value, inputR19.value]
  saveCard(cardSave19, 19)
}

function clickBtnDesfazer19() {
  inputS19.value = ''
  inputR19.value = ''
  btnDesfazer19.style.display = 'none'
  card19.style.opacity = '1'
  card19.classList.remove('cardComCheck', '::before')
  card19.setAttribute('onclick', 'selectCard19()')
  card19.classList.add('efeitoCard')
  totalSelectCards -= 1
  verificandoBtnConfirm()
  localStorage.removeItem('cardCostas19')
}
