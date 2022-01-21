const menuAll = document.querySelectorAll('.menu');

function handleDropdown(elements){
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('rise');
    const parentElement = elements[i].parentElement;
    let isMouseHover = false;

    parentElement.addEventListener("mouseleave", function (event) {
      isMouseHover = false;
      setTimeout(() => {
        if(isMouseHover === false ){
          elements[i].classList.replace('rise','fade-out')
          elements[i].style.display = 'none';
          parentElement.style.color = '#252625'
        };
      },80)
      
    }, false);

    parentElement.addEventListener("mouseover", function (event) {
      isMouseHover = true
      setTimeout(() => {
        if(isMouseHover === true ){
          elements[i].classList.replace('fade-out','rise');
          elements[i].style.display = 'block';
          parentElement.style.color = '#4285F4';
        }
      }, 80)
    }, false);
  };
};

handleDropdown(menuAll);