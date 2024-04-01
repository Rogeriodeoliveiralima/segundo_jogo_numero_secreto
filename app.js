function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    
    let numeroSorteados= [];
    let numero;



    for(let i = 1; i <= quantidade; i++){
       
        numero = obterNumeroAleatorio(de, ate);

        while(numeroSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        numeroSorteados.push(numero);
    }

    let resultados = document.getElementById('resultado');
    resultados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteados}</label>`
}


function obterNumeroAleatorio (min, max){

    return Math.floor(Math.random() * (max - min) + min);

}
