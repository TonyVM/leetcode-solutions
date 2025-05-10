from typing import List

def largest_container(heights: List[int]) -> int:
    # Write your code here
    left = 0
    right = len(heights) - 1
    maxA = 0

    while left < right:
        w = min(heights[left], heights[right]) * (right - left)
        maxA = max(w, maxA)
        print(f'left: {left},heights[left]: {heights[left]}, (heights[right] * (right - left): {heights[right] * (right - left)}, right: {right}, maxA: {maxA}, min=w: {w}')
        if heights[left] < heights[right]:
            left = left + 1
        else:
            right = right - 1
        print('===============')
    return maxA



    # left = 0
    # right = len(height) - 1
    # maxA = 0

    # while left < right:
    #     w = min(height[left], height[right]) * (right - left)
    #     maxA = max(w, maxA)

    #     if height[left] < height[right]:
    #         left += 1
    #     else:
    #         right -= 1

    # return maxA
print(largest_container([2,7,8,3,7,6])) # 49