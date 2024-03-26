import type { ValidationChecks } from 'langium';
import type { R2D2AstType } from './generated/ast.js';
import type { R2D2Services } from './r-2-d-2-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: R2D2Services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.R2D2Validator;
    const checks: ValidationChecks<R2D2AstType> = {
       
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class R2D2Validator {

}
