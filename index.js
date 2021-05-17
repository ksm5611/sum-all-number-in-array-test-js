const sumItems = function(array) {
  // Sum all the numbers in the array
  let total = 0;
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement) => {
        array.unshift(newElement);
      });
    } else {
      // console.log(typeof element)
      total += element;
    }
  }
  return total;
};

console.log(sumItems([1, 2, 3, 4, 5])); //15
console.log(sumItems([[1, 2, [[3], 4]], 5, []])); //15
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]])); //1

module.exports = sumItems;