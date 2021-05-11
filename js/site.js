
let numbers = [10, 15, 3, 7];
let result = checkSum(numbers, 17);
console.log(result);

function checkSum(nums, k){
    for (let i = 0; i < nums.length; i++) {
        if (addSum(nums, nums[i], k)){
            return true;
        }
    }
}

function addSum(nums, num, k){
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] + num == k){
            console.log(`${nums[i]} + ${num} == ${k}`);
            return true;
        }
    }
}