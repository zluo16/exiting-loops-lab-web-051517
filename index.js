function breakOut(array, change, stop) {
  let i = 0;
  while (true) {
    if (array[i] === stop) {
      break;
    } else {
      array.splice(i, 1, change);
      i++
;    };
  };
  return array;
};

function keepGoing(array, change, skip) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skip) {
      continue;
    } else {
      array.splice(i, 1, change);
    };
  };
  return array;
};


function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    };
  };
};

// function findFn(val) {
//   val ===
// };


// let c = Math.floor(Math.random() * 100);
// let arr1 = [1, 1, 1, 1, c, 1, 2];
// console.log(findBy(arr1, c));
