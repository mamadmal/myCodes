import math
# cos x/2 = radi(x)
# cos x/2 = x
# x = 2 arcCos(x) to radian
# change it to degree


phaseList = [0.884, 0.840, 0.816, 0.790, 0.763, 0.734, 0.702, 0.631, 0.590, 0.495, 0.372, 0.296, 0.209]
anwser = []

def SVE():
    for i in range(len(phaseList)):
        x = phaseList[i]
        x = math.sqrt(x)
        print(x)
        y = 2 * math.acos(x)
        y = (y * 180) / math.pi
        print(y)
        anwser.append(y)
    print(anwser)

SVE()