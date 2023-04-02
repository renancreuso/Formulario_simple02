const botao = document.querySelectorAll("[data-controle]");

const reserva ={
    valorPorPessoa:50,
    valorPorNoite:100
}

botao.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode);
        
        calculaValorEstimado(evento.target.dataset.valor,evento.target.dataset.controle);       
       
    });
})


function manipulaDados(operacao, controle){
    const resultado = controle.querySelector("[data-contador]");
    if(operacao == "-"){
        if(resultado.value>0){
            resultado.value=parseInt(resultado.value)- 1;
        }
        
    }else{
        if(resultado.value>=0){
            resultado.value=parseInt(resultado.value)+ 1;    
        }
        
    }
}

function calculaValorEstimado(propriedade,operacao){

    
    const valorEstimado=document.querySelector("[data-totalPornoite]");

    if(operacao == "-" && propriedade =="valorPorNoite"){
        if(valorEstimado.textContent>0){
            valorEstimado.innerHTML= parseInt(valorEstimado.innerHTML)-reserva[propriedade];
        }
        
    }else if(operacao == "+" && propriedade =="valorPorNoite"){
        if(valorEstimado.textContent>=0){
            valorEstimado.innerHTML= parseInt(valorEstimado.innerHTML)+reserva[propriedade];
        }
        
    }else if(operacao == "-" && propriedade =="valorPorPessoa"){
        if(valorEstimado.textContent>0){
            valorEstimado.innerHTML = parseInt(valorEstimado.innerHTML)-reserva[propriedade];    
        }
        
    }else{
        if(valorEstimado.textContent>=0){
            valorEstimado.innerHTML= parseInt(valorEstimado.innerHTML)+reserva[propriedade];
        }
        
    }
   

}
