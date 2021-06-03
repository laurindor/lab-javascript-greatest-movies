// Iteration 1: All directors? - Get the array of all directors. 
//I have to make a new array that takes "director"key

const movies = require("./data");


function getAllDirectors(filmsArr) {
  const manyDirectors = filmsArr.map((taquillazos) => {
    return taquillazos.director;
  });
  return manyDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {

  const filteredMovies = moviesArr.filter((movies) => {
    return movies.director === "Steven Spielberg"
  }).filter((movies) => {
    return movies.genre.includes("Drama")
    return movies.genre.includes("Drama")
  })
  return filteredMovies.length
}

console.log (filteredMovies)

//me pide que retorne numero y no se como hacerlo


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(manyScores) {
  if (manyScores.length === 0) {
    return 0;
  }
  else {
    const sumOfScores = manyScores.reduce(function (acc, el) {
      return (acc = acc + el.score);
    }, 0);
    return (sumOfScores / movies.score.length)

  }
  console.log(sumOfScores)

  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore() { }

  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(yearsYears) {
    const sortedYears = movies.sort((el1, el2) => {
      if (el1 === el2) {
        return 0
      } else if (el1 < el2) {
        return -1
      } else {
        return 1
      }
    })


  }
  console.log(sortedYears);

  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(lookAlpha) {
    //if(movies< "me falta poner las primeras 20 posiciones")
    let descendingArray = movies.sort((a, b) => {
      return b - a;
    })

  }
  console.log(descendingArray)

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
