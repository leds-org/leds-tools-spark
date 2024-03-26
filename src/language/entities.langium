import 'terminals'
import 'helpers'

type Entity = LocalEntity| ImportedEntity

ModuleImport:
    'package_path' package_path=STRING 'from' library=ID 'module' name=ID 'import' entities+=ImportedEntity (',' entities+=ImportedEntity)*
;


ImportedEntity:
    name=ID
;



LocalEntity:
    (Comment)?
    (is_abstract?='abstract')? 'entity' name=ID ('extends' superType=[Entity:QualifiedName])? '{'
        (
        attributes+=Attribute
        | enumentityatributes+=EnumEntityAtribute
        | relations+=Relation

        )*
    '}'
;
// colocar condições de guarda
Attribute:
    (Comment)?
    name=ID ':' type=DATATYPE ('fullName' ':' fullName=STRING)? (unique?='unique')? (blank?='blank')?
;

EnumEntityAtribute:
    (Comment)?
    name=ID 'uses' type=[EnumX:ID]
;

EnumX:
    (Comment)?
    'enum' name=ID '{'
        (attributes+=AttributeEnum)*
    '}'
;

AttributeEnum:
    (Comment)?
    name=ID (',' 'fullName' ':' fullName=STRING)?
;

Relation:
    OneToOne | ManyToMany | OneToMany | ManyToOne 
;

OneToOne:
    (Comment)?
    name=ID 'OneToOne' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
OneToMany:
    (Comment)?
    name=ID 'OneToMany' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
ManyToOne:
    (Comment)?
    name=ID 'ManyToOne' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)?
;
ManyToMany:
    (Comment)?
    name=ID 'ManyToMany' type=[Entity:QualifiedName] ('fullName' ':' fullName=STRING)? ('by' by=[LocalEntity:QualifiedName])?
;
