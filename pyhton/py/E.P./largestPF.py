import math

pri_list = []


class PrimeF:

    def __init__(self, num):
        self.num = num

    def prime_factors(self):
        while self.num % 2 == 0:
            print(2, )
            self.num = self.num / 2
            pri_list.append(2)
        # i don't undrerstand loop below so I copied from https://www.javatpoint.com/python-program-to-print-prime-factor-of-given-number#:~:text=The%20prime_factor()%20function%20is,square%20root%20of%20n%20times.
        for i in range(3, int(math.sqrt(self.num)) + 1, 2):
            while self.num % i == 0:
                print(i, )
                self.num = self.num / i
                pri_list.append(i)
        if self.num > 2:
            print(self.num)


result = PrimeF(int(input("enter the valid number: ")))  #in this case we should use 600851475143
result.prime_factors()

print(pri_list)
print('largest prime factor is: ', max(pri_list))
