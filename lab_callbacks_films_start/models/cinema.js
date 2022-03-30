const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(){
  return this.films.map(film => film.title);
}

Cinema.prototype.getFilmByTitle = function(title){
  return this.films.find(film => film.title === title);
}

Cinema.prototype.filmsByGenre = function(genre){
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.filmsByYear = function(year){
  return this.films.some(film => film.year === year);
}

Cinema.prototype.checkOverLength = function(length){
  return this.films.every(film => film.length > length);
}

Cinema.prototype.sumOfLength = function(){
  return this.films.reduce((running, current) => {
    return running + current.length;
  }, 0)
}

module.exports = Cinema;
