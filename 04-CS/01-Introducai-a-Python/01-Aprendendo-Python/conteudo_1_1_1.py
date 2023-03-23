restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
    {"name": "Restaurante E", "nota": 2.0},
    {"name": "Restaurante F", "nota": 1.7},
    {"name": "Restaurante G", "nota": 4.3},
    {"name": "Restaurante H", "nota": 3.3},
    {"name": "Restaurante I", "nota": 2.1},
    {"name": "Restaurante J", "nota": 3.5},
    {"name": "Restaurante K", "nota": 4.6},
    {"name": "Restaurante L", "nota": 2.8},
    {"name": "Restaurante M", "nota": 3.9},
    {"name": "Restaurante N", "nota": 4.4},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)

min_rating = 3.0
filtered_restaurants = [
    restaurant
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# min_rating = 3.0
# aqui pedimos somente o nome do restaurante
filtered_restaurants = [restaurant["name"]]
#                        for restaurant in restaurants
#                        if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

team = ['Ronaldo Fenômeno', 'Ronaldo Gaúcho',
        'Romário', 'Zico', 'Pelé', 'Neymar', 'Messi', 'CR7']
a_names = []

for name in team:
    if name[0] == 'R':

        # if name.startswith('R'): #uma outra forma de fazer

        a_names.append(name.upper())
print(a_names)

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# forma de list comprehension
team = ['Ronaldo Fenômeno', 'Ronaldo Gaúcho',
        'Romário', 'Zico', 'Pelé', 'Neymar', 'Messi', 'CR7']

a_names = [name.upper() for name in team if name[0] == 'R']
b_names = [name.lower() for name in team if name.startswith('N')]
print(a_names, b_names)
# for index in range(5):
#     print(index)

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

names_list = [
    'Flamengo', 'Fluminense', 'Palmeiras',
    'Corinthians', 'Atlético MG', 'São Paulo']

new_name_list = [name for name in names_list if 'a' in name.lower()]
print(new_name_list)

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

quadrados = [x*x for x in range(11)]
print(quadrados)

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

n = 20
last, next = 0, 2
while last < n:
    print(last)
    last, next = next, last + next

n = 82
last, next = 2, 5
while last < n:
    print(last)
    last, next = next, last + next

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

languages = ['Python', 'Java', 'JavaScript']

# Começando com o índice zero
enumerate_prime = enumerate(languages)

# Começando com o índice um
enumerate_prime_one = enumerate(languages, 1)

print(list(enumerate_prime))
print(list(enumerate_prime_one))

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

languages = ['Python', 'Java', 'JavaScript']

# Enumera os parâmetros
for index, languages in enumerate(['Python', 'JavaScript']):
    # for index, languages in enumerate(['Python', 'JavaScript'], 1):

    # Enumera a variável
    # for index, languages in enumerate(languages):
    print(f'{index} - {languages}')

# xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Exercício 12
# O Fatorial de um número inteiro é representado pela multiplicação
# de todos os números predecessores maiores que 0. Por exemplo,
# o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# Escreva um código que calcule o fatorial de um número inteiro.

factorial = 7
counter = 1
result = 1

while counter <= factorial:
    result = result * counter
    counter += 1
    print(result)

    # uma segunda forma

factorial = 7
result = 1

for factor in range(1, factorial + 1):
    result = result * factor
    print(result)

# Exercício 13
# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para
# avaliações de 0 a 100.
# Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# Escreva um código capaz de gerar as avaliações após a mudança.
# Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)
    print(new_ratings)

    # uma segunda forma

ratings = [6, 8, 5, 9, 10]
new_ratings = [rating * 10 for rating in ratings]
print(new_ratings)

# Exercício 14
# Percorra a lista do exercício 13 e imprima “Múltiplo de 3”
# se o elemento for divisível por 3.

ratings = [6, 8, 5, 9, 10]
new_ratings = [rating for rating in ratings if (rating % 3) == 0]
print(new_ratings)

# uma segunda forma

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f'{rating} é multiplo de 3')

# Exercício 15 - Próprio
# Escreva um código que imprima os números de 1 a 100.
# Mas para múltiplos de 3 imprima “Fizz” em vez do número e para múltiplos de 5
# imprima “Buzz”. Para números múltiplos de ambos (3 e 5), imprima “FizzBuzz”.
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print('FizzBuzz')
    elif i % 3 == 0:
        print('Fizz')
    elif i % 5 == 0:
        print('Buzz')
    else:
        print(i)

for i in range(1, 101):
    print(i)
