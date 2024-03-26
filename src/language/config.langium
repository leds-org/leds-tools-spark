import 'terminals'

Configuration:
    'Configuration' '{'
        (Name 
        | Description 
        | DatabaseName 
        | Language )*
    '}'
;

fragment Description:
    'description:' about=STRING 
;

fragment Name:
    'name:' software_name=STRING 
;

fragment DatabaseName:
    'database_name:' database_name=STRING
; 

fragment Language:
    'language:' language = ["pyhton"|"java"]
;