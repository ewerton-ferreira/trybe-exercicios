# from personagem import Personagem
from jedy_sith import Jedi, Sith
from time import sleep

# personagem1 = Personagem("Padmé", "Humana", 50, 155, 50)
personagem2 = Jedi("Luke", "Humano", 100, 200, 250)
personagem3 = Sith("Vader", "Humano", 100, 200, 250)

print("PERSONAGENS:")
# print(
#     f"Nome: {personagem1.nome},\
#       Espécie: {personagem1.especie},\
#       HP: {personagem1.get_hp()}"
# )
print(
    f"Nome: {personagem2.nome},\
      Espécie: {personagem2.especie},\
      HP: {personagem2.get_hp()}"
)
print(
    f"Nome: {personagem3.nome},\
      Espécie: {personagem3.especie},\
      HP: {personagem3.get_hp()}"
)

print("----------\n")
print("BATALHA")
print(f"{personagem3.nome}, 'Vem pru tapa se for homi'")
sleep(2)
print(f"{personagem2.nome}, 'Pia só, um cambito desses quer apanhar essa hora'\n\n")
sleep(2)

while personagem3.get_hp() > 0:
    sleep(2)
    print(
        f"{personagem3.nome} (HP {personagem3.get_hp()}) ataca {personagem2.nome} (HP {personagem2.get_hp()})"
    )
    personagem3.atacar(personagem2)
    personagem2.falar()
    sleep(2)
    print("\n")
    if personagem2.get_hp() > 0:
        print(
            f"{personagem2.nome} (HP {personagem2.get_hp()}) contra-ataca {personagem3.nome} (HP {personagem3.get_hp()})"
        )
        personagem2.contra_atacar(personagem3)
        personagem3.falar()
        sleep(2)
    else:
        sleep(2)
        print("\n")
        break
