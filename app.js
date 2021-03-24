
const btnAdd = document.querySelector('.btn-add');

const addModal = document.querySelector('.add-modal');

btnAdd.addEventListener('click', () => {
    addModal.classList.add("modal-show");
});

window.addEventListener('click', (e) => {
    if(e.target === addModal)
    addModal.classList.remove('modal-show');
});