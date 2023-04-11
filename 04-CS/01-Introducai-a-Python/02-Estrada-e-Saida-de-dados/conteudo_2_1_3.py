file = open('arquivo_teste.txt', mode='w')

file.write('nome idade\n')
file.write('Maria 45\n')
file.write('Miguel 33\n')
file.write('Maíra 29\n')
file.write('Márcio 25\n')

print('Diferente 10', file=file)

LINES = ['Alberto 33\n', 'Bruna 22\n', 'Carol 18\n', 'Douglas 44\n']
file.writelines(LINES)

file.close()