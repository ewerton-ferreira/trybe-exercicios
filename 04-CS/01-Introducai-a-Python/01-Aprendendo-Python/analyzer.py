# def analyzer(text):
#     count_words = len(text.split(' '))
#     return f"O número de palavras é {count_words}"

def analyzer(text: str) -> str:
    report = ""
    count_words = len(text.split(' '))
    report += f"O número de palavras é {count_words}\n"

    char_counter = dict()
    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1

    report += f"Ocorrências por caracter: {char_counter}"

    return report


text_to_analyzer = (
    "Todo o texto com fundo amarelo é explicativo, e ele deve ser apagado depois"
    "de lidas as considerações de cada item, devendo se retirado o grifo amarelo de"
    "todos os textos no decorrer do modelo. Encaminhe um trabalho limpo, enviando"
    "apenas o que a etapa solicita."
)

print(analyzer(text_to_analyzer))
