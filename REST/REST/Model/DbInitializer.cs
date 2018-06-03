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
                    Name = "Action"};
                var adventure = new Genre(){
                    Name = "Adventure"};
                var animation = new Genre(){
                    Name = "Animation"};
                var comedy = new Genre(){
                    Name = "Comedy"};
                var crime = new Genre(){
                    Name = "Crime"};
                var documentary = new Genre(){
                    Name = "Documentary"};
                var drama = new Genre(){
                    Name = "Drama"};
                var family = new Genre(){
                    Name = "Family"};
                var fantasy = new Genre(){
                    Name = "Fantasy"};
                var history = new Genre(){
                    Name = "History"};
                var horror = new Genre(){
                    Name = "Horror"};
                var music = new Genre(){
                    Name = "Music"};
                var mystery = new Genre(){
                    Name = "Mystery"};
                var romance = new Genre(){
                    Name = "Romance"};
                var sciencefiction = new Genre(){
                    Name = "Science Fiction"};
                var tvmovie = new Genre(){
                    Name = "TV Movie"};
                var thriller = new Genre(){
                    Name = "Thriller"};
                var war = new Genre(){
                    Name = "War"};
                var western = new Genre(){
                    Name = "Western"
                    };
                context.Genres.Add(action);
                context.Genres.Add(adventure);
                context.Genres.Add(animation);
                context.Genres.Add(comedy);
                context.Genres.Add(crime);
                context.Genres.Add(documentary);
                context.Genres.Add(drama);
                context.Genres.Add(family);
                context.Genres.Add(fantasy);
                context.Genres.Add(history);
                context.Genres.Add(horror);
                context.Genres.Add(music);
                context.Genres.Add(mystery);
                context.Genres.Add(romance);
                context.Genres.Add(sciencefiction);
                context.Genres.Add(tvmovie);
                context.Genres.Add(thriller);
                context.Genres.Add(war);
                context.Genres.Add(western);
                var deadpool2 = new Movie()
                {
                    PosterPath = "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
                    Title = "Deadpool 2",
                    Overview = "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
                    //Genre = NotMappedAttribute()
                    /*Genre =  new ICollection<Genre> {action, comedy, sciencefiction}, */
                };
                context.Movies.Add(deadpool2);

                var infinitywar = new Movie()
                {
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
                    PosterPath = "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
                    Name = "The Big Bang Theory",
                    Overview = "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
                    /* Genre = [comedy] */
                };
                //Add the book to the collection of books
                context.Series.Add(bigbang);
                var westworld = new Serie()
                {
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