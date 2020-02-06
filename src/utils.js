export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const formDur = sec => {
  const hours = Math.floor(sec / 3660);
  const minutes = `${sec % hours}`.padStart(2, 0);
  return `${hours}ч ${minutes}м`;
};
