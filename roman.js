function convertToRoman(num) {
    const arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   
    const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   
    let res = '';
    for (let i = 0; i < romanNum.length; i++)
    {
       while (num >= arabicNum[i])
       {
         res += romanNum[i];
         num -= arabicNum[i];
       }
    }
    return res;
   }
   
   
   console.log(convertToRoman(3600));