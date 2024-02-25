const btn = document.getElementById('botao');


btn.addEventListener('click', Evento)



function Evento(event){


    console.log("Paulo Kogos está preparando o envio...")
    event.preventDefault();

    const nome = document.getElementById('name').value;
    localStorage.setItem('NomeLoja', nome);

    const nomeSalvo = localStorage.getItem('NomeLoja')

    if(nomeSalvo){

        console.log(nomeSalvo);
    }

}


const focus1 = document.getElementById('name');
focus1.addEventListener('focus', Evento2);

function Evento2(event){

    this.style.outlineColor = "darkViolet"
    console.log("Beiçola");
    console.log(event);
}


const focus2 = document.getElementById('endereco');

focus2.addEventListener('focus', Evento3);

function Evento3 (event){

        this.style.outlineColor = "darkViolet";
        console.log("Andressa Urach")
        console.log(event)


}


const focus3 = document.getElementById('horarios');

focus3.addEventListener('focus', Evento4);

function Evento4(event){

    this.style.outlineColor = "darkViolet";
    console.log("Belle Bellinha");
    console.log(event);


}


localStorage.setItem('NomeLoja', 'name')


