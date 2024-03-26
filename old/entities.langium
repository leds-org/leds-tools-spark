import 'terminals'
import 'helpers'

type Entity = LocalEntity| ImportedEntity

ModuleImport:
    'from' ontology=ID 'module' name=ID 'import' entities+=ImportedEntity (',' entities+=ImportedEntity)*
;


ImportedEntity:
    name=ID
;



LocalEntity:
    (Description)?
    (is_abstract?='abstract')? 'entity' name=ID ('extends' superType=[Entity:QualifiedName])? '{'
        (
        attributes+=Attribute
        | enumentityatributes+=EnumEntityAtribute
        | relations+=Relation

        )*
    '}'
;

Attribute:
    (Description)?
    name=ID ':' type=DATATYPE ('fullName' ':' fullName=STRING)? (unique?='unique')?
;

EnumEntityAtribute:
    (Description)?
    name=ID 'uses' type=[EnumX:ID]
;

EnumX:
    (Description)?
    'enum' name=ID '{'
        (attributes+=AttributeEnum)*
    '}'
;

AttributeEnum:
    (Description)?
    name=ID (',' 'fullName' ':' fullName=STRING)?
;

Relation:
    OneToOne | ManyToMany | OneToMany | ManyToOne 
;

OneToOne:
    (Description)?
    name=ID 'OneToOne' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
OneToMany:
    (Description)?
    name=ID 'OneToMany' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
ManyToOne:
    (Description)?
    name=ID 'ManyToOne' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
ManyToMany:
    (Description)?
    name=ID 'ManyToMany' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)? ('by' by=[LocalEntity:QualifiedName])?
;
