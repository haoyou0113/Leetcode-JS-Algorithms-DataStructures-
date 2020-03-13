// export default str => {
//   // Divide the string with Spaces and save the array. The order of the elements of the array is the order of the words
//   let arr = str.split(' ');
//   let result = arr.map(item => {
//     // Iterate over groups and invert each array
//     return item
//       .split('')
//       .reverse()
//       .join('');
//   });
//   return result.join(' ');
// };

export default str => {
  return str
    .match(/[\w']+/g)
    .map(item => {
      return item
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
};
