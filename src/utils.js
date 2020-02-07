/**
 * Выбирает множественную форму слова на основании числа.
 * Пример: declOfNum(3, ["билет", "билета", "билетов"]) // => "билета"
 * @param {Number} number
 * @param {Array[String]} titles
 */
export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

/**
 * Трансформирует секунды в формат часы-минуты.
 * Пример: formDur(90) // => "1ч 30м"
 * @param {Number} sec
 * @returns {String}
 */
export const formDur = sec => {
  const hours = Math.floor(sec / 3660);
  const minutes = `${sec % hours}`.padStart(2, 0);
  return `${hours}ч ${minutes}м`;
};
