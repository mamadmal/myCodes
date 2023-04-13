import matplotlib.pyplot as plt

yanx = [0.726, 0.728, 0.728, 0.728, 0.728, 0.727, 0.725, 0.723, 0.721, 0.719, 0.718, 0.719, 0.721]
# we have 2454... in julian date so we wirte just the rest of.
xanx = [729.5, 749.5, 759.5, 769.5, 779.5, 789.5, 799.5, 819.5, 829.5, 849.5, 868.5, 879.5, 889.5]
 
print(len(xanx))

plt.plot(xanx, yanx)
plt.show()
