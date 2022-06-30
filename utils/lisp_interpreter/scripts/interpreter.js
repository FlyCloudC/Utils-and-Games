function isSExperssion(exp) {
  return Array.isArray(exp);
}

function isBoolean(exp) {
  return typeof exp === 'boolean';
}

function isNumber(exp) {
  return typeof exp === 'number';
}

function isCharacter(exp) {
  return typeof exp === 'string' && exp.charAt(0) === '#' && exp.charAt(1) === '\\';
}
//------------------------------------
class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    if (isList(this)) {
      let res = [];
      for (let p = this; p !== null; p = p.y)
        res.push(p.x.toString())
      return `(${res.join(' ')})`;
    }
    else
      return `(${this.x} . ${this.y})`;
  }
}

function isEmptyList(v) {
  return v === null;
}

function isList(v) {
  return v === null ||
    v instanceof Pair && isList(v.y);
}
//------------------------------------
class Closure {
  constructor(head, body, env, name) {
    this.head = head;
    this.body = body;
    this.env = env;
    this.name = name;
  }
}

//------------------------------------
const LAST_EMV = Symbol('LAST_EMV');
function bindVar(vars, values, oldEmv) {
  let newEmv = {};
  for (let i = 0; i < vars.length; ++i) {
    newEmv[vars[i]] = values[i];
  }
  newEmv[LAST_EMV] = oldEmv;
  return newEmv;
}

function lookInEmv(symbol, env) {
  let value = env[symbol];
  if (value !== undefined)
    return value;
  else if (env[LAST_EMV] !== undefined) {
    return lookInEmv(symbol, env[LAST_EMV]);
  } else
    throw `Exception: variable ${symbol} is not bound`;
}
//------------------------------------
function eval(exp, env) {
  if (!isSExperssion(exp)) {//exp is string
    if (isNumber(exp) || isBoolean(exp) || isCharacter(exp))
      return exp;

    else//exp is symbol
      return lookInEmv(exp, env);
  }

  else {//exp is array
    let [head, ...rest] = exp;

    if (syntaxDic[head]) {
      try {
        return syntaxDic[head](rest, env);
      }
      catch (err) {
        if (err instanceof LispSyntaxError)
          throw `Exception: invalid syntax ${exp}`;
        else
          throw err;
      }
    }

    else {//exp is function call
      let value = [];
      for (let e of exp) {
        value.push(eval(e, env));
      }
      let [headValue, ...restValues] = value;
      return apply(headValue, restValues);
    };
  }
}

function evalList(expList, env) {
  let res;
  for (let exp of expList)
    res = eval(exp, env);
  return res;
}

function apply(procedure, args) {
  if (procedure instanceof Closure) {
    if (procedure.head.length !== args.length)
      throw `Exception: incorrect number of arguments to ${unEval(procedure)}`;
    let res;
    let newEmv = bindVar(procedure.head, args, procedure.env);
    for (let exp of procedure.body) {
      res = eval(exp, newEmv);
    }
    return res;
  }
  else if (procedure instanceof PrimitiveFunction) {
    if (!procedure.checkArgCount(args.length))
      throw `Exception: incorrect number of arguments to ${unEval(procedure)}`;
    return procedure.process(args);
  }
  else
    throw `Exception: attempt to apply non-procedure ${procedure}`;
}

function unEval(value) {
  if (value === null)
    return '()';

  let t = typeof value;
  if (t === 'boolean') {
    return value === false ? '#f' : '#t';
  }
  else if (t === 'number' || t === 'string')
    return value;
  else if (value instanceof Pair) {
    if (isList(value)) {
      let res = [];
      for (let p = value; p !== null; p = p.y)
        res.push(unEval(p.x))
      return `(${res.join(' ')})`;
    }
    else
      return `(${unEval(value.x)} . ${unEval(value.y)})`;
  } else if (value instanceof PrimitiveFunction || value instanceof Closure) {
    let name = value.name;
    return name ? `#<procedure ${name}>` : '#<procedure>';
  }
}
