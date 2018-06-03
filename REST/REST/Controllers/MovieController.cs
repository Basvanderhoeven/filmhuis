using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace REST.Controllers
{
    [Route("api/movies")]
    public class MovieController : ControllerBase
    {
        private static List<Movie> list = new List<Movie>();
        private LibraryContext _context;
        public MovieController(LibraryContext context)
        {
                _context = context;
        }
        static MovieController()
        {
        
        }
        
        [HttpGet]         // api/v1/movie
        public List<Movie> GetAllMovies()
        {
            return _context.Movies.ToList();
        }
        [Route("{id}")]   // api/v1/movie/2
        [HttpGet]
        public IActionResult GetMovie(int id)
        {
            var movie = _context.Series.Find(id);

            if (movie == null)
                return NotFound();

            return Ok(movie);
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteMovie(int id)
        {
            var movie = _context.Series.Find(id);
            if (movie == null)
                return NotFound();

            //book verwijderen ..
            _context.Series.Remove(movie);
            _context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
    
        [HttpPost]
        public IActionResult CreateMovie([FromBody] Movie newMovie)
        {
                _context.Movies.Add(newMovie);
                _context.SaveChanges();
                return Created("", newMovie);
        }
    }
}
