#   Dada uma lista carregada com elementos de qualquer tipo, implemente um código que retorne uma lista substituindo os elementos originais por booleanos, de acordo com as seguintes regras de negócio:
#	  Se o elemento for do tipo INT e for maior que 42 substitua-o por True, do contrário, substitua-o por False;
# 	Se o elemento for do tipo STR  e contiver a letra “a” substitua-o por True, do contrário, substitua-o por False;
# 	Se o elemento for do tipo FLOAT e for menor que 3.14 substitua-o por False, do contrário, substitua-o por True;
# 	Se o elemento for do tipo LIST e tiver "tamanho" 2, substitua-o por False, do contrário, substitua-o por True.


def boolean_list(elements):
    return []

# Ex:
# [ 45, 10 ] -> [True, False]
# [ "bolo", "arara" ] -> [False, True]
# [ 1.0, 12.14 ] -> [False, True]
# [ [ ], [1,2] ] -> [True, False]

    
# [ 56, “estudos”, ["Ada", "Alan", "Barbara"], 3.0] -> [ True, False, True, False ]


