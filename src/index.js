module.exports = function toReadable (number) {
    let array = [];
    const TwentyNumbers = [
          'zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine',
          'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
          ];
    const decades = ['', '', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
      let arr = String(number).split('');
  
      
      arr.length == 1 ? array.push(TwentyNumbers[+arr[0]]):
      arr.length == 2 && arr[0] == 1 ? array.push(TwentyNumbers[number]):
      arr.length == 2 ? array.push(decades[+arr[0]],TwentyNumbers[+arr[1]]):
      arr.length == 3 && arr[1] == 0 && arr[2] == 0 ? array.push(TwentyNumbers[+arr[0]],"hundred"):
      arr.length == 3 && arr[1] == 0 ? array.push(TwentyNumbers[+arr[0]],"hundred",TwentyNumbers[+arr[0]]):
      arr.length == 3 && arr[1] == 1 ? array.push(TwentyNumbers[+arr[0]],"hundred",TwentyNumbers[10 + +arr[2]]):
      arr.length == 3 ? array.push(TwentyNumbers[+arr[0]],"hundred",decades[+arr[1]],TwentyNumbers[+arr[2]]):'';
      return array.join(' ');
}
