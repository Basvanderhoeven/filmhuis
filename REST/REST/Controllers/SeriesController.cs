using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace REST.Controllers
{
    [Route("api/series")]
    public class SeriesController : Controller
    {
        private static List<Serie> list = new List<Serie>();
        private LibraryContext _context;
        // GET: Series
        public SeriesController(LibraryContext context)
        {
            _context = context;
        }
        //Filter functie API
        [HttpGet]         // api/series?title=${serieTitel}
        public List<Serie> GetAllSeries(string title)
        {
            IQueryable<Serie> query = _context.Series;
            if (!string.IsNullOrWhiteSpace(title))
                query = query.Where(d => d.Name == title);

            return query.ToList();
        }
        [Route("{id}")]   // api/series/2
        [HttpGet]
        public IActionResult GetSerie(int id)
        {

            var serie = _context.Series.Find(id);

            if (serie == null)
                return NotFound();

            return Ok(serie);
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteSerie(int id)
        {
            var serie = _context.Series.Find(id);
            if (serie == null)
                return NotFound();

            //book verwijderen ..
            _context.Series.Remove(serie);
            _context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
        [HttpPut]
        public IActionResult UpdateSerie([FromBody] Serie newSerie)
        {
            //return Ok(newSerie);
            var orgSerie = _context.Series.Find(newSerie.Id);
            if (newSerie == null)
                return NotFound();
            orgSerie.Name = newSerie.Name;
            orgSerie.Overview = newSerie.Overview;
            _context.SaveChanges();
            return Ok(orgSerie);
        }
        [HttpPost]
        public IActionResult CreateSerie([FromBody] Serie newSerie)
        {
            var duplicate = _context.Series.Find(newSerie.Id);
            if (duplicate != null)
                return NotFound();
            _context.Series.Add(newSerie);
            _context.SaveChanges();
            return Created("", newSerie);
        }
    }
}