const menuAll = document.querySelectorAll('.menu');
const navBarBtn = document.querySelector('.fa-bars');
const closeNavBarBtn = document.querySelector('.fa-times');

function setDropdowns(elements){
  const nav = document.querySelector('nav');
  const heightNav = nav.offsetHeight;
  for (let i = 0; i < elements.length; i++) {
    const parentElement = elements[i].parentElement;
    if(parentElement.id === 'demos' || parentElement.id === 'documentation'){
      elements[i].style.top = `${heightNav}px`;
    } 
  }
}

function closeMenu(menu){
  menu.classList.replace('rise','fade-out')
  menu.style.display = 'none';
  menu.parentElement.style.color = '#252625';
}

function handleDropdown(elements){

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('rise');
    const parentElement = elements[i].parentElement;
    let isMouseHover = false;
    let mouseLeaveMenu = false;

    parentElement.parentElement.addEventListener('mouseover', ()=>{
      mouseLeaveMenu = false;
    });

    parentElement.parentElement.addEventListener('mouseleave', ()=>{
      mouseLeaveMenu = true;
    });

    parentElement.addEventListener("mouseleave", ()=> {
      setTimeout(() => {
        //Don't wait when changing between neighbour dropdown labels
        if(!mouseLeaveMenu){
          closeMenu(elements[i]);
        } 
        
        //Wait to go next dropdown menu
        setTimeout(() => {
          if(isMouseHover === false ){
            closeMenu(elements[i]);
          };
        },300)
      }, 0);

      isMouseHover = false;
    }, false);

    parentElement.addEventListener("mouseover", ()=> {
      isMouseHover = true
      if(isMouseHover === true ){
        elements[i].classList.replace('fade-out','rise');
        elements[i].style.display = 'block';
        parentElement.style.color = '#4285F4';
      }
    }, false);
  };
};

handleDropdown(menuAll);
setDropdowns(menuAll);

navBarBtn.addEventListener('click', ()=>{
  document.querySelector('.middle').style.left = 0;
  closeNavBarBtn.style.display = 'block';
})

closeNavBarBtn.addEventListener('click', ()=>{
  document.querySelector('.middle').style.left = '-100%'
  closeNavBarBtn.style.display = 'none';
})