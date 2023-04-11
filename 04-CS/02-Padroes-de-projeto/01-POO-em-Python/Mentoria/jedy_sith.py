from personagem import Personagem
from random import choice
from light_sabre import SabreDeLuz
import numpy as np


class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = SabreDeLuz("verde", 50)

    def defender(self):
        defesa = choice([True, False])
        message_defesa = ["vai outra cavalo", "Tá cego meu fi?", "Errrrrouu!", "O que é que há, velhinho?", "Isso é ridículo!"]
        if defesa:
            print(f"{self.nome} defendeu e disse:")
            print(np.random.choice(message_defesa, size=1))
        return defesa

    def contra_atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.light_saber.forca)

    def falar(self):
        message_ataque = ["AQUI NÃO PAPAI, OLHA A FACA!!!!!", "ALL BE BACK", "Yabba Dabba Doo!", "Pelos poderes de Greyskull!", "E la vamos nóóóós!", "RECEBA, SIIIIIIM!!!!"]
        if self.get_hp() <= 0:
            print(f"{self.nome} morreu, 'Morri: mas eu vou voltar'")
        else:
            print(f"{self.nome} atacou e disse:")
            print(np.random.choice(message_ataque, size=1))


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = SabreDeLuz("vermelho", 50)

    def defender(self):
        defesa = choice([True, False])
        message_defesa = ["vai outra cavalo", "Tá cego meu fi?", "Errrrrouu!", "O que é que há, velhinho?", "Isso é ridículo!"]
        if defesa:
            print(f"{self.nome} defendeu e disse:")
            print(np.random.choice(message_defesa, size=1))
        return defesa

    def atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.light_saber.forca)

    def falar(self):
        message_ataque = ["AQUI NÃO PAPAI, OLHA A FACA!!!!!", "ALL BE BACK", "Yabba Dabba Doo!", "Pelos poderes de Greyskull!", "E la vamos nóóóós!", "RECEBA, SIIIIIIM!!!!"]
        if self.get_hp() <= 0:
            print(f"{self.nome} morreu. 'Me matou seu covarde'")
        else:
            print(f"{self.nome} atacou e disse:")
            print(np.random.choice(message_ataque, size=1))
