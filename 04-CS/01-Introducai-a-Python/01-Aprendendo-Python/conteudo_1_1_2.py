def imc(peso, altura):
    return peso / (altura / 100) ** 2


def classificacao(imc):
    if imc < 18.5:
        return "Abaixo do peso"
    elif imc < 25:
        return "Peso normal"
    elif imc < 30:
        return "Sobrepeso"
    else:
        return "Obeso"


def main():
    peso = float(input("Digite seu peso: "))
    altura = float(input("Digite sua altura: "))
    imc_calculado = imc(peso, altura)
    print("Seu IMC é: ", round((imc_calculado), 2))
    print("Classificação: ", classificacao(imc_calculado))


# if __name__ == "__main__":
#     main()

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx


def soma(x, y):
    return x + y


print(soma(2, 2))
print(soma(x=2, y=3))

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx


def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


print(concat("Ewerton", "Ferreira"))
print(concat("Python", "é", "legal"))

print(dict(nome="Ewerton", sobrenome="Ferreira", idade=37))
print(dict(tipo="Aluno", escola="Trybe", turma=23, tribo="A"))

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

len([1, 2, 3, 4])

len(obj=[1, 2, 3, 4])

print("Marcelo", "Rodrigues", ", ")
print("Marcelo", "Rodrigues", sep=", ")

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
letters = ["a", "b", "c", "d", "e"]

for letter in letters:
    print(letter)

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx


def quadrado(n):
    """Recebe um número n, retorna o quadrado de n"""  # Literal de string
    return n**2


print(quadrado.__doc__)
# Saída
# Recebe um número n, retorna o quadrado de n

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

print(print.__doc__)

# Saída value
print(value, ..., sep=" ", end="\n", file=sys.stdout, flush=False)

# Imprime os valores em um fluxo, or em sys.stdout por padrão.
# Argumentos de palavras-chave opcionais:
# file: um objeto semelhante a um arquivo (fluxo);
#   o padrão é o sys.stdout atual.
# sep: string inserida entre valores, o padrão é o espaço.
# end: string anexada após o último valor, o padrão é uma nova linha.
# flush: se deve forçar a descarga do fluxo.

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
