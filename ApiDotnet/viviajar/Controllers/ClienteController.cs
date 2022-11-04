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
public class ClienteController : ControllerBase
{

    [HttpGet(Name = "/cliente")]
    public async Task<IActionResult> Get(
        [FromServices] ApplicationDBContext context)
    {
        var Clientes = await context
        .Clientes
        .ToListAsync();
        return Ok(Clientes);
    }
}