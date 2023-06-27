let pass = document.getElementById('count');
let display = document.getElementById('display');
let mdc = document.getElementById('mdc');
let count = 0;
let total = 0;

function increment(){
    let inc = count+=1;
    pass.innerText = inc;
}
function save(){
    let save = total += count;
    display.innerText = save;
    pass.innerText = 0;
    count = 0;
    return save;
}
function clear_all(){
    if (total != 0 && count == 0){
        mdc.style.display = 'block';
    }
    else if (count != 0){
        alert("please save the current count");
    }
    else{
        alert("There is no current entry to clear");
    }
}

function acc(){
    let save_clear = save();
    display.innerText = 0;
    pass.innerText = 0;
    count = 0;
    total = 0;
    mdc.style.display = 'none';
}
function rej(){
    mdc.style.display = 'none';
}


