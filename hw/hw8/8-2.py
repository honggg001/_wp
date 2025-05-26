def average(num):
    a=0
    for i in num:
        a=a+i
    avg=a/len(num)
    return round(avg,1)
print(average([5,7,6,4,4,5]))    