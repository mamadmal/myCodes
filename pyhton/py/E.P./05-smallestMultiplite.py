import math

List = []
for i in range(21):
    ++i
    List.append(i)
List.remove(0)
dicti_numer = dict(list)
print(dicti_numer)

x = 1
for i in range(len(List)):
    x = x * List[i]
    print(x)
lastOne = x
print(lastOne)
#biggest multi

#get the prime faacor
wan_primeF = []
def prime_factors(num):
    while num % 2 == 0:
        print(2, )
        num = num / 2
        wan_primeF.append(2)

    for i in range(3, int(math.sqrt(num)) + 1, 2):
        while num % i == 0:
            print(i, )
            num = num / i
            wan_primeF.append(i)
    if num > 2:
        print(num)
    return num
print(wan_primeF)

total_prime_factor = {}
for i in range(List):
    num = i
    prime_factors(num)
    total_prime_factor.append(i)
    ++i

print(total_prime_factor)


#so we have
