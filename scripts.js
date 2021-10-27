const panals = document.querySelectorAll('.panel')
panals.forEach( panal => {
     panal.addEventListener( 'click' , () => {
          removeActiveClass()
          panal.classList.add('active')
     })
});
function removeActiveClass(){
     panals.forEach( panal =>{
          panal.classList.remove('active')
     })
}