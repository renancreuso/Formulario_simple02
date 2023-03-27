const botao = document.querySelectorAll("[data-controle]");

botao.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode);
             
        
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

