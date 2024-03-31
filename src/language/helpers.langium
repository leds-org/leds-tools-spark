import 'terminals'


DATATYPE returns string:
    ('string'|'integer'|'decimal'|'datetime'|'date'|'boolean'|'uuid'| 'email'| 'brazilian_person_id'|'brazilian_organization_id'|'zipcode'|'currency'|'mobilePhoneNumber'|'phoneNumber'| 'file'|'void')
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
     comment = (SL_COMMENT |ML_COMMENT)
;