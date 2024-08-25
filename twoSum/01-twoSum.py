nums = [3,2,4]
target = 6

# result = []
# for i in range(len(nums)):
#     print(f'valor de i: {i}')
#     for j in range(i+1, len(nums)):
#         if nums[i] + nums[j] == target:
#             print(i, j)
#             result.append([i, j])

# print(result)

num_to_index = {}
for i, num in enumerate(nums):
    # print(f'valor {num} indice {i}')
    complement = target - num
    if complement in num_to_index:
        print(f'indice {i} e {num_to_index[complement]}')
        print (num_to_index[complement], i)
    num_to_index[num] = i
print(num_to_index)

dicc = {}
for i, el in enumerate(nums):
    complement = target - el
    if complement in dicc:
        print( [nums.index(complement), i])
    dicc[el] = i
