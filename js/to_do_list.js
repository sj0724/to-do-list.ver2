const inputButton = document.querySelector(".input_btn");
const delButton = document.querySelector(".del_btn");
let inputValue = document.querySelector(".input_info");
let result = document.querySelector(".result");
const list = document.querySelector(".list");

function input() {
    if(inputValue.value == ""){
        alert('내용을 입력하세요.');
    }else{
        let list = document.createElement("li");
        let del = document.createElement('button');
        list.innerHTML = inputValue.value;
        result.appendChild(list);
        list.appendChild(del);
        del.innerText = "✔️";
        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.width = "40px";
        del.style.height = "40px";
        del.style.cursor = "pointer";
        del.style.borderRadius = "10px";
        del.style.marginTop = "5px";
        del.addEventListener("click", delate);
    }
    inputValue.value = "";
    inputValue.focus();

    list.style.display = "flex";

}

function delate(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
    if(result.innerHTML == ''){
        list.style.display = "none";
    }
}

function clear(e){
    if(confirm ("정말 삭제하시겠습니까?") == true ){
        if(result.innerHTML == ''){
            alert('삭제할 목록이 없습니다.');
        }else{
            result.innerHTML = '';
        }
    }else{
        return false;
    }
}

inputButton.addEventListener("click", input);
delButton.addEventListener("click", clear);