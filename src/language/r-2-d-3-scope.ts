import { AstNode, AstNodeDescription, DefaultScopeComputation, LangiumDocument } from "langium";
import { CancellationToken } from "vscode-languageclient";
import { Model, isLocalEntity, isModule, isModuleImport } from "./generated/ast.js";

/**
 * Gerador customizado para o escopo global do arquivo.
 * Por padrão, o escopo global só contém os filhos do nó raiz,
 * mas é do nosso interesse que as ImportedEntity (filhas de nós ModuleImport)
 * sejam acessíveis globalmente
 */
export class CustomScopeComputation extends DefaultScopeComputation {
    override async computeExports(document: LangiumDocument<AstNode>, cancelToken?: CancellationToken | undefined): Promise<AstNodeDescription[]> {
        // Os nós que normalmente estariam no escopo global
        const default_global = await super.computeExports(document, cancelToken)

        // Colocar no escopo global todas as ImportedEntity de todos os ModuleImport
        const root = document.parseResult.value as Model
        root.abstractElements.filter(isModuleImport).map(k =>

            k.entities.map(e =>
                this.exportNode(e, default_global, document)
            )
        )

        // Colocar no escopo global todas as LocalEntity de todos os Module com o nome normal
        const entities = root.abstractElements.filter(isModule).flatMap(m =>
            m.elements.filter(isLocalEntity).map(e =>
                this.descriptions.createDescription(e, `${e.$container.name}.${e.name}`, document)
            )
        )
        return default_global.concat(entities)
    }
}
