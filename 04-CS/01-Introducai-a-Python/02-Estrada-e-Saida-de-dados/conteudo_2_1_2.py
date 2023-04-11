a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3)
# Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

characters_file = open('my_persons_favorites.txt', mode='w')

characters_file.write("Sonic\n")
characters_file.write("Mario\n")
characters_file.write("Luigi\n")
characters_file.write("Pikachu\n")
characters_file.write("Ash\n")

print('Batman', file=characters_file)

more_characters = ['Homem Aranha\n', 'Flash\n', 'Wolverine\n', 'Cyclope\n']

characters_file.writelines(more_characters)

characters_file.close()

