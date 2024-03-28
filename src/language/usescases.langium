import 'entities'

Actor:
    (Comment)?
    // TODO Talvez o entity deva ser só LocalEntity
    'actor' name=QualifiedName 'is' entity=[Entity:QualifiedName] ('extends' superType=[Actor:QualifiedName])?
;

UseCase:
    (Comment)?
    'usecase' name=QualifiedName ('extends' superType=[UseCase:QualifiedName])? '{'
        'fullname'  ':' fullName=STRING
        'kind'      ':' kind=('manage' | 'view')
        'performed' ':' actors+=[Actor:QualifiedName]    (',' actors+=[Actor:QualifiedName])*
        'entities'  ':' models+=[Entity:QualifiedName]   (',' models+=[Entity:QualifiedName])*
        ('extend'   ':' extend+=[UseCase:QualifiedName]  (',' extend+=[UseCase:QualifiedName])*)?
        ('include'  ':' include+=[UseCase:QualifiedName] (',' include+=[UseCase:QualifiedName])*)?
    '}'
;
