# Exercício 01

ls = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def menor_numero(list):
    menor = ls[0]
    for num in list:
        if num < menor:
            menor = num
    return menor

    # outra forma de fazer


def min_number(numbers):
    return min(numbers)


print(menor_numero(ls))
print(min_number(ls))


# Exercício 02


t = 5


def fatorial(asteristic):
    for i in range(1, asteristic + 1):
        print(i * '*')


fatorial(t)


# Exercício 03


N = 5


def sum_factorial(numbers):
    total = 0
    for number in range(1, numbers + 1):
        total += number

    return total

    # outra forma de fazer


def sum_fac(numbers):
    return sum(range(1, numbers + 1))


print(sum_fac(N))


# Exercício 04


#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

valor_alcool = 1.90
valor_gasolina = 2.50


def desconto(alcool, gasolina):
    if alcool <= 20:
        alcool_com_desconto = alcool - (alcool * 0.03)
    else:
        alcool_com_desconto = alcool - (alcool * 0.05)

    if gasolina <= 20:
        gasolina_com_desconto = gasolina - (gasolina * 0.04)
    else:
        gasolina_com_desconto = gasolina - (gasolina * 0.06)

    total_alcool = round((valor_alcool * alcool_com_desconto), 2)
    total_gasolina = round((valor_gasolina * gasolina_com_desconto), 2)

    return (total_alcool, total_gasolina)

    # outra forma de fazer


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("A", 20))
print(fuel_price("G", 20))

# Até aqui


print(desconto(20, 20))
