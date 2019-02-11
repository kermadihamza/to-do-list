let ajouter = document.getElementsByTagName('button')[0];
let test = document.getElementsByTagName('button')[3];
let v = document.getElementsByClassName('fa-check');
let edit = document.getElementsByClassName('fa-edit');
let del = document.getElementsByClassName('fa-trash-alt');
let btnDone = document.getElementsByClassName('btndone')[0];
console.log(btnDone);


function ajouterTxt() {
document.getElementsByTagName('input')[0].select()
    let repUsers = document.getElementsByTagName('input')[0].value
    let newTxt = document.createElement('li');
    newTxt.innerHTML =repUsers +` <i class="btn fas fa-trash-alt text-danger"></i>   <i class="btn fas fa-edit text-warning"></i>  <i class="btn fas fa-check text-success"></i>  `
    // let node = document.createTextNode(repUsers);
    // newTxt.appendChild(node);
    let element = document.getElementsByTagName('ul')[0];
    element.prepend(newTxt);
    console.dir(newTxt);
    
    
    if (repUsers === '') {
        alert("You must write something!");
        newTxt.style.display ='none'
      } 
    // FONCTION POUR AJOUTER LI

    // DECO LI
    let list = newTxt;
    list.style.backgroundColor = '#edeaea'

    list.children[0].style.float = 'right'
    list.children[1].style.float = 'right'
    list.children[2].style.float = 'right'

    

    // FONCTION CHECK OK
    function getLi() {
        if (list.children[2]) {
            list.style.backgroundColor = '#00ff4c' //<--- VERT;
            list.style.textDecoration = 'line-through'
        } 
    }
    
    list.children[2].addEventListener('click', getLi);


    // FONCTION REMOVE OK
    function suppLi() {
        if(list.children[0]) {
            newTxt.style.display = 'none';
        }
    }
list.children[0].addEventListener('click', suppLi);




// CREATION INPUT EDIT
 function createSave() {
    if(list.children[1]) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("placeholder", repUsers);
        document.body.appendChild(x);
    newTxt.innerHTML = repUsers + `<i class="btn fas fa-save text-success"></i>`;
}


x.style.borderRadius = '10px';
x.style.marginLeft = '30%'

// EDIT OK
let btnSave = document.getElementsByClassName('fa-save')[0];
function changeSave() {
    if (document.getElementsByClassName('fa-save')[0]) {
    newTxt.innerText = x.value ;
    newTxt.innerHTML = newTxt.innerHTML + ` <i class="btn fas fa-trash-alt text-danger"></i>   <i class="btn fas fa-edit text-warning"></i>  <i class="btn fas fa-check text-success"></i>  `
    x.style.display = 'none';    
    }
}
btnSave.addEventListener('click', changeSave);
}
list.children[1].addEventListener('click', createSave)


}

ajouter.addEventListener('click', ajouterTxt);


function done() {
    if (btnDone) {
       
        }
}
btnDone.addEventListener('click', done)