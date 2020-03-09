class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
  
    encrypt(message, key) {
        if ( message === 'undefined' ||  key === 'undefined') {
            throw new Error();
            }
  
            let encryptChar = '';
            
            message = message.toUpperCase();
            key = key.toUpperCase();
            
            for ( let i = 0, j = 0; i < message.length; i++, j++) {
                if ( j === key.length) { j = 0; }
                if ( message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90 ) {
                    encryptChar += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j)) % 26 + 65);
                   
                } else { 
                  encryptChar += message[i];
                  j--;
                }  
            }
  
            let encryptCharReverse = encryptChar.split('').reverse().join('');
            return this.direct ? encryptChar : encryptCharReverse;
    }
  
  
  decrypt(encryptMessage, key) {
    if( encryptMessage == 'undefined' ||  key == 'undefined') {
        throw new Error();
    }
  
    var decryptStr = '';
        
    encryptMessage = encryptMessage.toUpperCase();
    key = key.toUpperCase();
    
    for ( let i = 0, j = 0; i < encryptMessage.length; i++, j++) {
        if ( j == key.length) { j = 0; }
        if ( encryptMessage.charCodeAt(i) >= 65 && encryptMessage.charCodeAt(i) <= 90 && key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90 ) {
            decryptStr += String.fromCharCode((encryptMessage.charCodeAt(i) - key.charCodeAt(j) + 26) % 26 + 65);
        } else { 
            decryptStr += encryptMessage[i];
          j--;
        }  
    }
  
    let decryptStrReverse = decryptStr.split('').reverse().join('');
    return this.direct ? decryptStr : decryptStrReverse;
  }
  }
  

module.exports = VigenereCipheringMachine;
