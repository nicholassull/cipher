const sentance = prompt("Enter a sentance:");
console.log(sentance)

function firstAndLast(sentance) {
  const first = sentance.charAt(0).toUpperCase();
  const last = sentance.charAt(sentance.length -1).toUpperCase();
//  const middle = sentance.slice(1, sentance.length-1);
  return first + last;
}

function lastAndFirst(sentance) {
  const first = sentance.charAt(0).toUpperCase();
  const last = sentance.charAt(sentance.length-1).toUpperCase();
 // const middle = sentance.slice(1, sentance.length-1);
  return last + first;
}

function combined (sentance) {
  let twoLetters = firstAndLast(sentance);
  twoLetters = lastAndFirst(twoLetters);
  return sentance + twoLetters;
}

function seekHalf (sentance) {
  const varCombined = combined(sentance);
  const half = Math.floor(varCombined.length / 2);
  return varCombined[half] + varCombined;
}

//alert(firstAndLast(sentance));
//alert(lastAndFirst(sentance));
//alert(combined(sentance));
alert(seekHalf(sentance));

jQuery("h2").click(function() {
  alert(sentance);
});

jQuery("p").click(function(){
  alert(seekHalf(sentance));
});