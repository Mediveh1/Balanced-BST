function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  //left array
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(mergeSort(left), mergeSort(right));
}
function merge(leftArray, rightArray) {
  const tempArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      tempArray.push(leftArray.shift());
    } else {
      tempArray.push(rightArray.shift());
    }
  }
  return tempArray.concat(leftArray, rightArray);
}
export default mergeSort;
