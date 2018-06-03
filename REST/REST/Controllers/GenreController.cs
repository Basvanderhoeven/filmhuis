using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace REST.Controllers
{
    [Route("api/genres")]
    public class GenreController : Controller
    {
        private static List<Genre> list = new List<Genre>();
        private LibraryContext _context;
        // GET: Series
        public GenreController(LibraryContext context)
        {
            _context = context;
        }
        [HttpGet]         // api/series
        public List<Genre> GetAllGenres()
        {
            return _context.Genres.ToList();
        }
        [Route("{id}")]   // api/series/2
        [HttpGet]
        public IActionResult GetGenre(int id)
        {
            var genre = _context.Genres.Find(id);

            if (genre == null)
                return NotFound();

            return Ok(genre);
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteGenre(int id)
        {
            var genre = _context.Genres.Find(id);
            if (genre == null)
                return NotFound();

            //book verwijderen ..
            _context.Genres.Remove(genre);
            _context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
        [HttpPut]
        public IActionResult UpdateGenre([FromBody] Genre newGenre)
        {
            var orgGenre = _context.Movies.Find(newGenre.Id);
            if (newGenre == null)
                return NotFound();
            orgGenre.Title = newGenre.Name;
            _context.SaveChanges();
            return Ok(orgGenre);
        }
        [HttpPost]
        public IActionResult CreateGenre([FromBody] Genre newGenre)
        {
            _context.Genres.Add(newGenre);
            _context.SaveChanges();
            return Created("", newGenre);
        }
    }
}