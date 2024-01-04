function contar(){
    let fini = document.getElementById('txtini')
    let ff = document.getElementById('txtf')
    let fp = document.getElementById('txtp')
    let res = document.querySelector('div#res')

if (fini.value.length == 0 || ff.value.length == 0 || fp.value.length == 0) {
    res.innerHTML = 'Impossível contar!!!'
    window.alert ('[ERRO] Verifique os dados e tente novamente')
} else {
        res.innerHTML = 'Resultado: <br>'
        let i = Number(fini.value)
        let f = Number(ff.value)
        let p = Number(fp.value)
        if( p <= 0){
            window.alert('Passo inválido! Considerando Passo como 1.') 
            p = 1
        }
        if( i <f){
            // Contagem crescente
            for(let cont = i; cont <= f; cont = cont + p){
                res.innerHTML += ` ${cont} \u{1F47E}`
            }
        
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${cont} \u{1F47E}`
            }
        }
        res.innerHTML += `\u{1F389}`
    }
}