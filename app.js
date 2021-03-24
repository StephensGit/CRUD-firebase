
const btnAdd = document.querySelector('.btn-add');

const addModal = document.querySelector('.add-modal');

const tableUsers = document.querySelector('.table-users');

// Create element and render users
const renderUser = doc => {
     const tr = `
     <tr data-id='${doc.id}'>
     <td>${doc.data().firstName}</td>
     <td>${doc.data().lastName}</td>
     <td>${doc.data().phone}</td>
     <td>${doc.data().email}</td>
     <td>
       <button class="btn btn-edit">Edit</button>
       <button class="btn btn-delete">Delete</button>
     </td>
   </tr>
   `;
   tableUsers.insertAdjacentHTML('beforeend', tr);
}

// Click add user button
btnAdd.addEventListener('click', () => {
    addModal.classList.add("modal-show");
});

// User clicks outside modal to remove it
window.addEventListener('click', (e) => {
    if(e.target === addModal)
    addModal.classList.remove('modal-show');
}); 

// Get all the users
db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.data);
        renderUser(doc);
    })
})