import math
# eccentricity
# for e we need fine fophi and distance of C
# for c we have, c2=a2 - b2. we call right of equestion

a_maj = 0.364
b_maj = 0.359
# first calc the square of a anb b
a_maj = pow(a_maj, 2)
b_maj = pow(b_maj, 2)

right_eq = a_maj - b_maj

c_sqrt = math.sqrt(right_eq)
print('c is: ', c_sqrt)
# and now we have c
# for e we have, e = c / a

ecc = c_sqrt / a_maj
print('e is: ', ecc)

