let add = document.querySelector('.add');
let i = 0;
add.addEventListener('click',()=>{
    let div = document.createElement('div');
    div.classList.add('list-container');
    div.innerHTML = 
`
<div class="list">
    <div class="list-item" id='listim${i}'>
        <input type="text" placeholder="your schedule" id='input${i}'>
    </div>
    <div class="save-edit" id='saveedit${i}' onclick='saveedit(${i})'>
        <i class="fa-regular fa-floppy-disk save" id='save${i}' ></i>
        <i class="fa-solid fa-file-pen edit" id='edit${i}' style="display: none;"></i>
    </div>
    <div class="delete" id='del${i}' onclick='del(${i})'>
        <i class="fa-solid fa-trash" ></i>
    </div>
</div>
`
if(document.querySelector('.list-add-item').innerText === 'no-lists')
    document.querySelector('.list-add-item').innerText = '';
document.querySelector('.list-add-item').appendChild(div)
i++;
})
let saveedit = (ind) => {
    let save = document.querySelector(`#save${ind}`);
    let edit = document.querySelector(`#edit${ind}`);
    let input = document.querySelector(`#input${ind}`);
    if(save.style.display === 'none'){
        save.style.display = 'block';
        edit.style.display = 'none';
        input.disabled = false;
    }else{
        save.style.display = 'none';
        input.disabled = true;
        edit.style.display = 'block';
    }
}
let del = (ind) => {
    document.querySelector('.list-add-item').removeChild(
        document.querySelector(`.list-container:has(#del${ind})`)
    )
    if(document.querySelector('.list-add-item').innerHTML === '')
        document.querySelector('.list-add-item').innerText = 'no-lists';
}