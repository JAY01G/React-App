// function reverse(arr, n, i) {
//   //   console.log(arr[i]);
//   if (i > n - 1) {
//     return arr;
//   }
//   let temp = arr[i];
//   arr[i] = arr[n - i - 1];
//   arr[n - i - 1] = temp;
//   return reverse(arr, n, i + 1);
// }
// console.log(reverse([1, 2, 3, 4], 4, 0));
// function sort(arr, n) {
//   if (n == 0 || n == 1) {
//     return arr;
//   }
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return sort(arr, n - 1);
// }
// console.log(sort([8, 7, 6, 5, 4, 3, 2, 1], 8));
function merge(arr, l, m, r, count) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      count++;
      i++;
    } else {
      arr[k] = R[j];
      count++;
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r, count) {
  if (l >= r) {
    return count; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r, count);
}
// function printArray(A, size) {
//   for (var i = 0; i < size; i++) console.log(A[i]);
// }
// var arr = [12, 11, 13, 5, 6, 7];
// var arr_size = arr.length;
// mergeSort(arr, 0, arr_size - 1);
// printArray(arr, arr_size);

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1], 0, 7, 0));

// function mergeSort(arr, s, e) {2
//   if (s >= e) {
//     return arr;
//   }
//   let mid = s + Math.floor((e - s) / 2);

//   mergeSort(arr, s, mid);
//   mergeSort(arr, mid + 1, e);
//   merge(arr, s, e);
// }
