grammar R2D2

import 'terminals'
import 'config'
import 'entities'
import 'helpers'


entry Model:
    (configuration=Configuration)?
    (abstractElements+=(AbstractElement))*
;

AbstractElement:
    Module | EnumX  
;

Module:
    (Description)?
    'module' name=QualifiedName '{'
        (elements+=(AbstractElement | LocalEntity))*
    '}'


