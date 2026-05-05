side1 = 5;
side2 = 10;
side3 = 5;

if side1 == side2 and side2 == side3:
    print("Equilateral triangle")
elif side1 == side2 or side1 == side3 or side2 == side3:
    print("Isoceles triangle")
else:
    print("Scalene triangle")


