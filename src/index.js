module.exports = function toReadable (number) {
    const mas = [
        ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], 
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
        ['','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ]
    let string = number.toString(), strNumber = '';
  if (number === 0) {
    return 'zero'
  } else if (string.length == 1) {
    return mas[0][number - 1];
  } else if (string.length == 2) {
        if (string[0] == 1) {
            strNumber = mas[1][parseInt(string[1])];
        }   else strNumber = (mas[2][parseInt(string[0])-1] + ((string[1]!='0')?(' ' + mas[0][parseInt(string[1])-1]):''));
  } else if (string.length == 3 && string[1] == '1' && string[2] == '0') {
    strNumber = ((mas[0][parseInt(string[0])-1]) + ` hundred ten`)
  } else if (string.length == 3 && string[1] == '1') {
    strNumber = ((mas[0][parseInt(string[0])-1]) + ` hundred` + ((string[1]!='0')?(' ' + mas[2][parseInt(string[1])-1]):'') + ((string[2]!='0')?('' + mas[1][parseInt(string[2])]):''));
  } else if (string.length == 3) {
    strNumber = ((mas[0][parseInt(string[0])-1]) + ` hundred` + ((string[1]!='0')?(' ' + mas[2][parseInt(string[1])-1]):'') + ((string[2]!='0')?(' ' + mas[0][parseInt(string[2])-1]):''));
  }
  return strNumber;  
}