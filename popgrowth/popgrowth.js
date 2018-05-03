function nbYear(p0, percent, aug, p) {
  let pop = p0;
  let years = 0;
  percentIncrease = percent / 100;
  while(pop < p) {
    pop += (pop * percentIncrease) + aug;
    years++;
  }
  return years;
}