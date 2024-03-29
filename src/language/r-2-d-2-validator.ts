import type { NamedAstNode, ValidationAcceptor, ValidationChecks } from 'langium';
import { isLocalEntity, type LocalEntity, type R2D2AstType } from './generated/ast.js';
import type { R2D2Services } from './r-2-d-2-module.js';
import { cycleFinder } from '../cli/util/generator-utils.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: R2D2Services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.R2D2Validator;
    const checks: ValidationChecks<R2D2AstType> = {
        Module: validator.checkNameIsCamelCase,
        LocalEntity: [
            validator.checkNameIsCamelCase,
            validator.checkAbstractEntityExtendsAbstract,
            validator.checkCyclicExtensions
        ],
        Attribute: validator.checkNameIsSnakeCase,
        AttributeEnum: validator.checkNameIsCamelCase

    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class R2D2Validator {
    checkNameIsCamelCase(n: NamedAstNode, accept: ValidationAcceptor) : void {
        if(!n.name.match(/^[A-Z]\w*$/)) {
            accept('warning', "This name should be in CamelCase", { node: n, property: 'name' })
        }
    }

    checkNameIsSnakeCase(n: NamedAstNode, accept: ValidationAcceptor) : void {
        if(!n.name.match(/^[a-z_][a-z0-9_]*$/)) {
            accept('warning', "This name should be in snake_case", { node: n, property: 'name' })
        }
    }

    checkAbstractEntityExtendsAbstract(e: LocalEntity, accept: ValidationAcceptor) : void {
        if(e.is_abstract) {
            const supertype = e.superType?.ref
            if(isLocalEntity(supertype) && !supertype.is_abstract) {
                accept('error', "An abstract entity can only extend another abstract entity", { node: e, property: 'superType' })
            }
        }
    }

    checkCyclicExtensions(e: LocalEntity, accept: ValidationAcceptor) : void {
        const callback = (n: LocalEntity) => {
            const supertype = n.superType?.ref
            if(isLocalEntity(supertype)) {
                return supertype
            } else {
                return undefined
            }
        }
        if(cycleFinder(e, callback)) {
            accept('error', "Cyclic extension detected", { node: e, property: 'superType' })
        }
    }

}
