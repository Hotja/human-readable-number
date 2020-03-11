module.exports = function toReadable (number) {
    
    let arr1 = ["","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let arr10 = ["","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let str;
    let arrnumber = number.toString().split("").reverse();
  
    if (number == 0) {
        str = "zero";
    } else {
        if (arrnumber.length < 3) {
          if(number<20) {
              str = arr1[number];
          } 
          else {
              str = arr10[Math.floor(number/10) -1 ] + " " + arr1[arrnumber[0]];
          };
          } 
          
        else {
          if(arrnumber[1]<2) {
              str = arr1[(Math.floor(number / 100))] + " hundred " + arr1[number-Math.floor(number/100)*100];
          } else {
              str = arr1[(Math.floor(number / 100))] + " hundred " + arr10[Math.floor((number - Math.floor(number/100)*100)/10)-1] + " " + arr1[arrnumber[0]];
          }
          }
    }
    return str.trim()
}
