using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using viviajar.Database;
using Microsoft.EntityFrameworkCore;


namespace viviajar.Controllers;

[ApiController]
[Route("[controller]")]
public class DestinoController : ControllerBase
{

    [HttpGet(Name = "/destino")]
    public async Task<IActionResult> Get(
        [FromServices] ApplicationDBContext context)
    {
        var Destinos = await context
        .Destinos
        .ToListAsync();
        return Ok(Destinos);
    }
}