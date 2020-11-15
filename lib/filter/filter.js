const isValideName = (animal, criteria) => {
  return animal && animal.name && animal.name.toLowerCase().includes(criteria);
}

const filterAnimals = (animals, criteria) => {
  return animals.filter(animal => {
      return isValideName(animal, criteria);
  });
}

function filterReducerClosure(arg) {
  return reducer = (filtredData, contry) => {
    const tmpData = {}
    tmpData.name = contry.name;

    contry.people.forEach((people) => {
        tmpData.people = tmpData.people || [];
        const tmpPeople = {
            name: people.name,
            animals: filterAnimals(people.animals, arg)
        }

        if (tmpPeople.animals.length)
            tmpData.people.push(tmpPeople)
    });

    if (tmpData.people.length) {
        filtredData.push(tmpData);
    }

    return filtredData;
  };
};

module.exports = {
  filterReducerClosure
}