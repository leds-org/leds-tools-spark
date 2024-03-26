grammar R2D2

import 'config'
import 'entities'

entry Model:
    (configuration=Configuration)?
    (abstractElements+=(AbstractElement | ModuleImport))*
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