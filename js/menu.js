const menus = document.querySelectorAll(".item_menu-burger");

for (const menu of menus) {
  menu.addEventListener('click', e => {
    const curMenu = e.currentTarget;  
    const content_menu = curMenu.querySelector('.menu_text');

    console.log("content_menu11:", content_menu);

    const textBlock_menu = content_menu.firstElementChild;
    // const regWidth = textBlock_menu.clientWidth;
    if (curMenu.classList.contains('active')) {
      //открыт
      curMenu.classList.remove('active');
      content_menu.style.width = '0px';
      

      //закрыт
    } else {
      Array.from(menus).forEach(menu => {
        menu.classList.remove('active');
        // menu.querySelector('.item_menu-burger').style.width = '80px';
        content_menu.style.width = '100%';
        
      })
      curMenu.classList.add('active');
      // content_menu.style.width = `${regWidth}px`;
    }
  });
}