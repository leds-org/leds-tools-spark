import { expandToString } from "langium/generate";
import { LocalEntity } from "../../../../../language/generated/ast.js";
import { RelationInfo } from "../../../../util/relations.js";

export function generate(cls: LocalEntity, relations: RelationInfo[]): string {
    const details = generateDetails(cls);
    return details
}

function generateDetails(cls: LocalEntity): string {
    return expandToString`
cypress/pageObjects/Details${cls.name}.ts

const URL = 'http://localhost:5173/${cls.name}/Details${cls.name}';

const elements = {
    delete${cls.name}Btn: () => cy.get('input[name="DeleteButton"]'),
    confirmDelete${cls.name}Btn: () => cy.get('input[name="confirmDeleteButton"]') 
}

class Form${cls.name}{
    static visitPage() {
      cy.visit(URL);
    };

    static delete${cls.name}() {
        elements.delete${cls.name}Btn().click();
    }

    static confirmDelete${cls.name}() {
        elements.confirmDelete${cls.name}Btn().click();
    }

    static completeDelete${cls.name}() {
        this.delete${cls.name}();
        this.confirmDelete${cls.name}();
    }

    static successMessage() {
        cy.contains('Deletado com sucesso');
    }
}

export default Details${cls.name}`
}