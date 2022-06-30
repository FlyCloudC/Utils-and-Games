class PrimitiveFunction {
  constructor(name, checkArgCount, fun) {
    this.process = fun;
    this.name = name;
    this.checkArgCount = checkArgCount;
  }
}

function numberCheck(args, fname) {
  for (let v of args) {
    if (typeof v !== 'number')
      throw `Exception in ${fname}: ${v} is not a real number`;
  }
}

const primitiveList = [
  new PrimitiveFunction(
    '+',
    arglen => true,
    args => {
      numberCheck(args, '+');
      let res = 0;
      for (let v of args)
        res += v;
      return res;
    },
  ),

  new PrimitiveFunction(
    '*',
    arglen => true,
    args => {
      numberCheck(args, '*');
      let res = 1;
      for (let v of args)
        res *= v;
      return res;
    },
  ),

  new PrimitiveFunction(
    '-',
    arglen => arglen > 0,
    args => {
      numberCheck(args, '-');
      if (args.length === 1)
        return -args[0];
      else {
        let [res, ...rest] = args;
        for (let v of rest)
          res -= v;
        return res;
      }
    },
  ),

  new PrimitiveFunction(
    '/',
    arglen => arglen > 0,
    args => {
      numberCheck(args, '/');
      if (args.length === 1)
        return 1 / args[0];
      else {
        let [res, ...rest] = args;
        for (let v of rest)
          res /= v;
        return res;
      }
    },
  ),

];

{
  const cmp = {
    '=': (x, y) => x === y,
    '>': (x, y) => x > y,
    '<': (x, y) => x < y,
    '>=': (x, y) => x >= y,
    '<=': (x, y) => x <= y,
  }
  for (let fname of Object.keys(cmp)) {
    primitiveList.push(new PrimitiveFunction(
      fname,
      arglen => arglen > 0,
      args => {
        if (args.length === 0)
          throw `Exception: incorrect argument count in call (${fname})`;
        numberCheck(args, fname);
        for (let i = 1; i < args.length; ++i) {
          if (!cmp[fname](args[i - 1], args[i]))
            return false;
        }
        return true;
      },
    ));
  }
}

{

  primitiveList.push(
    new PrimitiveFunction(
      'cons',
      arglen => arglen === 2,
      args => new Pair(...args),
    ),

    new PrimitiveFunction(
      'car',
      arglen => arglen === 1,
      args => {
        let p = args[0];
        if (!(p instanceof Pair))
          throw `Exception in car: ${p} is not a pair`
        return p.x;
      },
    ),

    new PrimitiveFunction(
      'cdr',
      arglen => arglen === 1,
      args => {
        let p = args[0];
        if (!(p instanceof Pair))
          throw `Exception in cdr: ${p} is not a pair`
        return p.y;
      },
    ),

    new PrimitiveFunction(
      'null?',
      arglen => arglen === 1,
      args => args[0] === null,
    ),
  )
}

const basedEmv = {};
for (let pf of primitiveList) {
  basedEmv[pf.name] = pf;
}
