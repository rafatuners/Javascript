function contar() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('resultado') 

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[Erro] Faltam dados!')            
    
    } else {        

        res.innerHTML = 'Contando: '
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }
        
        if (inicio < fim){
            for (var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449} `
            }  
            
        } else {
            for (var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1f449} `
            }
            
        }
        res.innerHTML += `\u{1f3c1}`
        
        
    }
        

    
}
