/*Script functions */
function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número! ') 
    }else{
        let n = Number(num.value)   
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = ` ${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}