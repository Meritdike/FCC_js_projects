function palindrome(str) {
    let alphaNum = /[\W_+]/g;
    let nonAlphaNum = str.replace(alphaNum, '').toUpperCase();
    
    let reserved = nonAlphaNum.split('').reverse().join('');
    
    if (reserved == nonAlphaNum)
    {
      return true;
    }
    else
    {
      return false
    }
}
console.log(palindrome("_eye!!!"));