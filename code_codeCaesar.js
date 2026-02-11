const stringToEncrypt = 'Hello world!';
let key = 5
function caesarCode (text, key){

    const alphabet = [
  'A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h',
  'I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p',
  'Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x',
  'Y','y','Z','z',''
];

let result = ' '
console.log(alphabet.length)
for (let i = 0; i < text.length; i++){
    const newIndex =(alphabet.indexOf(text[i])+ key) % alphabet.length;
    result += alphabet[newIndex]  
}


    return result 


}
const cipher = caesarCode(stringToEncrypt, key);
console.log (cipher); 
