module.exports = function longestConsecutiveLength(array) {

  if (array.length==0) {
    return 0;
  } else {
    let maxLength=1;
    let CurrentLength=1;
    const myArray=array;

    myArray.sort((a,b) => (a-b));

    function countSequence(v,i,a) {
      if (v==(a[i+1]-1)) {
        CurrentLength++;  
        return maxLength=(maxLength>CurrentLength) ? maxLength : CurrentLength;
      }
      if (v!=(a[i+1]-1)) {
        return CurrentLength=1; 
      }
    }
    myArray.forEach(countSequence);  
    return maxLength;
  } 
}
