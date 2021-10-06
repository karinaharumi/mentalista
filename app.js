function chutar(){
    let numeroSecreto = parseInt (Math.random()*11);
    console.log(numeroSecreto)
    let chute = parseInt (document.querySelector("#valor").value)
    console.log(numeroSecreto, chute)}
    if(nemeroSecreto==chute){
        document.querySelector(".resultado").innerHTML = "voce acertou"
    }

else{
    document.querySelector(".resultado").innerHTML = "voce errou, tente novamente"
}