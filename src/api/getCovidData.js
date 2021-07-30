import axios from 'axios';

const fetchData = async () => {
  const { data } = await axios(
    'https://api.covid19api.com/total/country/brazil/status/confirmed?from=2020-03-01T00:00:00Z&to=2021-07-28T00:00:00Z'
  );

  function getNewCasesPerDay(data) {
    let result = [];

    for (let i = 1; i < data.length; i++) {
      result.push(data[i].Cases - data[i - 1].Cases);
    }

    return result;
  }

  function getSevenDaysAverages(data) {
    let from = 0;
    let result = [];

    for (let to = 7; to < data.length; to++) {
      let sevenDays = data.slice(from, to);
      let sum = sevenDays.reduce((acc, curr) => acc + curr);
      result.push(sum / 7);
      from++;
    }

    return result;
  }

  const newCasesPerDay = getNewCasesPerDay(data);

  return getSevenDaysAverages(newCasesPerDay);
};

export default fetchData;
