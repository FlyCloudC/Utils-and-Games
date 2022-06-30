const viewList = [
    {
        title: '多项式gcd',
        inputName: ['多项式f(x)', '多项式g(x)'],
        doing: (a, b) => {
            let [f, g] = [a, b].map(x => new Pol(x.split(' ').reverse()));
            let { d, output } = gcdP(f, g);
            return `最大公因式：${d}<br>${output.join('<br>')}`;
        },
    },
    {
        title: '多项式exgcd',
        inputName: ['多项式f(x)', '多项式g(x)'],
        doing: (a, b) => {
            let [f, g] = [a, b].map(x => new Pol(x.split(' ').reverse()));
            let { output } = exgcdP(f, g);
            return output.join('<br>');
        },
    },
];

function __gcdP(f, g, output) {
    if (g.deg == -Infinity) return f;
    let { q, r } = Pol.div(f, g);
    output.push(`(${f}) = (${q})(${g}) + (${r})`);
    return __gcdP(g, r, output);
}

function gcdP(f, g, output = []) {
    if (f.deg < g.deg) [f, g] = [g, f];
    let res = __gcdP(f, g, output);
    return { d: Pol.mulX(res, Q.div(Q.one, res.an)), output };
}

function __exgcdP(f, g, output) {
    if (g.deg == -Infinity) {
        return { d: f, u: Pol.one, v: Pol.zero };
    }
    let { q, r } = Pol.div(f, g);
    output.push(`${f} = (${q})(${g}) + (${r})`);

    let { d, u: u1, v: v1 } = __exgcdP(g, r, output);
    let u = v1;
    let v = Pol.del(u1, Pol.mul(v1, q));
    output.push(`${d} = (${u})(${f})+(${v})(${g})`);
    return { d, u, v };
}

function exgcdP(f, g, output = []) {
    if (f.deg < g.deg) [f, g] = [g, f];
    return { ...__exgcdP(f, g, output), output };
}
