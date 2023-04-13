import math
# we have the formola, diameter = distance * angular diameter(in radian)
# first change deggres to radian.
# for radian we have, rad = degree * pi/180
# we have AG from table and e-v distance from pre problesm
# then we calculate radius.

angDia = [12, 12, 13, 14, 14, 15, 16, 19, 21, 25, 32, 37, 44]
distance = [0.278, 0.271, 0.268, 0.265, 0.262, 0.261, 0.261, 0.261, 0.262, 0.265, 0.268, 0.269, 0.269]
radiusAns = []

radList = []
for i in range(len(angDia)):
    rad = angDia[i] * (math.pi/180)
    radList.append(rad)
print(radList)

for i in range(len(distance)):
    diameter = distance[i] * radList[i]
    diameter = diameter / 2
    radiusAns.append(diameter)
print(radiusAns)
