numLis = {
    'I': 1,
    'II':2,
    'III':3,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
}

list = list(numLis.items())
print(list)

inputValid = input('enter the vallid: ')
#inputValid = 'LIII'
inputValid = [*inputValid]
print(inputValid)


def call(x):
    for i in range(len(list)):
        if i == list[i][0]:
            print(list[i][1])
        ++i

for x in inputValid:
    call(x)
    print(numLis[x])

# i just have to work on 40 and 90. and 20

