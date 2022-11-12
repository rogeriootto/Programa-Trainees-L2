class positionClass:
    x = ''
    y = ''

#Função lê o arquivo, fecha ele e ainda trata os dados para serem usados no futuro
def readFile():

    with open('entrada.txt', 'r') as file:
        fileLines = file.readlines()
        file.close()

        newString = []
        position = []

        operationsIndex = -1; #Começa em -1 para não estourar a representação

        #Estou separando em arrays pra saber qual é a posição pra cada sequencia de operações
        for lines in fileLines:
            if(not lines[0].isnumeric()):
                for character in lines:
                    if character != '\n':
                        newString[operationsIndex] = newString[operationsIndex] + character #Salva cada caractere em um espaço do array
            else:
                position.append(lines) #Salva cada posição para cada sequencia de operações em um array
                newString.append('')
                operationsIndex += 1
    
        return newString, position
        #Operations contem as operações que operam em cima da posição de mesmo index
        #Positions contem a posição que servirá de startup point para as operações  


def positionStringToClass(position):

    #Tratando um pouco mais as posições
    newPosition = positionClass()
        
    indexTst = 0
    for positions in position:
        for number in positions:
            if(number != ' ' and number != '\n'):
                if indexTst:
                    newPosition.y = newPosition.y + number
                else:
                    newPosition.x = newPosition.x + number
            else:
                indexTst+=1

    return newPosition

def computePosition(operations, positionObj):
    
    roomWidth = int(positionObj.x)
    roomHeight = int(positionObj.y)

    xPosition = 0
    yPosition = 0
    side = 'N'

    for thisOperation in operations:
        if thisOperation == 'F':
            if (yPosition < roomHeight):
                if side == 'N':
                    yPosition += 1
            
            if(yPosition != 0):
                if side == 'S':
                    yPosition -= 1

            if (xPosition < roomWidth):       
                if side == 'L':
                    xPosition += 1
            
            if(xPosition != 0):
                if side == 'O':
                    xPosition -= 1

        elif thisOperation == 'T':
            if(yPosition != 0):
                if side == 'N':
                    yPosition -= 1

            if (yPosition < roomHeight):
                if side == 'S':
                    yPosition += 1

            if(xPosition != 0):
                if side == 'L':
                    xPosition -= 1
            
            if (xPosition < roomWidth): 
                if side == 'O':
                    xPosition += 1

        elif thisOperation == 'E':
            if side == 'N':
                side = 'O'
            elif side == 'L':
                side = 'N'
            elif side == 'S':
                side = 'L'
            elif side == 'O':
                side = 'S'

        elif thisOperation == 'D':
            if side == 'N':
                side = 'L'
            elif side == 'L':
                side = 'S'
            elif side == 'S':
                side = 'O'
            elif side == 'O':
                side = 'N'

    print(f"{side} {xPosition} {yPosition}")
    

tempclass = positionClass()
fileOperations, filePositions = readFile()

i = 0
for position in filePositions:
    tempclass = positionStringToClass(position)
    computePosition(fileOperations[i], tempclass)
    i+=1
