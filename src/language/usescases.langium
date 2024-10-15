import 'entities'

Actor:
    (Comment)?
    // TODO Talvez o entity deva ser só LocalEntity
    'actor' name=QualifiedName ('fullname' ':' fullName=STRING)? ('extends' superType=[Actor:QualifiedName])?
    (Comment)?
;

UseCase:
    (Comment)?
    'usecase' name=QualifiedName ('extends' superType=[UseCase:QualifiedName])? '{'
        Name
        Description
        // 'kind'      ':' kind=('manage' | 'view')
        'performed' ':' actors+=[Actor:QualifiedName]    (',' actors+=[Actor:QualifiedName])*
        |events+=Event
        // 'entities'  ':' models+=[Entity:QualifiedName]   (',' models+=[Entity:QualifiedName])*
        // ('extend'   ':' extend+=[UseCase:QualifiedName]  (',' extend+=[UseCase:QualifiedName])*)?
        // ('include'  ':' include+=[UseCase:QualifiedName] (',' include+=[UseCase:QualifiedName])*)?
    '}'
    (Comment)?
;

Event:
    'event' id=ID '{'
        (Name
        |Description
        |'action' ':' action=STRING
        |'depend'':' depend= [Event:QualifiedName](',' depends+=[Event:QualifiedName])?
        )*
    '}';