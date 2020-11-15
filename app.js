const inputData = require('./data');

const getArg = (args) => {
    console.log('args: ', args);
    if (args && args.indexOf('=') > 0)
        return args.substr(args.indexOf('=') + 1, args.length);
    console.log('else');
    return undefined;
}

const getCommand =(args) => {
    if (!args) {
        return undefined;
    }

    while(args.charAt(0) == '-') {
        args = args.substr(1, args.length);
    }
    if(args.indexOf('=') > 0) {
        return args.substr(0, args.indexOf('='));
    }
    return args.substr(0, args.length);
}

const isValideName = (animal, criteria) => {
    return animal && animal.name && animal.name.toLowerCase().includes(criteria);
}

const filterAnimals = (animals, criteria) => {
    return animals.filter(animal => {
        return isValideName(animal, criteria);
    });
}

const filterReducer = (filtredData, contry) => {
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

const [args] = process.argv.slice(2);
const command = getCommand(args);
const arg = getArg(args);

const init = (inputData) => {
    let {data} = inputData;

    switch (command) {
        case 'filter':
            console.log('*****************  F I L T R I N G   D A T A  ***************');
            if (!arg) {
                console.log(data);
                break;
            }
            let filtredData = data.reduce(filterReducer, []);
            console.log(JSON.stringify(filtredData,null, 2));
            break;
        case 'count':
            console.log('*****************  C O U N T I N G   D A T A  ***************');
            let countedData = data.reduce(countReducer, []);
            console.log(JSON.stringify(countedData, null, 2));
            break;
        default:
            console.error('invalid args');
            break;
    }
}

init(inputData);