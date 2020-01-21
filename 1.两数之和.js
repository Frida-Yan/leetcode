/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        num = nums[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target - num] = i
        }
    }
};
// @lc code=end