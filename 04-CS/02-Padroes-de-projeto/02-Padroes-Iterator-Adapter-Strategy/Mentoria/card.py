class Card:
    def __init__(self, value: str, suit: str):
        self.value = value
        self.suit = suit

    def __str__(self):
        return self.value + " de " + self.suit

    def getRank(self):
        ranks = {
            "Ás": 14,
            "Rei": 13,
            "Dama": 12,
            "Valete": 11,
            "10": 10,
            "9": 9,
            "8": 8,
            "7": 7,
            "6": 6,
            "5": 5,
            "4": 4,
            "3": 3,
            "2": 2,
        }
        return ranks[self.value]
