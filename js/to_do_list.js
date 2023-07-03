const inputButton = document.querySelector(".input_btn");
const delButton = document.querySelector(".del_btn");
let inputValue = document.querySelector(".input_info");
let result = document.querySelector(".result")

function input() {
    if(inputValue.value == ""){
        alert('내용을 입력하세요.');
    }else{
        let list = document.createElement("li");
        let del = document.createElement('button');
        list.innerHTML = inputValue.value;
        result.appendChild(list);
        list.appendChild(del);
        del.innerText = "X";
        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.width = "50px";
        del.style.justifyContent ="right";
        del.style.cursor = "pointer";
        del.addEventListener("click", delate);
    }
    inputValue.value = "";
    inputValue.focus();
}

function delate(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
}

inputButton.addEventListener("click", input);
delButton.addEventListener("click", delate);