import 'terminals'

DATATYPE returns string:
    ('string'|'integer'|'decimal'|'datetime'|'date'|'boolean'|'char'|'uuid')
;

QualifiedName returns string:
    ID ('.' ID)*
;

QualifiedNameWithWildcard returns string:
    QualifiedName '.*'?
;

fragment Description:
    '#' description=STRING
;
