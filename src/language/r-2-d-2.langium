grammar R2D2

import 'config'
import 'entities'
import 'usescases'

entry Model:
    (configuration=Configuration)?
    (abstractElements+=(AbstractElement | ModuleImport |Actor| UseCase))*
;

AbstractElement:
    Module | EnumX  
;

Module:
    (Comment)?
    'module' name=QualifiedName '{'
        (elements+=(AbstractElement | LocalEntity))*
    '}'
;