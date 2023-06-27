let pass = document.getElementById('count');
let display = document.getElementById('display');
let mdc = document.getElementById('mdc');
let count = 0;
let total = 0;

function increment(){
    let inc = count+=1;
    pass.innerText = inc;
}

let saveProcess = [];
let saveBatch = [];
function save(){
    let save = total += count;    
    if (save != 0){
        saveBatch.push(count);
        display.innerText = save;
        pass.innerText = 0;
        count = 0;
        saveProcess.push(total);
    }
    else{
        alert('No Entry to save');
    }
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

let myArray = [];
function acc(){
    let indexValue = saveProcess.length - 1;
    let save_clear = saveProcess[indexValue];
    display.innerText = 0;
    pass.innerText = 0;
    count = 0;
    total = 0;
    mdc.style.display = 'none';
    myArray.push(save_clear);
}
function rej(){
    mdc.style.display = 'none';
}

// viewing logs
let view = document.getElementById('vl');
let save_prog = document.getElementById('save_prog');
let clear_prog = document.getElementById('clear_prog');
function viewLog(){
    view.style.display = 'block';
    save_prog.textContent += saveBatch;
    clear_prog.textContent += myArray;
}
function closeLog(){
    view.style.display = 'none';
}

