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
    let arr2=[];
    for(let i=0;i<expr.length;i++){
        if(i%10===0){
arr.push(expr.slice(i,i+10))
        }
    }//for       
    //throw Error(arr)
     for(let i=0;i<arr.length;i++){
         for(let y=0;y<arr[i].length;y++)
             if(i%2===0){
arr2.push(arr[i].slice(y,y+2))
             }//if
         arr[i]=arr2.map(a=>{a==="10"?".":a==="11"?"-":" "})
     }//for
    return arr.join("").split(" ").join(" ");
}


module.exports = {
    decode
}
