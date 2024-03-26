import 'terminals'

fragment Name:
    'name:' name=STRING 
;

fragment Description:
    'description:' description=STRING 
;

DATATYPE returns string:
    ('string'|'integer'|'decimal'|'datetime'|'date'|'boolean'|'char'|'uuid')
;

LANGUAGETYPE returns string:
    ('python'|'java')
;

QualifiedName returns string:
    ID ('.' ID)*
;

QualifiedNameWithWildcard returns string:
    QualifiedName '.*'?
;

fragment Comment:
    '#' comment=STRING
;