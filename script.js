const botao = document.querySelectorAll("[data-controle]");

const reserva ={
    valorPorPessoa:50,
    valorPorNoite:100
}

botao.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode);
        
        valorPorNoite(evento.target.dataset.valor,evento.target.dataset.controle);
        valorPorPessoa(evento.target.dataset.valor,evento.target.dataset.controle);       
       
    });
})


function manipulaDados(operacao, controle){
    const resultado = controle.querySelector("[data-contador]");
    if(operacao == "-"){
        resultado.value=parseInt(resultado.value)- 1;
    }else{
        resultado.value=parseInt(resultado.value)+ 1;
    }
}

function valorPorNoite(propriedade,operacao){

    
    const valorEstimadoPornoite=document.querySelector("[data-totalPornoite]");

    if(operacao == "-" && propriedade =="valorPorNoite"){
        valorEstimadoPornoite.innerHTML= parseInt(valorEstimadoPornoite.innerHTML)-reserva[propriedade];
    }else if(operacao == "+" && propriedade =="valorPorNoite"){
        valorEstimadoPornoite.innerHTML= parseInt(valorEstimadoPornoite.innerHTML)+reserva[propriedade];
    }else if(operacao == "-" && propriedade =="valorPorPessoa"){
        valorEstimadoPornoite.innerHTML = parseInt(valorEstimadoPornoite.innerHTML)-reserva[propriedade];
    }else{
        valorEstimadoPornoite.innerHTML= parseInt(valorEstimadoPornoite.innerHTML)+reserva[propriedade];
    }
   

}
