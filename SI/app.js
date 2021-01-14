simple interst calculator

function calculate(){
    let p = parseInt( document.querySelector('#principalAmount').value)
let y = parseInt (document.querySelector('#timePeriod').value)
let r = parseFloat (document.querySelector('#interestRate').value)

let SI = p*r*y/100


document.querySelector('.interest').innerHTML += SI


}

document.querySelector('.btn').addEventListener('click', calculate)



