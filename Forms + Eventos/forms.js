const btn = document.getElementById('botao');


btn.addEventListener('click', Evento)



document.addEventListener('DOMContentLoaded', Realoaded)

function Realoaded(){

    const NomeSalvo = localStorage.getItem('NomeLoja')

if(NomeSalvo != null){

    console.log("NomeRecuperado da loja foi: " + NomeSalvo)

        }

    const EnderecoSalvo = localStorage.getItem('EndereçoLoja');

        if(EnderecoSalvo != null){

        console.log("Endereço recuperado da loja foi " + EnderecoSalvo )
        }
    
    const HorariosSalvos = localStorage.getItem('HorariosAbreFecha');
        if(HorariosSalvos != null){

            console.log("Os horários de abertura e fechamento eram " + HorariosSalvos)
        }
    
    const DiasSalvos = document.querySelectorAll('input[type="checkbox"]')

    DiasSalvos.forEach(verificaDias);{

           function verificaDias(checkbox){

            const checkBoxID = 'estadoCheckBox_' + checkbox.id;
            const checkBoxEstado = localStorage.getItem(checkBoxID);

            if(checkBoxEstado == 'checked'){

                checkbox.checked == true;
            }
            else{

                checkbox.checked == false;
            }

            checkbox.addEventListener('change', observaCheca);


            function observaCheca(){

                if(checkbox.checked){

                    localStorage.setItem(checkBoxID, 'checked')
                }
                else{

                    localStorage.removeItem(checkBoxID);
                }

                console.log(checkBoxID);
            }



        }
    }
}



function Evento(event){


    console.log("Paulo Kogos está preparando o envio...")
    
const nome = document.getElementById('name').value;
localStorage.setItem('NomeLoja', nome);

const Endereco = document.getElementById('endereco').value;
localStorage.setItem('EndereçoLoja', Endereco );

const Horarios = document.getElementById('horarios').value;
localStorage.setItem('HorariosAbreFecha', Horarios);




}

const checkBox1 = document.getElementById( 'semana1')

const estadoInicial = localStorage.getItem('EstadoCheckBox')

if(estadoInicial == 'checked'){

     checkBox1.checked == true;
}
else
{

    checkBox1 == false
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


}


const focus3 = document.getElementById('horarios');

focus3.addEventListener('focus', Evento4);

function Evento4(event){

    this.style.outlineColor = "darkViolet";
    console.log("Belle Bellinha");
    console.log(event);


}

