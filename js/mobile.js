function ready() {
const btn = document.getElementById('btn_mobile');
const btnMB = document.getElementById('menu_mobile');
const btnClose = document.getElementById('close_mobile');

btn.addEventListener('click', (e) =>{
  e.preventDefault();
  btnMB.classList.add('activeMB');
})
btnClose.addEventListener('click', (e) =>{
  e.preventDefault();
  btnMB.classList.remove('activeMB');
})
};
document.addEventListener("DOMContentLoaded", ready);