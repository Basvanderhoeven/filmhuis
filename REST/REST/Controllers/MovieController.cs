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
        public List<Movie> GetAllMovies(string titel, string sort, int? page, string dir = "asc", int length = 20)
        {
            IQueryable<Movie> query = _context.Movies;
            if (!string.IsNullOrWhiteSpace(titel))
                query = query.Where(d => d.Title == titel);

            if(!string.IsNullOrWhiteSpace(sort))
            {
                switch(sort)
                {
                    case "title":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Title);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Title);
                        break;
                }
            }

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);
            return query.ToList();
        }
        [Route("{id}")]   // api/v1/movie/2
        [HttpGet]
        public IActionResult GetMovie(int id)
        {
            var movie = _context.Movies.Find(id);

            if (movie == null)
                return NotFound();

            return Ok(movie);
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteMovie(int id)
        {
            var movie = _context.Movies.Find(id);
            if (movie == null)
                return NotFound();

            //book verwijderen ..
            _context.Movies.Remove(movie);
            _context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
        [HttpPut]
        public IActionResult UpdateMovie([FromBody] Movie newMovie)
        {
            var orgMovie = _context.Movies.Find(newMovie.Id);
            if (orgMovie == null)
                return NotFound();
            orgMovie.Title = newMovie.Title;
            orgMovie.Overview = newMovie.Overview;
            _context.SaveChanges();
            return Ok(orgMovie);
        }
        [HttpPost]
        public IActionResult CreateMovie([FromBody] Movie newMovie)
        {
            IQueryable<Movie> query = _context.Movies;
            query = query.Where(d => d.OrgId == newMovie.OrgId);
            var result = query.ToList();
            if (!result.Any())
            {
                //return query.ToList();
                var duplicate = _context.Movies.Find(newMovie.Id);
                if (duplicate != null)
                    return NotFound();
                _context.Movies.Add(newMovie);
                _context.SaveChanges();
                return Created("", newMovie);
            }
            return NotFound();
        }
    }
}
