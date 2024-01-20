function isPalindrome(word) {
  if([...word].toString().toLowerCase() === 
  [...word].reverse().toString().toLowerCase())
    return true
  return false
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
