function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars=lowercaseChars.toUpperCase();
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*_+-=";
    let allowedChars="";
    let password="";
    allowedChars+=includeLowercase ? lowercaseChars : "";
    allowedChars+=includeUppercase ? uppercaseChars:"";
    allowedChars+=includeNumbers ? numberChars:"";
    allowedChars+=includeSymbols ? symbolChars:"";
    if(length<=0){
      return "password at least 1"; 
    }
    if(length<=0){
        return "password at least 1"; 
      }
      for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
      }

    return password;
}
const passwordLength=12;
const incLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;
password=generatePassword(passwordLength,incLowercase,includeUppercase,includeNumbers,includeSymbols)
console.log(password);