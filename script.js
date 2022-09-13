function tabuada(){
    let num = document.querySelector('input#numtab')
    let tab = document.querySelector('select#seltab')
    if (num.value == 0){
        window.alert('Digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
    
      for(n; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
    /*while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } opção para fazer com while */