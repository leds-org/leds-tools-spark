import path from "path"
import { Model } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import { expandToStringWithNL } from "langium/generate"

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, `BaseEntity.cs`), generateBaseEntity(model))

}

function generateBaseEntity(model : Model) : string {
    return expandToStringWithNL`
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ${model.configuration?.name}.Domain.Common
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        [JsonIgnore]
        public DateTimeOffset DateCreated { get; set; }
        [JsonIgnore]
        public DateTimeOffset? DateUpdated { get; set; }
        [JsonIgnore]
        public DateTimeOffset? DateDeleted { get; set; }
    }
}`
}