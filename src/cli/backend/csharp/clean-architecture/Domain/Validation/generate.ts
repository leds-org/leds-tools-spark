import { expandToStringWithNL } from "langium/generate"
import { Model } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder,`DomainExceptionValidation.cs`), generateDomainException(model))
}

function generateDomainException(model: Model): string {
    return expandToStringWithNL`
namespace ${model.configuration?.name}.Domain.Validation
{
    public class DomainExceptionValidation : Exception
    {
        public DomainExceptionValidation(string error) : base(error) { }

        public static void When(bool hasError, string error)
        {
            if (hasError)
                throw new DomainExceptionValidation(error);
        }
    }
}
`
}