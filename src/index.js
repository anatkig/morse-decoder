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
    let arr3=[];
for(let i=0;i<arr.length;i++){
      arr2.push([]);
    for(let y=0;y<arr[i].length;y++)
      
        if(y%2===0)
            arr2[i].push(arr[i].slice(y,y+2))
    }
     arr2.map(a=>a.filter(c=>{if(parseInt(c)===10)return "."; else if(parseInt(c)===11)return "-"; else return " "}).join(""));
    
    let temp=[];
    
        for(let i=0;i<arr2.length;i++){
    for(let y=0;y<arr2[i].length;y++)      
    if(y%10===0)
            temp.push(arr2[i].slice(y,y+10))
            
            
            temp.filter(a=>{if(MORSE_TABLE[a]) return MORSE_TABLE[a]});
            arr2[i]=temp.join("");
            temp.splice(0);
        }
    return arr2.join(" ");
}


module.exports = {
    decode
}
