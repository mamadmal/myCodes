import math
# as we have in formula: rv = re(sin(sev)/sin(sve))
# so we have deggre of sve from problem 1
# and we have sve in table
# the program formula is: rv = re(cos(sve)/sin(sve))
SEVli = [27.56, 32.29, 34.53, 36.69, 38.71, 40.62, 42.38, 45.29, 46.32, 47.09, 44.79, 41.59, 36.16]
SVElist = [39.825, 47.156, 50.802, 54.549, 58.264, 62.095, 66.171, 74.811, 79.630, 90.573, 104.833, 114.080, 125.591]

sinSEV = []
sinSVE = []
re = [1.0043, 0.9986, 0.9957, 0.9931, 0.9905, 0.9883, 0.9864, 0.9839, 0.9834, 0.9838, 0.9863, 0.9881, 0.9904]
rvANSW = []
# first we get sin and cos


for i in range(len(SEVli)):
    x = math.sin(SEVli[i])
    sinSEV.append(x)
print('the sinus of SEV are: ', len(sinSEV))

for i in range(len(SVElist)):
    x = math.sin(SVElist[i])
    sinSVE.append(x)
print('the sinus of angle SVE are: ', len(sinSVE))


for i in range(len(re)):
    rv = re[i] * (sinSEV[i]/sinSVE[i])
    rv = abs(rv)
    rvANSW.append(rv)
print(rvANSW)
