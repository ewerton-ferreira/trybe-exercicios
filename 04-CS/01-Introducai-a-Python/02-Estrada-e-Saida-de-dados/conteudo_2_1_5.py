file = open('arquivo.dat', mode='wb')
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.write(b'c\xc3\xa1ssio 30')
file.close()


file = open('arquivo.dat', mode='rb')
content = file.read()
print(content)
file.close()