function inserir(caracter) {    //coloca o valor de cada botão selecionado em uma string
    document.form.visor.value = document.form.visor.value + caracter;
}
function igual(){
    expressao = document.form.visor.value;
    
    if(expressao)
    {
        document.form.visor.value = eval(expressao); //eval() -- avalia a expressão aritmetica da string
        document.form.visorconta.value = expressao + ' =';
    }
}
function limpar(){
    document.form.visor.value = "";
    document.form.visorconta.value = "";
}
function voltar(){
    var expressao = document.form.visor.value;
    document.form.visor.value = expressao.substring(0, expressao.length-1);
}



