import { expandToString } from "langium/generate"
import { Model } from "../../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, "CommandController.cs"), generateCommandController(model))
    fs.writeFileSync(path.join(target_folder, "QueryController.cs"), generateQueryController(model))

}

function generateCommandController(model: Model): string {
    return expandToString`
using Microsoft.AspNetCore.Mvc;
using ${model.configuration?.name}.Application.Interfaces;

namespace ${model.configuration?.name}.WebApi.Controllers.Generics
{
    public class CommandController<IService, Request, Response, Entity> : ControllerBase where IService : IBaseService<Request, Response, Entity>
    {
        IService _service;
        public CommandController(IService service)
        {
            _service = service;
        }
        [HttpPost]
        public async Task<IActionResult> Create(Request request, CancellationToken cancellationToken)
        {
            if (request == null)
            {
                return BadRequest();
            }
            var response = await _service.Create(request, cancellationToken);
            return Ok(response);

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id, CancellationToken cancellationToken)
        {
            await _service.Delete(id, cancellationToken);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(Guid id, Request request, CancellationToken cancellationToken)
        {
            if (id == null)
            {
                return BadRequest();
            }
            var response = await _service.Update(id, request, cancellationToken);
            return Ok(response);


        }
    }
}`
}

function generateQueryController(model: Model): string {
    return expandToString`
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ${model.configuration?.name}.Application.Interfaces;

namespace ${model.configuration?.name}.WebApi.Controllers.Generics
{
    public class QueryController<IService, Request, Response, Entity> : ODataController where IService : IBaseService<Request, Response, Entity>
    {
        IService _service;

        public QueryController(IService service)
        {
            _service = service;
        }

        [HttpGet]
        [EnableQuery(PageSize = 100)]
        public IQueryable<Response> GetAll()
        {
            var response = _service.GetAll();

            return response;
        }

        [HttpGet("{id}")]
        [EnableQuery(MaxExpansionDepth = 3)]
        public IQueryable<Response> GetById(Guid id)
        {
            return _service.GetById(id).AsQueryable();
        }
    }
}`
}