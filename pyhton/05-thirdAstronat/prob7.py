# in this we want SVE angle.
# we have SVE and SEV angle from table and first problem.
# we need just do some math.
# VSE = 180 - (angle1 + angle 2)

SVE1 = [39.82, 47.16, 50.80, 54.55, 58.26, 62.09, 66.17, 74.81, 79.63, 90.57, 104.83, 114.07, 125.59]
#1 means from problem one

SEVT = [27.56, 32.29, 34.53, 36.69, 38.71, 40.62, 42.38, 45.29, 46.32, 47.09, 44.79, 41.59, 36.16]
#T means from table

ansList = []
for i in range(len(SEVT)):
    x = 180 - (SVE1[i] + SEVT[i])
    ansList.append(x)

print(ansList)

