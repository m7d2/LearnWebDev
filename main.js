let body = document.body;
let btn = document.getElementById('btn');
let changed = false;

function ChangeColor(hex){

    if (!changed){
        btn.innerText = "Turn Light ON";
        body.style.background = hex;
        changed = true;
    } else {
        btn.innerText = "Turn Light OFF";
        body.style.background = 'white';
        changed = false;
    }
}
