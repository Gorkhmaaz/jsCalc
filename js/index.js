const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')

let action = '+'


plus.onclick = function (){
    action = '+'

}
minus.onclick = function (){
    action = '-'
    
}

multiply.onclick = function(){
    action = '*'
}
divide.onclick = function(){
    action = '/'
}


submitBtn.onclick = function () {

    if(action == '*'){
     const sum = Number(input1.value) * Number(input2.value)
        resultElement.textContent = sum
    }
    if(action == '/'){
        const sum = Number(input1.value) / Number(input2.value)
        resultElement.textContent = sum
    }

    if(action == '+'){
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    }
    if(action == '-'){
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    }
}




