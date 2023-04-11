# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f'arquivo{index}.txt', 'w'))

    # erro ao criar muitos arquivos

file = open('arquivo.txt', mode='w')
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

file = open('arquivo.txt', mode='r')
for line in file:
    print(line)
file.close()
