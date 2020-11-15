const { getArg, getCommand } = require('./lib/cli');
const { filterReducerClosure, countReducer } = require('./lib');
const { data } = require('./data');

const [args] = process.argv.slice(2);
const command = getCommand(args);
const arg = getArg(args);

const init = (data) => {

    switch (command) {
        case 'filter':
            console.log('*****************  F I L T R I N G   D A T A  ***************');
            if (!arg) {
                console.log(data);
                break;
            }
            let filtredData = data.reduce(filterReducerClosure(arg), []);
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

init(data);