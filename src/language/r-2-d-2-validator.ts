import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { R2D2AstType, Person } from './generated/ast.js';
import type { R2D2Services } from './r-2-d-2-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: R2D2Services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.R2D2Validator;
    const checks: ValidationChecks<R2D2AstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class R2D2Validator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
