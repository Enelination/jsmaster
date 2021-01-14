let taskInput = document.querySelector('.taskInput')
let addButton = document.querySelector('.addtask')

addButton.addEventListener('click', addButtonClicked)


function addButtonClicked(){
    let todItem = taskInput.value
    let listItem = document.createElement('li')
    let listItemText  = document.createElement('h5')
    listItemText.innerHTML = todItem
    listItem.className="list-group-item d-flex justify-content-between align-items-center"
    


    let unorderedList = document.querySelector('.todo-list')
    unorderedList.appendChild(listItem)


    let deletebutton = document.createElement('button')
    deletebutton.innerHTML='Done'
    deletebutton.className='btn btn-danger'


    deletebutton.addEventListener('click',()=>{
        listItem.remove()
    })
    listItem.appendChild (deletebutton)

    unorderedList.appendChild(listItem)



    console.log(todItem)
}

