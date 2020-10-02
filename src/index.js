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
};

function decode(expr) {
   let arr=expr.split("**********");
    let arr2=[];
for(let i=0;i<arr.length;i++){
      arr2.push([]);
    for(let y=0;y<arr[i].length;y++)
      
        if(y%2===0)
            arr2[i].push(arr[i].slice(y,y+2))
    }
     arr2.map(a=>a.filter(c=>{if(parseInt(c)===10)return "."; else if(parseInt(c)===11)return "-"}));
              console.log(arr2)
}

module.exports = {
    decode
}
