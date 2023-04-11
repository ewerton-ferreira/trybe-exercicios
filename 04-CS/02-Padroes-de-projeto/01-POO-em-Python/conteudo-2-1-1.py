class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao
        self.preco = preco
        self.__ligado = False

    def cor(self):
        return self.__cor

    def __str__(self):
        return """
        - Cor: {self.__cor}
        - Potencia: {self.__potencia}
        - Tensao: {self.__tensao}
        - Preco: {self.preco}
        """


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if (self.ventilador):
            return f"{self.nome} - possui um ventilador, para usar na cadeia."
        return f"{self.nome} - não possui um ventilador, para usar na cadeia."


ventilador_preto = Ventilador(
    'Preto', potencia=2000, tensao=220, preco=399)
pessoa = Pessoa("Ronaldinho Gaúcho", saldo_na_conta=5599)
pessoa.comprar_ventilador(ventilador_preto)

print(pessoa)
