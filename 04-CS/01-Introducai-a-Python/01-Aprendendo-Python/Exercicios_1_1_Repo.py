# Requisito 1 - Crie uma função que receba dois números e retorne o maior deles

def bigger(number, other):
    if other > number:
        return other
    return number


print(bigger(5, 6))


# Requisito 2 - Calcule a média aritmética dos valores contidos em uma lista

list_n = [5, 6, 8, 11]


def avg(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


print(avg(list_n))


# Requisito 3 - Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda"

lista_nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def nome_maior(nomes):
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(nome_maior(lista_nomes))
