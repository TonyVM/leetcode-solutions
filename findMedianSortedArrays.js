/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const comb = [...nums1, ...nums2].sort((a, b) => a - b);
    const med = parseInt(comb.length / 2)
    if (comb.length % 2 === 0) {
      return parseFloat((comb[med] + comb[med - 1]) / 2).toFixed(5)
    }
    return parseFloat(comb[med]).toFixed(5)
};

console.log(findMedianSortedArrays([1, 3], [2,4])); // 2