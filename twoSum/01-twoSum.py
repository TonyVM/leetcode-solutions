nums = [1,3,5,2,1,6,8]
target = 7

num_to_index = {}
print(nums)
for i, num in enumerate(nums):
    # print(f'valor {num} indice {i}')
    print(f'iteracion {i}')
    complement = target - num
    if complement in num_to_index:
        print(f'indices {i} y {num_to_index[complement]}')
        print (num_to_index[complement], i)
    num_to_index[num] = i
print(num_to_index)
