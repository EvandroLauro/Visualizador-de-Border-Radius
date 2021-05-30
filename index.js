function limparInputAoClicar() {                                  
    let obj = document.getElementById("valor");            
    obj.addEventListener("click", function(event){  
        obj.value = "";                           
    });                                
}

function trocaValorBorderRadius() {
    let obj = document;
    let radio = obj.getElementsByName("border");
    let valor = obj.getElementById("valor").value;

    if (Number.isInteger(parseInt(valor)) == true) {
        let array = []
        for (i = 0; i < radio.length; i++) { 
            if (radio[i].checked == true) {
                eval(radio[i].value + "'" + valor + 'px' + "'");
                exibindoValorBorderRadius()
            } else {
                array.push(radio[i])
                if (array.length == 4) {
                    alert("Escolha uma  borda")
                }
            }
        }
    } else if (valor == "") {
        alert("Não pode ser vazio, digita um numero")
    } else {
        alert("Digita um numero no input")
    }
}

function exibindoValorBorderRadius() {
    let css = document.querySelector("#figura");
    let compStyles = window.getComputedStyle(css);
    let bordas = ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius","border-bottom-left-radius"];
    let text = "";
    for (let i = 0; i < compStyles.length; i++) {
        if(bordas.indexOf(compStyles[i]) >= 0) {
            text += compStyles[i] + " = " + compStyles.getPropertyValue(compStyles[i]) + "<br>";
        }
    }
    document.getElementById("exibe").innerHTML = text;
}

window.addEventListener("load", limparInputAoClicar)
window.addEventListener("load", exibindoValorBorderRadius);

