function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número válido!')
    } else {
        var num = Number(num.value)
        
        cont = 1
        tab.innerHTML = ''
        while (cont <= 10){
            let item = document.createElement('option')
            item.value = `tab ${cont}`
            item.text = `${num} x ${cont} = ${num * cont}`
            tab.appendChild(item)            
            cont ++
        }

       

        
    }
    

    
}