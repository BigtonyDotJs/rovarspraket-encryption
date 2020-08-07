const openMessage = "I can't concentrate now"; // Any string can be entered

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', ' ']; // array of lower/uppercase consonants and whitespace

const rovarspraketCodedMessage = message => {
  openMessageArr = message.split(''); // Splits string into an array with each character becoming one element
  encryArr = openMessageArr.map(letter => {
    if (letter !== ' ' && consonants.some(elem => elem === letter) === true) {
      return letter + 'o' + letter; // If letter is a consonant and is not a space then the Rovarspraket encyrption is applied 
    } else {
      return letter; // Else the letter is unchanged and returned to the encrypted array
    }
  });
  encryStr = encryArr.join(''); // Encrypted array is turned into string
  return encryStr // Rovarspraket encyrpted message is returned as the value of the function rovarspraketCodedMessage
}; 