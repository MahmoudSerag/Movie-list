// Problem 1
// const removeDuplicates = (nums) => {

//     // Solution 1
//     const myArray = new Set(nums);
//     nums = [...myArray];
//     return nums;


//     // Solution 2
//     let duplicatedValueStatus = {};
//     let filteredArray = [];
//     nums.forEach(el => {
//         if (!duplicatedValueStatus[el]) {
//             duplicatedValueStatus[el] = true;
//             filteredArray.push(el);
//         }
//     });
//     nums = filteredArray;
//     return nums;
// };
// console.log(removeDuplicates([1, 1, 2]));




// Problem 2
//  const plusOne = (digits) => {
//     const stringToInt = Number(digits.join(''));
//     const sum = stringToInt + 1;
//     digits = [];
//     for (let i = 0; i < sum.toString().length; i++) {
//         digits.push(sum.toString()[i]);
//     }
//     return digits;
// };
// console.log(plusOne([6, 1, 4]));




// Problem 3
// const searchInsert = (nums, target) => {
//     let ifExist = false;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             ifExist = true;
//             console.log(nums);
//             return i;
//         }
//     }
//     if (!ifExist) {
//         for (let i = 0; i < nums.length; i++) {
//             if (target === 0) {
//                 nums.unshift(target);
//                 console.log(nums);
//                 return i;
//             } else if (target > nums[nums.length - 1]) {
//                 nums.push(target);
//                 console.log(nums);
//                 return nums.length - 1;
//             }
//             else {
//                 if (target < nums[i]) {
//                     nums.splice(i, 0, target);
//                     console.log(nums);
//                     return i;
//                 }
//             }
//         }
//     }
// }
// console.log(searchInsert([1, 3, 5, 6], 7));