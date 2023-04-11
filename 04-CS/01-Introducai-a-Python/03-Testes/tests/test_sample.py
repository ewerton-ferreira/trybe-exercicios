def my_sum(number1:int, number2:int)-> int:
    return number1 + number2

def test_my_sum():
    assert my_sum(1, 2) == 3

def test_my_sum2():
    assert my_sum(2, 2) == 4

def test_my_sum3():
    assert my_sum(3, 2) == 5

def test_my_sum4():
    assert my_sum(4, 2) == 6

def test_my_sum5():    
    assert my_sum(5, 2) == 7

