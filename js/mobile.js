const btn = document.getElementById('btn_mobile');
const btnClose = document.getElementById('close_mobile');
const menuMB = document.getElementById('menu_mobile');



btn.addEventListener('click', () => {
  e.preventDefault();
  menuMB.classList.add('activeMB');
})
btnClose.addEventListener('click', () => {
  e.preventDefault();
  const menuMB = document.getElementById('menu_mobile');
  console.log('hi');
})