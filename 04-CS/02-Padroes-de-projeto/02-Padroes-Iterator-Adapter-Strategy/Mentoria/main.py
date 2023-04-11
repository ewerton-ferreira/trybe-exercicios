from deck import Deck
from time import sleep


deckOfCards = Deck()
deckOfCards.shuffle()

player1 = input('informe o nome do jogador 1: ')
scorePlayer1 = 0
player2 = input('informe o nome do jogador 2: ')
scorePlayer2 = 0
roundNumber = 1

while not deckOfCards.isEmpty():
    sleep(1)
    print("\n--- Rodada " + str(roundNumber) + " ---")
    roundNumber += 1
    card1 = deckOfCards.deal()
    card2 = deckOfCards.deal()
    print("   Carta1: " + str(card1))
    print("   Carta2: " + str(card2))
    if card1.getRank() > card2.getRank():
        print("     Carta 1 venceu a rodada!")
        scorePlayer1 += 1
    elif card1.getRank() < card2.getRank():
        print("     Carta 2 venceu a rodada!")
        scorePlayer2 += 1
    else:
        print("     Empate!")
print("\n--- Fim de Jogo! ---")
print("Placar de " + player1 + ": " + str(scorePlayer1))
print("Placar de " + player2 + ": " + str(scorePlayer2))

if scorePlayer1 > scorePlayer2:
    print(player1 + " venceu!")
elif scorePlayer1 < scorePlayer2:
    print(player2 + " venceu!")
else:
    print("Os jogadores empataram!")
