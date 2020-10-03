const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':       '',
};

function decode(expr) {
let arr=[];
    for(let i=0;i<expr.length;i++){
        if(i%10===0){

arr.push(expr.slice(i,i+10))
           
                 if(arr[i]==="**********")arr[i]=" ";
        else {
           
                 let temp=[];
            if(arr[i])
                 for(let y=0;y<arr[i].length;y++){
                     let sign="";
                     
           if(y%2===0) arr[i].slice(y,y+2)==="10"?sign=".":arr[i].slice(y,y+2)==="11"?sign="-":sign="";
        temp.push(sign);

 
    }//for y
            
            arr[i]=temp.join("");
            throw Error(arr[i])
           
        }//else
        }//if
  }//for i
    
    arr.map(a=>{return MORSE_TABLE[a]})
    return arr.join("").split(" ").join(" ");
}


module.exports = {
    decode
}
