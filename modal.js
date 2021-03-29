// id do botão open modal
const openModal = document.getElementById('openModal') 

//class do modal 
const modalWrapper = document.querySelector('.modal-wrapper') 

//evento do click
openModal.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
} 

//funcção para fechar o modal
document.addEventListener('keydown', function(event){
    const isEsckey = event.key === 'Escape'

    if(isEsckey) {
        modalWrapper.classList.add('invisible')
    }
})