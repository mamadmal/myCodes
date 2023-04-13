# avarage of venus radius

radiusVe = [0.058224183846530844, 0.056758107274855606, 0.06080727113948245, 0.06475171524898964, 0.06401867696315201, 0.068329640215578, 0.0728849495632832, 0.0865508776063988, 0.09602801544472801, 0.11562806294462434, 0.1496794366510337, 0.17371262045099564, 0.20657717026604885]
sumavg = 0
for i in range(len(radiusVe)):
    avg = 0
    avg = avg + radiusVe[i]
    i = i + 1
    if i == 13:
        print(avg)
        sumavg = avg
print(sumavg)

total = len(radiusVe)

avaregefinal = sumavg / total

print('the avarage is: ', avaregefinal)
