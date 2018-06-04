using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Serie
    {
        /*
        id : number,
        name : string,
        overview : string,
        genres : number[],
        first_air_date : string,
        genres_str : string[],
        poster_path : string
         */
        public int Id { get; set; }
        public string PosterPath { get; set; }
        public string Name { get; set; }
        public string Overview { get; set; }
        public int OrgId { get; set; }
        //[JsonIgnore]
        //public ICollection<Genre>[] Genre {get; set;}
    }
}