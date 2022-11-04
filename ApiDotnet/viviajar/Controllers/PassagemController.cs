using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using viviajar.Database;
using Microsoft.EntityFrameworkCore;

using viviajar.Models;

namespace viviajar.Controllers;

[ApiController]
[Route("[controller]")]
public class PassagemController : ControllerBase
{
    ApplicationDBContext _dbContext;

    public PassagemController(ApplicationDBContext context) {
        _dbContext = context;
    }

    [HttpGet(Name = "/passagem")]
    public List<Passagem> GetAll()
    {
        var passagens = _dbContext.Passagens.Include(x => x.Cliente).Include(y => y.Destino).ToList();
        return passagens;
    }

    [HttpPost(Name = "/passagem")]
    public Passagem Add(Passagem passagem)
    {

        _dbContext.Passagens.Add(passagem);
        _dbContext.SaveChanges();
        
        return passagem;
    }
}