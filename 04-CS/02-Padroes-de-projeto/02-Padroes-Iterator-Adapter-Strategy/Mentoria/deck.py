from card import Card
from random import shuffle


class Deck:
    def __init__(self):
        # self.deck = []
        self.reset()

    def reset(self):
        self.deck = []
        suits = ["Copas", "Ouros", "Paus", "Espadas"]
        values = [
            "Ás",
            "Rei",
            "Dama",
            "Valete",
            "10",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2",
        ]
        for suit in suits:
            for value in values:
                self.deck.append(Card(value, suit))

    def shuffle(self):
        shuffle(self.deck)

    def deal(self):
        return self.deck.pop()

    def __len__(self):
        return len(self.deck)

    def isEmpty(self):
        return len(self) == 0
