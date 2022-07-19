let hora = 0
let min = 0
let seg = 0
let interval

function zeroZero(num) {
    if(num < 10) {
        return('0' + num)
    }else {
        return(num)
    }
}

function start() {
    contar()
    interval = setInterval(contar,1000)   
}

function pausar() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)  
    seg = 0
    min = 0
    hora = 0
    document.getElementById("tempo").innerText='00:00:00'
}

function contar() {
    seg++
    if(seg == 60) {
        min++
        seg = 0
        if(min == 60) {
            hora++
            min = 0
        }
    }
    
    document.getElementById("tempo").innerText=zeroZero(hora)+':'+zeroZero(min)+':'+zeroZero(seg);
}
