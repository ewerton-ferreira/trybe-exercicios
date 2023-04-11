import random

def sum(a, b):
  return a + b


def pot(a, b):
  return a ** b


# print(sum(2, 2))
# print(pot(2, 3))


# input("Digite uma mensagem:")

random_number = random.randint(1, 5)  # escolhe um número aleatório entre 1 e 5
guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
    # guess = int(input("Qual o seu palpite? "))
    #  # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)


print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")  # saída: Maria, João, Miguel, Ana

print("Em duas ")
print("linhas.")

print("Na mesma", end=" ")
print("linha.")

x = 5
y = 3

print(f'{x} / {y} = {x / y:.2f}')
# o que vem depois dos : '.2f' significa a quantidade de casas decimais que serão exibidas
print(f'{x:.^3}')
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos

#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#Exercício 01

nome_usuario = input('Digite seu nome: ')

# def exibi_nome():
#     for letras in nome_usuario:
        # print(letras.upper())
# exibi_nome()

    # Outra forma de fazer

for letra in nome_usuario:
    print(letra.upper())

#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#Exercício 02

numeros_informados = input('Escreva dois números naturais, separando-os por espaço: ')

num_infor = numeros_informados.split(' ')

soma = 0
for num in num_infor:
    if not num.isdigit():
        print(f'Erro ao somar valores, {num} não é um dígito!')
    else:
        soma += int(num)

print(f'A soma dos valores é: {soma}')

#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX