const items = document.querySelectorAll(".team_item");

for (const item of items) {
item.addEventListener('click', e => {
  const curItem = e.currentTarget;
  const content = curItem.querySelector('.hidden_team');
  const textBlock = content.firstElementChild;
  const regHeight = textBlock.clientHeight;
  if (curItem.classList.contains('active')) {
    //открыт
    curItem.classList.remove('active');
    content.style.height = '0';
  } else {
    curItem.classList.add('active');
    content.style.height = `${regHeight}px`;
  }
  //curItem.classList.add('active')
  //console.log(regHeight);
  //content.style.height = `${regHeight}px`;

  //content.style.height = '100%';
  //content.style.overflow = 'visible';
});
}