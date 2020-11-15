const getArg = (args) => {
  if (args && args.indexOf('=') > 0)
      return args.substr(args.indexOf('=') + 1, args.length);

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

module.exports = {
    getArg,
    getCommand
}