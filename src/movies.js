// Iteration 1: All directors? - Get the array of all directors. 
//I have to make a new array that takes "director"key

const movies = require("./data");


function getAllDirectors(filmsArr) {
  const manyDirectors = filmsArr.map((taquillazos) => {
    return taquillazos.director;
  });
  return manyDirectors;

}


/*function getAllDirectors(function(filmsArr) {

return moviesArr.map((movies) => {
    return movie.director;
});

function directors(movie) {
  return movies.director
} */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {

  const filteredMovies = moviesArr.filter((movies) => {
    return movies.director === "Steven Spielberg";
  })
  .filter((movies) => {
    return movies.genre.includes("Drama");
  });
  return filteredMovies.length;
}


//me pide que retorne numero y no se como hacerlo


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(manyScores) {

  if (manyScores.length === 0) {
    return 0;
  }  else {
    let sumOfScores = manyScores.reduce(function (acc, el) {
      return (acc = acc + el.score);
    }, 0);
    return (sumOfScores / movies.score.length)

  }
  console.log(sumOfScores)

  //me pide sumar decimales

  //THIS IS THE GOOD ONE 

  function scoresAverage(manyScores) {

  if (manyScores.length === 0) {
    return 0;
  }  else {
   let total = moviesArr.reduce((acc, movie)=> {
     if (movie,score) { //tenemos en cuenta las pelis que no tiene score
       const updatedAcc = acc + movie.score;
     } else {
       return acc;    
   }
  }, 0); 
 
  return Number ((total /moviesArr.lenght).toFixed(2)) //"number"devuelve strings a numeros

  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArr) { 

    if (!moviesArr.length){

    return 0;
    } else {

      let dramaMovies = moviesArr.filter((movie) =>
      movie.genre.includes("Drama")
      );
      return (scoresAverage //falta algo)
    }
  }

  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(yearsYears) {
    const sortedYears = movies.sort((el1, el2) => {
      if (el1.year > el2.year) {
        return el.year - b.year;

      } else if (el1.year < el2.year) {
        return el1.year -b.year;
      } else {
        return 1
      }
    })

  }
  console.log(sortedYears);





  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArr) {
    

    const moviesArrCopy = moviesArr.map((movie) => {
      return movie; //primero buscamos las peli
    })

    const orderedMovies = moviesArrCopy
      .sort((a.b)=> {
        return.a.title.localeCompare(b.title)
      })
      .slice(0,20) //esto me cuenta del indice 0 al indice 20, le ponemos dos argumentos

      return orderedMovies; 
  }
 

  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes() { }

  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg() { }



  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = {
      getAllDirectors,
      howManyMovies,
      scoresAverage,
      dramaMoviesScore,
      orderByYear,
      orderAlphabetically,
      turnHoursToMinutes,
      bestYearAvg,
    };
  }
