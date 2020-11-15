const countReducer = (filtredData, contry) => {
  let tmpData = {};
  let tmpPeople = {};
  tmpData.name = contry.name;

  contry.people.forEach((people) => {
      tmpData.people = tmpData.people || [];
      tmpPeople = {...people}
      tmpPeople.name = tmpPeople.name + ` [${tmpPeople.animals.length}]`
      tmpData.people.push(tmpPeople);
  });
  filtredData.push(tmpData);
  return filtredData;
};

module.exports = {
  countReducer
}