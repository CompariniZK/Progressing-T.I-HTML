const btn = document.getElementById('botao');

btn.addEventListener('click', Evento)

function Evento(event){

    console.log("Paulo Kogos")
    console.log(event)
}


const focus1 = document.getElementById('name');
focus1.addEventListener('focus', Evento2);

function Evento2(event){

    this.style.backgroundColor = "darkViolet"
    console.log("Beiçola");
    console.log(event);
}


const focus2 = document.getElementById('endereco');

focus2.addEventListener('focus', Evento3);

function Evento3 (event){

        this.style.backgroundColor = "darkviolet";
        console.log("Andressa Urach")
        console.log(event)


}