// Iteration 1: All directors? - Get the array of all directors. 
//I have to make a new array that takes "director"key

function getAllDirectors(filmsArr) {
  const manyDirectors = filmsArr.map((taquillazos) => {
    return taquillazos.director;
  });
  return manyDirectors; 

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() { }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() { }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

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
