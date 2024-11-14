/** @format */

let nums = [1, 2, 3, 4];
let finalval = nums.reduce((res, el) => {
  //first result value is 0 bydefault & el =1 then add this value
  console.log(res);
  return res + el;
});
console.log(finalval);
