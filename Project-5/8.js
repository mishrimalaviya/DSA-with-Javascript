// Q8: Check Palindrome

var str = 'A man, a plan, a canal: Panama';
var st = "";
var stack = [];

function pali() {
    
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); 
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            stack.push(char); 
        }
    }

    
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); 
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            if (char !== stack.pop()) {
                return false; 
            }
        }
    }

    return true; 
}

console.log(pali()); 
