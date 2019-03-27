/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i);
    }
}
function newFilter(coll, predicate) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function (value, key) {
        if (predicate(value, key)) {
            if (Array.isArray(coll)) {
                acc.push(value);
                acc.push(coll[key+1]);
            } else {
                acc[key] = value;
            }
        }
    });
    return acc;
};
//////////////using eash
function twoSum(numbers, target) {
    var arr = [];
    each(numbers, function (element, i) {
        if (element +numbers[i + 1] === target) {
            arr.push(element);
            arr.push(numbers[i + 1])
        }
    })
    return arr;

}
//////////////using improved filter
function twoSum2(numbers, target) {

    return newFilter(numbers, function (element, i) {
       return element + numbers[i + 1] === target;


    })
   

}