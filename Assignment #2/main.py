import re
# java language
from enum import Enum

class Classifier(Enum):
    STRING_LITERAL = '\"(\\.|[^\\"])*\"'
    CHARACTER_LITERAL = r"\'(\\.|[^\\'])*\'"
    SPACE = "( ).*"
    NEW_LINE = "(\\n).*"
   
    #floating point literal
    FLOATING_LITERAL = "[+-]?\\d*([.]\\d+f)";
    #User defined identifier
    USER_DEFINED_IDENTIFIER = "\\b([a-zA-Z]{1}[0-9a-zA-Z_]{0,31})\\b.*"
     # Integer Literal
    INTEGER_LITERAL = "\\b(\\d{1,9})\\b.*"
   # special symbol
    OPEN_PAREN = "(\\().*"
    CLOSE_PAREN = "(\\)).*"
    SEMICOLON = "(;).*"
    COMMA = "(,).*"
    COLON = "(\\:).*"
    OPEN_CURLY_BRACE = "(\\{).*"
    CLOSE_CURLY_BRACE = "(\\}).*"
    OPEN_BRACE = "(\\[).*"
    CLOSE_BRACE = "(\\]).*"
    POINT = "(\\.).*"
    PLUS = "(\\+{1}).*"
    MINUS = "(\\-{1}).*"
    MULTIPLY = "(\\*).*"
    DIVIDE = "(/).*"
    EQUAL = "(==).*"
    NOT_EQUAL = "(\\!=).*"
    CLOSE_CARET = "(>).*"
    OPEN_CARET = "(<).*"
    ASSIGNMENT = "(=).*"
    DOLLAR_SIGN = "(\\$).*"
    EXCLAMATION_POINT = "(!).*"
    VERTICAL_BAR = "(\\|).*"
    QUESTION_MARK = "(\\?).*"
    SYMBOL = "(\\@|#|$|&|%)"
     # Hexa
    HEXA = "^[0-9A-F]+$"
    # OCTAL
    OCTAL = "\b0[0-7]*\b"
    
class Token:

    def __init__(self, begin, end, value, type):
        self.begin = begin
        self.end = end
        self.value = value
        self.type = type

    def __str__(self):
        return self.type.name + '\t' + self.value

def lex_source(file):
    with open(file, 'r') as sample:
        return lex_source_string(sample.read())



def lex_source_string(string):
    tokens = list()
    index = 0
    while index < len(string):
        token = token_seperator(string, index)
        if token is None:
            print('invalid token detected')
            break
        index = token.end
        tokens.append(token)
        
    return tokens


def token_seperator(string, begin):
    
    for type in Classifier:
        pattern = r'.{' + str(begin) + '}' + type.value
        match = re.match(pattern, string, re.DOTALL)
        if match:
            end = match.end(1)
            if type == Classifier.STRING_LITERAL or type == Classifier.CHARACTER_LITERAL:
                end += 1
            return Token(begin, end, string[begin:end], type)
    return None

#main 
tokens = lex_source('example.txt')

for token in tokens:
    if token.type not in [Classifier.SPACE, Classifier.NEW_LINE]:
        print(token)
