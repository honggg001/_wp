def find_max(num):
    max_num=num[0]
    for i in num[1:]:
        if i>max_num:
            max_num=i
    return max_num
print(find_max([3, 27, 5, 15, 14]))   