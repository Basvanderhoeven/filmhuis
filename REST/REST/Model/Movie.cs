using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string PosterPath { get; set; }
        public string Title { get; set; }
        public string Overview { get; set; }
        public int OrgId { get; set; }
        //[JsonIgnore]
        //public ICollection<Genre>[] Genre {get; set;}
    }
}