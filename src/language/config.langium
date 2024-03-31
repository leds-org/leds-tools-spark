import 'helpers'

Configuration:
    'Configuration' '{'
        ('software_name' ':' name=STRING 
        |'about' ':' description=STRING
        |DataBaseName
        |PackagePath
        |Language )*
    '}'
;


fragment DataBaseName:
    'database_name:' database_name=STRING
; 

fragment Language:
    'language:' language = LANGUAGETYPE
;

fragment PackagePath:
    'package_path:' package_path = LANGUAGETYPE
;