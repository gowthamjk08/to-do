let inputValue = document.getElementById('input'),
unorderList = document.querySelector('ul');
let p = document.querySelector('p');

function remove(event){
    let rem = event.target.parentElement;
    rem.remove();

}
function create(){
     p.style="display:none"
    if(input.value != "" && input.value != " "){
        list = document.createElement('li')
        removeBtn = document.createElement('button');
        removeBtn.innerText= "X";
        removeBtn.setAttribute('onclick','remove(event)');
        list.append(removeBtn);
        list.prepend(input.value)
        unorderList.appendChild(list);
        input.value =""
    }
    else{
        p.style="display:block"
    }

}