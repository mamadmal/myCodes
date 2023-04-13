# we want distance bewteen earth and venus
# we have re from table
# and we just get rv from prob3
# so we have Dis(earth-venus)= re - rv

re = [1.0043, 0.9986, 0.9957, 0.9931, 0.9905, 0.9883, 0.9864, 0.9839, 0.9834, 0.9838, 0.9863, 0.9881, 0.9904]
rv = [0.726, 0.728, 0.728, 0.728, 0.728, 0.727, 0.725, 0.723, 0.721, 0.719, 0.718, 0.719, 0.721]
answList = []

for i in range(len(re)):
    x = re[i] - rv[i]
    print(x)
    answList.append(x)
print("the distance bewteen earth and venus is: ", answList)
