const randomNumber = () =>{
    return Math.floor((Math.random()*26) + 65);
}
const generateCode = () =>{
    let array = [];

    for (let i = 0; i <6 ;i++){
        array.push(randomNumber());
    }
    return array.map((value)=> String.fromCharCode(value)).join('')
    
    
}

module.exports = generateCode;