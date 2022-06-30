function parse(code) {
  let c1 = ` ${code}\n`
    .replace(/;(.*?)\n/g, '')
    .replaceAll('(', ' ( ')
    .replaceAll(')', ' ) ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  let c2 = c1.map(x => {
    let nx = parseFloat(x);
    if (!isNaN(nx))
      return nx;

    else if (x === '#t')
      return true;
    else if (x === '#f')
      return false;
    else
      return x;
  });

  let expList = [[]];
  let nowExpIndex = 0;
  for (let v of c2) {
    switch (v) {
      case '(':
        expList[++nowExpIndex] = [];
        break;
      case ')':
        expList[nowExpIndex - 1].push(expList[nowExpIndex]);
        --nowExpIndex;
        break;
      default:
        expList[nowExpIndex].push(v);
    }
  }
  if (nowExpIndex !== 0)
    throw `Exception: missing ${nowExpIndex} ')'`;

  return expList[0];
}
