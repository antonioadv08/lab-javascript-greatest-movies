/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

function ratesAverage(movies) {
  return parseFloat((movies.reduce((acum, current) => acum + parseFloat(current.rate), 0) / movies.length).toFixed(2))
}
console.log(ratesAverage(movies))


function dramaMoviesRate(movies) {
  const arrayDrama = movies.filter(movie => movie.genre == 'Drama')

  if (arrayDrama == []) {
    return 0
  } else
    return parseFloat((arrayDrama.reduce((acum, current) => acum + parseFloat(current.rate), 0) / arrayDrama.length).toFixed(2))
}
console.log(dramaMoviesRate(movies));


function orderByDuration(movies) {

  const arrayDuration = movies.sort(function (a, b) {
    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else if (a.duration = b.duration) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return arrayDuration;
}

console.log(orderByDuration(movies));


function howManyMovies(movies) {

  const arraySteven = movies.filter(movie => movie.genre.includes("Drama") && movie.director == "Steven Spielberg");

  return arraySteven.length;

}

console.log(howManyMovies(movies));



function orderAlphabetically(movie) {
  const arrayOrder = movie.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0
    }
  });
  const firstTitles = arrayOrder.map(list => list.title)
  if (firstTitles.length > 20) {
    return firstTitles.slice(0, 20);
  }
  return firstTitles;
}







describe("Get the average rate - ratesAverage", function () {
  it("Defines ratesAverage", function () {
    expect(typeof ratesAverage).toBe("function");
  });

  it("You should return a number my friend! Check parseFloat method!", function () {
    expect(typeof ratesAverage(movies)).toBe("number");
  });

  it("You should return the average rate of 2 movies with rate 8 each!", function () {
    expect(ratesAverage([{ rate: 8 }, { rate: 8 }])).toBe(8);
  });

  it("It should be rounded to 2 decimals digits", function () {
    expect(
      ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }, { rate: 7 }])
    ).toBeCloseTo(8.25, 2);
  });

  it("It should be rounded to nearest hundredths ", function () {
    expect(ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }])).toBeCloseTo(
      8.67,
      2
    );
  });
});

describe("Average rate of Drama Movies - dramaMoviesRate", function () {
  it("Defines dramaMoviesRate", function () {
    expect(typeof dramaMoviesRate).toBe("function");
  });

  it("You should return a number!", function () {
    expect(typeof dramaMoviesRate(movies)).toBe("number");
  });

  it("Return the rate of a single element movies!", function () {
    expect(dramaMoviesRate([{ genre: ["Drama"], rate: 8 }])).toBe(8);
  });

  it("Return average even if one of the movies does not have rate!", function () {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 8 },
        { genre: ["Drama"], rate: "" }
      ])
    ).toBe(4);
  });

  it("It should return the average of the movies!", function () {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 8 },
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(8);
  });

  it("It should return the average of the movies, float!", function () {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(8.33);
  });

  it("Only Drama Movies! You should return the average of Drama movies only!", function () {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 8 },
        { genre: ["Romance"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(7.5);
  });

  it("Should return 0 if there is no Drama movie!", function () {
    expect(
      dramaMoviesRate([
        { genre: ["Action"], rate: 8 },
        { genre: ["Romance"], rate: 9 },
        { genre: ["Sci-Fi"], rate: 7 }
      ])
    ).toBe(0);
  });
});

describe("Order the movies by duration - orderByDuration", function () {
  it("Defines orderByDuration", function () {
    expect(typeof orderByDuration).toBe("function");
  });

  it("Should return an movies", function () {
    expect(typeof orderByDuration(movies)).toBe("object");
  });

  it("Should return the element in a single element movies", function () {
    expect(orderByDuration([{ duration: 100 }])).toEqual([{ duration: 100 }]);
  });

  it("Return the new movies in ascending order", function () {
    expect(
      orderByDuration([{ duration: 100 }, { duration: 180 }, { duration: 90 }])
    ).toEqual([{ duration: 90 }, { duration: 100 }, { duration: 180 }]);
  });

  it("If two movies have the same length, order them alphabetically by their title", function () {
    expect(
      orderByDuration([
        { title: "abc", duration: 180 },
        { title: "bac", duration: 90 },
        { title: "aab", duration: 90 }
      ])
    ).toEqual([
      { title: "aab", duration: 90 },
      { title: "bac", duration: 90 },
      { title: "abc", duration: 180 }
    ]);
  });
});

describe("Get how many movies - howManyMovies", function () {
  it("Defines howManyMovies", function () {
    expect(typeof howManyMovies).toBe("function");
  });

  it("Should return a number", function () {
    expect(typeof howManyMovies(movies)).toBe("number");
  });

  it("Should return 0 if the movies is empty", function () {
    expect(howManyMovies([])).toBe(0);
  });

  it("Return 0 if he did not direct none of the movies in the movies", function () {
    expect(
      howManyMovies([
        {
          director: "James McTeigue",
          genre: ["Action", "Drama", "Thriller"]
        }
      ])
    ).toBe(0);
  });

  it("Only drama movies! Should return 1", function () {
    expect(
      howManyMovies([
        {
          director: "Steven Spielberg",
          genre: ["Action", "Drama", "Thriller"]
        },
        {
          director: "Steven Spielberg",
          genre: ["Action"]
        }
      ])
    ).toBe(1);
  });

  it("Only Steven Spielberg movies! Should return 2", function () {
    expect(
      howManyMovies([
        {
          director: "Steven Spielberg",
          genre: ["Action", "Drama", "Thriller"]
        },
        {
          director: "James McTeigue",
          genre: ["Action", "Drama"]
        },
        {
          director: "Karl Moses",
          genre: ["Thriller", "Drama"]
        },
        {
          director: "Steven Spielberg",
          genre: ["Drama", "Thriller"]
        }
      ])
    ).toBe(2);
  });

  it("Should return 4", function () {
    expect(howManyMovies(movies)).toBe(4);
  });
});

describe("Order alphabetically - orderAlphabetically", function () {
  it("Defines orderAlphabetically", function () {
    expect(typeof orderAlphabetically).toBe("function");
  });

  it("You should return an movies", function () {
    expect(typeof orderAlphabetically([])).toBe("object");
  });

  it("Only return the title of the movies! Each element should be a string", function () {
    expect(typeof orderAlphabetically([{ title: "aab" }])[0]).toBe("string");
  });

  it("If there are less than 20 elements, return all of them.", function () {
    var moviesArr = [{ title: "aab" }, { title: "bab" }, { title: "acb" }];

    expect(orderAlphabetically(moviesArr).length).toEqual(3);
  });

  it("If there are more than 20 elements, return only 20 of them.", function () {
    var moviesArr = [
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" }
    ];

    expect(orderAlphabetically(moviesArr).length).toEqual(20);
  });

  it("You should order them alphabetically.", function () {
    var moviesArr = [
      { title: "aab" },
      { title: "aaa" },
      { title: "abc" },
      { title: "acb" },
      { title: "abb" }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      "aaa",
      "aab",
      "abb",
      "abc",
      "acb"
    ]);
  });

  it("You should return the top20 after ordering them alphabetically.", function () {
    var moviesArr = [
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aaa" },
      { title: "bbb" },
      { title: "anc" },
      { title: "kns" },
      { title: "zds" },
      { title: "pow" },
      { title: "gda" },
      { title: "res" },
      { title: "ter" },
      { title: "bca" },
      { title: "ccc" },
      { title: "bbt" },
      { title: "qas" },
      { title: "kmn" },
      { title: "frt" },
      { title: "afb" },
      { title: "agb" },
      { title: "apo" },
      { title: "poa" },
      { title: "cdf" },
      { title: "sea" },
      { title: "lom" },
      { title: "acs" },
      { title: "qas" },
      { title: "mns" },
      { title: "bvc" },
      { title: "gha" },
      { title: "lkj" },
      { title: "era" },
      { title: "ert" },
      { title: "tex" },
      { title: "zas" },
      { title: "pol" }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      "aaa",
      "aab",
      "acb",
      "acs",
      "afb",
      "agb",
      "anc",
      "apo",
      "bab",
      "bbb",
      "bbt",
      "bca",
      "bvc",
      "ccc",
      "cdf",
      "era",
      "ert",
      "frt",
      "gda",
      "gha"
    ]);
  });
});

describe("Turn duration of the movies - turnHoursToMinutes", function () {
  it("Defines turnHoursToMinutes", function () {
    expect(typeof turnHoursToMinutes).toBe("function");
  });

  it("Should return an movies", function () {
    expect(typeof turnHoursToMinutes(movies)).toBe("object");
  });

  it("Should return a new movies, not update the original one", function () {
    expect(turnHoursToMinutes(movies)).not.toEqual(movies);
  });

  it("The duration of the movie should be a number", function () {
    expect(typeof turnHoursToMinutes(movies)[0].duration).toBe("number");
  });

  it("The duration of the movie should return the correct number to a short movie - 31 minutes", function () {
    var movieTry = [{ duration: "0h 31min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it("The duration of the movie should return the correct number for really long movie - 341 minutes", function () {
    var movieTry = [{ duration: "5h 41min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it("It should return the correct number when the duration is only in hours", function () {
    var movieTry = [{ duration: "2h" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(120);
  });

  it("It should return the correct number when the duration is only in minutes", function () {
    var movieTry = [{ duration: "54min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(54);
  });
});

describe("Best year average - bestYearAvg", function () {
  it("Defines bestYearAvg", function () {
    expect(typeof bestYearAvg).toBe("function");
  });

  it("Should return null if the movies is empty", function () {
    expect(bestYearAvg([])).toBe(null);
  });

  it("Should return the correct answer to a single element movies", function () {
    expect(bestYearAvg([{ year: "2007", rate: 8 }])).toEqual(
      "The best year was 2007 with an average rate of 8"
    );
  });

  it("Should return the correct answer to a multiple elements movies", function () {
    expect(bestYearAvg(movies)).toEqual(
      "The best year was 1972 with an average rate of 9.2"
    );
  });

  it("Should return the oldest year when there is a tie", function () {
    var newMoviesArr = [
      { year: "2000", rate: 9 },
      { year: "2000", rate: 8 },
      { year: "1978", rate: 10 },
      { year: "1978", rate: 7 }
    ];

    expect(bestYearAvg(newMoviesArr)).toEqual(
      "The best year was 1978 with an average rate of 8.5"
    );
  });
});
