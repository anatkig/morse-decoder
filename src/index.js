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
      
        if(y%10===0)
            arr2[i].push(arr[i].slice(y,y+10))
    }
  
    for(let x=0;x<arr2.length;x++){
        let   temp=[];
        for(let z=0;z<arr2[x].length;z++)
            for(let u=0;u<arr2[x][z].length;u++){
            if(u%2===0){if(parseInt(arr2[x][z].slice(u,u+2))===10) temp.push(".");
                        else if(arr2[x][z].slice(u,u+2)===11) temp.push("-");
   
                       }
                arr2[x][z]=temp.join("");
                temp.splice(0);
            }
    }
    
    for(let i=0;i<arr2.length;i++){
    for(let y=0;y<arr2[i].length;y++)
        if(MORSE_TABLE[arr2[i][y]])arr2[i][y]=MORSE_TABLE[arr2[i][y]];
                                                          
                                                          arr2[i].join("")
                                                          }
    return arr2.join(" ");
}


module.exports = {
    decode
}
