# Exercício 01

def max_number(x, y):
    if x > y:
        return x
    return y


print(max_number(5, 4))


# Exercício 02

list_notes = [2, 5, 8, 10]


def avg_notes(list_notes):
    avg_note = 0
    for note in list_notes:
        avg_note += note
    return avg_note / len(list_notes)


print(avg_notes(list_notes))


# Exercício 03


n = 6


def print_x(number):
    for i in range(number):
        print("x" * number)

    # outra forma de fazer


def draw_square(n):
    for row in range(n):
        print(n * '*')


print_x(n)


# Exercício 04


names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def longest_name(names_list):
    longest_name = ''
    for name in names_list:
        if len(name) > len(longest_name):
            longest_name = name

    return longest_name

    # outra forma de fazer


def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(longest_name(names_list))


# Exercício 05


litro_tinta_area = 3
litros_lata = 18
valor = 80


def paint_calc(area):
    numero_latas = area / litro_tinta_area
    valor_total = numero_latas / litros_lata
    if valor_total % 18:
        valor_total += 1
    return valor_total, valor_total * valor


print(paint_calc(80))


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(80))


# Exercício 06


#   Três lados formam um triângulo quando a soma de quaisquer
#       dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.


def triangle_type(a, b, c):
    if a == b == c:
        return "Equilátero"
    elif a == b or a == c or b == c:
        return "Isósceles"
    else:
        return "Escaleno"

    # outra forma de fazer

# def type_of_triangle(side1, side2, side3):
#     is_triangle = (
#             side1 + side2 > side3 and
#             side2 + side3 > side1 and
#             side1 + side3 > side2
#     )
#     if not is_triangle:
#         return "não é triângulo"
#     elif side1 == side2 == side3:
#         return "equilátero"
#     elif side1 == side2 or side2 == side3 or side1 == side3:
#         return "isósceles"
#     else:
#         return "escaleno"


print(triangle_type(4, 5, 3))
print(triangle_type(2, 2, 2))
print(triangle_type(1, 3, 3))
