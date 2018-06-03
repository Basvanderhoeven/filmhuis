using System.Collections.Generic;
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();
            
            //Are there already movies present ?
            if (!context.Movies.Any())
            {
                /* Movie interface
                public int Id { get; set; }
                public string PosterPath { get; set; }
                public string Title { get; set; }
                public int Overview { get; set; }
                public string[] Genre {get; set;}
                 */
                var action = new Genre(){
                    Id = 28,
                    Name = "Action"};
                var adventure = new Genre(){
                    Id = 12,
                    Name = "Adventure"};
                var animation = new Genre(){
                    Id = 16,
                    Name = "Animation"};
                var comedy = new Genre(){
                    Id = 35,
                    Name = "Comedy"};
                var crime = new Genre(){
                    Id = 80,
                    Name = "Crime"};
                var documentary = new Genre(){
                    Id = 99,
                    Name = "Documentary"};
                var drama = new Genre(){
                    Id = 18,
                    Name = "Drama"};
                var family = new Genre(){
                    Id = 10751,
                    Name = "Family"};
                var fantasy = new Genre(){
                    Id = 14,
                    Name = "Fantasy"};
                var history = new Genre(){
                    Id = 36,
                    Name = "History"};
                var horror = new Genre(){
                    Id = 27,
                    Name = "Horror"};
                var music = new Genre(){
                    Id = 10402,
                    Name = "Music"};
                var mystery = new Genre(){
                    Id = 9648,
                    Name = "Mystery"};
                var romance = new Genre(){
                    Id = 10749,
                    Name = "Romance"};
                var sciencefiction = new Genre(){
                    Id = 878,
                    Name = "Science Fiction"};
                var tvmovie = new Genre(){
                    Id = 10770,
                    Name = "TV Movie"};
                var thriller = new Genre(){
                    Id = 53,
                    Name = "Thriller"};
                var war = new Genre(){
                    Id = 10752,
                    Name = "War"};
                var western = new Genre(){
                    Id = 37,
                    Name = "Western"
                    };

                
                
                
                
                
                var deadpool2 = new Movie()
                {
                    Id = 383498,
                    PosterPath = "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
                    Title = "Deadpool 2",
                    Overview = "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
                    /*Genre =  new ICollection<Genre> {action, comedy, sciencefiction}, */
                };

                context.Movies.Add(deadpool2);

                var infinitywar = new Movie()
                {
                    Id = 299536,
                    PosterPath = "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                    Title = "Avengers: Infinity War",
                    Overview = "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
                    /* Genre = [adventure, sciencefiction, fantasy, action], */
                };
                context.Movies.Add(infinitywar);
                
                /*
                public int Id { get; set; }
                public string PosterPath { get; set; }
                public string Name { get; set; }
                public int Overview { get; set; }
                public int[] Genre {get; set;}
                 */
                //Create new book
                var bigbang = new Serie()
                {
                    Id = 1418,
                    PosterPath = "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
                    Name = "The Big Bang Theory",
                    Overview = "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
                    /* Genre = [comedy] */
                };
                //Add the book to the collection of books
                context.Series.Add(bigbang);
                var westworld = new Serie()
                {
                    Id = 63247,
                    PosterPath = "/6aj09UTMQNyfSfk0ZX8rYOEsXL2.jpg",
                    Name = "Westworld",
                    Overview = "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.",
                    /* Genre = [sciencefiction, western] */
                };
                //Add the book to the collection of books
                context.Series.Add(westworld);
                //Save all the changes to the DB
                context.SaveChanges();
            }
        }
    }
}