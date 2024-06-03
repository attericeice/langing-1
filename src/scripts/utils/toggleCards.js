export function createToggle(cardConteiner, elemsCreate = [], currentClass, childClass) {
  let elemsCreateExists = false;
  if (elemsCreate.length) {
    elemsCreateExists = true;
    elemsCreate = elemsCreate.map(elem => document.querySelector(elem));
  }
  const conteinerElem = document.querySelector(cardConteiner);
  
  conteinerElem.addEventListener('click', e => {
    const currentElem = e.target.closest(childClass);
    if (!currentElem) return;
    if (currentElem.classList.contains(currentClass)) return;
    const elemWithCurrentClass = conteinerElem.querySelector(childClass + '.' + currentClass);
    elemWithCurrentClass.classList.remove(currentClass);
    if (elemsCreateExists) {
      elemsCreate.forEach(elem => {
        elemWithCurrentClass.removeChild(elem);
        currentElem.appendChild(elem);
      })
    }
    currentElem.classList.add(currentClass); 
  }); 
}
