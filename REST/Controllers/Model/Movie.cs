
namespace Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string PosterPath { get; set; }
        public string Title { get; set; }
        public int Overview { get; set; }
        public string[] Genre {get; set;}
    }
}