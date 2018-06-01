using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace REST.Controllers
{
    [Route("api/movie")]
    [ApiController]
    public class MovieController : ControllerBase
    {
    private static List<Movie> list = new List<Movie>();
    public MovieController()
    {
        
    }
    static MovieController()
    {
        
    }
    [Route("{id}")]   // api/v1/movie/2
    [HttpGet]
    public IActionResult GetMovie(int id)
    {
        if (list.Exists(d => d.Id == id))
            return NotFound();

        return Ok(list.FirstOrDefault(d => d.Id == id));
    }
    [HttpGet]         // api/v1/movie
    public List<Movie> GetAllMovies()
    {
        return list;
    }
    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteMovie(int id)
    {
        if (list.Exists(d => d.Id == id))
            return NotFound();
        else list.Remove(list.FirstOrDefault(d => d.Id == id));
        //book verwijderen ..
        return NoContent();
    }
    }
}
