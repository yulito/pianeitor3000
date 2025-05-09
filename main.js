var typeSound;

window.addEventListener('load', ()=>{
    document.querySelector('.btns-active').classList.add('selected-s')
    document.querySelector('.btnv-active').classList.add('selected-v')

    //put default sound into typeSound var
    typeSound = 'sine'
    
})

//clean sound buttons
function cleanSound(){
    document.querySelectorAll('.btn-s').forEach(btn =>{
        btn.classList.remove('selected-s')
    })
}

//clean view buttons
function cleanView(){
    document.querySelectorAll('.btn-v').forEach(btn =>{
        btn.classList.remove('selected-v')
    })
}

//select sound
function activeBtnSound(s){
    cleanSound()
    document.querySelectorAll('.btn-s').forEach(btn =>{
        if (btn.textContent.includes(s)) {
            btn.classList.add('selected-s');
          }      
    })
    //put sound into the typeSound var
    typeSound = s
}

//select view
function activeBtnView(v){ 
    cleanView()    
    document.querySelectorAll('.btn-v').forEach(btn =>{
        if (btn.textContent.includes(v)) {
            btn.classList.add('selected-v');            
          }
    })
    document.querySelector('body').style.backgroundImage='url("'+v+'.png")';
}

function btnNotes(){
    let btnn = document.querySelector('.btn-n');

    if (btnn.classList.contains('selected-k')){
        btnn.classList.remove('selected-k')
        //hidden all notes
        document.querySelectorAll('.notes').forEach(note =>{
            note.style.visibility = "hidden" 
        })        
    }else{
        btnn.classList.add('selected-k')
        //normalizar
        document.querySelectorAll('.notes').forEach(note =>{
            note.style.visibility = "visible" 
        }) 
    }    
}
function btnKeys(){
    let btnk = document.querySelector('.btn-k');

    if (btnk.classList.contains('selected-k')){
        btnk.classList.remove('selected-k')
        //hidden all notes
        document.querySelectorAll('.keys').forEach(key =>{
            key.style.visibility = "hidden" 
        })        
    }else{
        btnk.classList.add('selected-k')
        //normalizar
        document.querySelectorAll('.keys').forEach(key =>{
            key.style.visibility = "visible" 
        }) 
    }
}

//capture all notes from keys
const kns = document.querySelectorAll('.key-note');

function showNotes(event) {
    let frec = "";

    if (event.type === "click") {
        frec = event.target.getAttribute("data-value");
    } else if (event.type === "keydown") {
        if (event.key.toLowerCase() === "q") {
            frec = kns[0].getAttribute("data-value"); kns[0].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="w") {
            frec = kns[1].getAttribute("data-value"); kns[1].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="e") {
            frec = kns[2].getAttribute("data-value"); kns[2].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="r") {
            frec = kns[3].getAttribute("data-value"); kns[3].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="t") {
            frec = kns[4].getAttribute("data-value"); kns[4].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="y") {
            frec = kns[5].getAttribute("data-value"); kns[5].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="u") {
            frec = kns[6].getAttribute("data-value"); kns[6].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="i") {
            frec = kns[7].getAttribute("data-value"); kns[7].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="o") {
            frec = kns[8].getAttribute("data-value"); kns[8].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="p") {
            frec = kns[9].getAttribute("data-value"); kns[9].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="a") {
            frec = kns[10].getAttribute("data-value"); kns[10].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="s") {
            frec = kns[11].getAttribute("data-value"); kns[11].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="d") {
            frec = kns[12].getAttribute("data-value"); kns[12].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="f") {
            frec = kns[13].getAttribute("data-value"); kns[13].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="g") {
            frec = kns[14].getAttribute("data-value"); kns[14].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="h") {
            frec = kns[15].getAttribute("data-value"); kns[15].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="j") {
            frec = kns[16].getAttribute("data-value"); kns[16].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="k") {
            frec = kns[17].getAttribute("data-value"); kns[17].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="l") {
            frec = kns[18].getAttribute("data-value"); kns[18].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="m") {
            frec = kns[19].getAttribute("data-value"); kns[19].style.backgroundColor = "red";
        } else if (event.key.toLowerCase() ==="n") {
            frec = kns[20].getAttribute("data-value"); kns[20].style.backgroundColor = "red";
        }else if (event.key == 1) {
            frec = kns[21].getAttribute("data-value"); kns[21].style.backgroundColor = "red";
        } else if (event.key == 2) {
            frec = kns[22].getAttribute("data-value"); kns[22].style.backgroundColor = "red";
        } else if (event.key == 3) {
            frec = kns[23].getAttribute("data-value"); kns[23].style.backgroundColor = "red";
        } else if (event.key == 4) {
            frec = kns[24].getAttribute("data-value"); kns[24].style.backgroundColor = "red";
        } else if (event.key == 5) {
            frec = kns[25].getAttribute("data-value"); kns[25].style.backgroundColor = "red";
        } else if (event.key == 6) {
            frec = kns[26].getAttribute("data-value"); kns[26].style.backgroundColor = "red";
        } else if (event.key == 7) {
            frec = kns[27].getAttribute("data-value"); kns[27].style.backgroundColor = "red";
        } else if (event.key == 8) {
            frec = kns[28].getAttribute("data-value"); kns[28].style.backgroundColor = "red";
        } else if (event.key == 9) {
            frec = kns[29].getAttribute("data-value"); kns[29].style.backgroundColor = "red";
        } else if (event.key == 0) {
            frec = kns[30].getAttribute("data-value"); kns[30].style.backgroundColor = "red";
        } else if (event.key == "z") {
            frec = kns[31].getAttribute("data-value"); kns[31].style.backgroundColor = "red";
        } else if (event.key == "x") {
            frec = kns[32].getAttribute("data-value"); kns[32].style.backgroundColor = "red";
        } else if (event.key == "c") {
            frec = kns[33].getAttribute("data-value"); kns[33].style.backgroundColor = "red";
        } else if (event.key == "v") {
            frec = kns[34].getAttribute("data-value"); kns[34].style.backgroundColor = "red";
        } else if (event.key == "b") {
            frec = kns[35].getAttribute("data-value"); kns[35].style.backgroundColor = "red";
        }
    }else if (event.type === "keyup") {
        if (event.key.toLowerCase() === "q") {
            kns[0].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="w") {
            kns[1].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="e") {
            kns[2].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="r") {
            kns[3].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="t") {
            kns[4].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="y") {
            kns[5].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="u") {
            kns[6].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="i") {
            kns[7].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="o") {
            kns[8].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="p") {
            kns[9].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="a") {
            kns[10].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="s") {
            kns[11].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="d") {
            kns[12].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="f") {
            kns[13].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="g") {
            kns[14].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="h") {
            kns[15].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="j") {
            kns[16].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="k") {
            kns[17].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="l") {
            kns[18].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="m") {
            kns[19].style.backgroundColor = "#ffffff";
        } else if (event.key.toLowerCase() ==="n") {
            kns[20].style.backgroundColor = "#ffffff";
        }else if (event.key == 1) {
            kns[21].style.backgroundColor = "#000";
        } else if (event.key == 2) {
            kns[22].style.backgroundColor = "#000";
        } else if (event.key == 3) {
            kns[23].style.backgroundColor = "#000";
        } else if (event.key == 4) {
            kns[24].style.backgroundColor = "#000";
        } else if (event.key == 5) {
            kns[25].style.backgroundColor = "#000";
        } else if (event.key == 6) {
            kns[26].style.backgroundColor = "#000";
        } else if (event.key == 7) {
            kns[27].style.backgroundColor = "#000";
        } else if (event.key == 8) {
            kns[28].style.backgroundColor = "#000";
        } else if (event.key == 9) {
            kns[29].style.backgroundColor = "#000";
        } else if (event.key == 0) {
            kns[30].style.backgroundColor = "#000";
        } else if (event.key == "z") {
            kns[31].style.backgroundColor = "#000";
        } else if (event.key == "x") {
            kns[32].style.backgroundColor = "#000";
        } else if (event.key == "c") {
            kns[33].style.backgroundColor = "#000";
        } else if (event.key == "v") {
            kns[34].style.backgroundColor = "#000";
        } else if (event.key == "b") {
            kns[35].style.backgroundColor = "#000";
        }
    }

    if (frec) {
        recorder(frec);
    }
}

// Agregar evento a cada caja
kns.forEach(kn => {
    kn.addEventListener("click", showNotes);
});

// Evento de teclado para toda la página
document.addEventListener("keydown", showNotes);
document.addEventListener("keyup", showNotes);

//use the lib for sound from JS
var context = new AudioContext();
function recorder(frecuency){
    var osc = context.createOscillator();
    g = context.createGain();
    osc.connect(g);
    osc.type=typeSound;
    osc.frequency.value= frecuency;
    g.connect(context.destination);
    osc.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5)
} 