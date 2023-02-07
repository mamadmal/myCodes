class Name:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get(self):
        print('is name', format(self.name))


muhammad = Name('muhammad', 23)
muhammad.get()

list = []
for i in range(21):
    list.append(i)
    ++i

list = (list)

print(list)
a = (2,2,2,4,5)
d = (2,2,2,4,5)
b = (2,2,4,6)
c = {a,b,d}
print(c)