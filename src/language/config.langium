import 'helpers'

Configuration:
    'Configuration' '{'
        (Name 
        |Description 
        |DataBaseName
        |Language )*
    '}'
;


fragment DataBaseName:
    'database_name:' database_name=STRING
; 

fragment Language:
    'language:' language = LANGUAGETYPE
;