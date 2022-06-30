class LispSyntaxError extends Error { };

function quote(exp) {
  if (isSExperssion(exp)) {
    let res = null;
    for (let i = exp.length - 1; i >= 0; --i) {
      let v = exp[i];
      res = new Pair(quote(v), res);
    }
    return res;
  } else
    return exp;
}

function setVar(varName, value, env) {
  if (env[varName] !== undefined)
    env[varName] = value;
  else if (env[LAST_EMV])
    setVar(varName, value, env[LAST_EMV]);
  else
    env[varName] = value;
}

const syntaxDic = {
  'lambda': (rest, env) => {
    if (rest.length < 2)
      throw new LispSyntaxError();
    let [head, ...body] = rest;
    return new Closure(head, body, env);
  },

  'define': (rest, env) => {
    let [head, ...body] = rest;
    if (isSExperssion(head)) {
      let [fname, ...rhead] = head;
      env[fname] = new Closure(rhead, body, env, fname);
      return undefined;
    }
    else {//is symbol
      if (body.length !== 1)
        throw new LispSyntaxError();
      env[head] = eval(body[0], env);
      return undefined;
    }
  },

  'set!': (rest, env) => {
    if (rest.length !== 2)
      throw new LispSyntaxError();
    let [va, expValue] = rest;//va is symbol
    if (isSExperssion(va) || isNumber(va) || isBoolean(va) || isCharacter(va))
      throw new LispSyntaxError();
    setVar(va, eval(expValue, env), env);
    return undefined;
  },

  'quote': rest => {
    if (rest.length !== 1)
      throw new LispSyntaxError();
    return quote(rest[0]);
  },

  'if': (rest, env) => {
    if (rest.length < 2 || rest.length > 3)
      throw new LispSyntaxError();
    let [pred, expTrue, expFalse] = rest;
    if (eval(pred, env) !== false)
      return eval(expTrue, env);
    else if (expFalse)
      return eval(expFalse, env);
    else
      return undefined;
  },

  'cond': (rest, env) => {
    if (rest.length === 0)
      throw new LispSyntaxError();
    for (let cond of rest) {
      if (!isSExperssion(cond))
        throw new LispSyntaxError();
      if (cond.length === 0)
        throw new LispSyntaxError();
      if (cond.length === 1 && cond[0] === 'else')
        throw 'Exception: misplaced aux keyword else';
    }
    for (let cond of rest) {
      let [pred, ...rest] = cond;
      if (cond.length === 1) {
        let value = eval(pred, env);
        if (value !== false)
          return value;
      }
      else if (pred === 'else' || eval(pred, env) !== false)
        return evalList(rest, env);
    }
    return undefined;
  },

  'and': (rest, env) => {
    let value = true;
    for (let exp of rest) {
      value = eval(exp, env);
      if (value === false)
        return false;
    }
    return value;
  },

  'or': (rest, env) => {
    let value = true;
    for (let exp of rest) {
      value = eval(exp, env);
      if (value !== false)
        break;
    }
    return value;
  }
}
