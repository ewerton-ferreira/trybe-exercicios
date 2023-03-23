# def boomerang_print(elements):
#     reverse = elements[::-1]
#     boomerang = elements[0:-1] + reverse
#     for item in boomerang:
#       print(item, end=' ')

def boomerang_print(elements):
    reverse = elements[::-1]
    boomerang = elements[0:-1] + reverse
    boomerang_str= [str(item) for item in boomerang]
    concat = ' '.join(boomerang_str)
    print(concat)

# [0, 1, 2, 3] -> 0 1 2 3 2 1 0

