function validar() {
    var n1 = Number(document.getElementById("txtn1").value);
    var n2 = Number(document.getElementById("txtn2").value);
    var conta = document.getElementsByName("botao")
    var rest = document.getElementById("res")

    if (conta[0].checked) {
        var s = n1 + n2
        rest.innerHTML = `<p>A conta selecionada foi <strong>SOMA</strong></p>`
        rest.innerHTML += `<p>${n1} + ${n2} = ${s}</p>`
    } else if (conta[1].checked) {
        var sb = n1 - n2
        rest.innerHTML = `<p>A conta selecionada foi <strong>SUBTRAÇÃO</strong></p>`
        rest.innerHTML += `<p>${n1} - ${n2} = ${sb}</p>`
    } else if (conta[2].checked) {
        var mt = n1 * n2
        rest.innerHTML = `<p>A conta selecionada foi <strong>MULTIPLICAÇÃO</strong></p>`
        rest.innerHTML += `<p>${n1} x ${n2} = ${mt}</p>`
    } else if (conta[3].checked) {
        var ds = n1 / n2
        rest.innerHTML = `<p>A conta selecionada foi <strong>DIVISÃO</strong></p>`
        rest.innerHTML += `<p>${n1} ÷ ${n2} = ${ds.toFixed(2)}</p>`
    } else {
        innerHTML = `[ERRO] Verifique os seus dados`
    }
}

function limpar() {
    document.getElementById("txtn1").value = "";
    document.getElementById("txtn2").value = "";
    document.getElementById("res").innerHTML = "Preencha os dados acima"
}