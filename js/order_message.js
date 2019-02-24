const btnOrder = document.getElementById('btn_message');
const orderM = document.getElementById('order_message');
const closeM = document.getElementById('message');

btnOrder.addEventListener('click', (e) =>{
  e.preventDefault();
  //console.log('hi');
  orderM.classList.add('activeOM');
})
closeM.addEventListener('click', (e) =>{
  e.preventDefault();
  orderM.classList.remove('activeOM');
})