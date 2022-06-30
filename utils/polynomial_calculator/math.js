function __gcd(a, b) {
    return b == 0 ? a : __gcd(b, a % b);
}

function gcd(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (a < b) [a, b] = [b, a];
    return __gcd(a, b);
}

class Q {
    constructor(z = 0, m = 1) {
        let g = gcd(z, m);
        if (m < 0) g = -g;
        this.z = z / g;
        this.m = m / g;
        this.__string = '';
    }

    static zero = new Q();
    static one = new Q(1);

    static add(a = Q.zero, b) {
        return new Q(a.z * b.m + b.z * a.m, a.m * b.m);
    }

    static del(a, b) {
        return new Q(a.z * b.m - b.z * a.m, a.m * b.m);
    }

    static mul(a, b) {
        return new Q(a.z * b.z, a.m * b.m);
    }

    static div(a, b) {
        if (b.z == 0) return;
        return new Q(a.z * b.m, a.m * b.z);
    }

    abs() {
        return new Q(Math.abs(this.z), this.m);
    }

    toString() {
        if (this.__string == '') {
            this.__string = this.m == 1 ? this.z.toString() : `${this.z}/${this.m}`;
        }
        return this.__string;
    }
}

class Pol {
    constructor(coe = []) {
        if (coe instanceof Pol) coe = coe.coe;
        for (let i = 0; i < coe.length; ++i) {
            if (!(coe[i] instanceof Q)) coe[i] = new Q(coe[i]);
        }

        let d = coe.length - 1;
        while (d >= 0 && coe[d].z == 0) --d;
        coe.splice(d + 1);

        this.coe = coe;
        if (coe.length == 0) {
            this.deg = -Infinity;
            this.__string = '0';
        } else {
            this.deg = coe.length - 1;
            this.__string = '';
        }
    }

    static zero = new Pol();
    static one = new Pol([1]);

    static add(f, g) {
        if (f.deg < g.deg) [f, g] = [g, f];
        if (g.deg == -Infinity) return f;

        let coe = [];
        for (let i in g.coe) {
            coe[i] = Q.add(f.coe[i], g.coe[i]);
        }
        for (let i = g.deg + 1; i <= f.deg; ++i) {
            coe[i] = f.coe[i];
        }
        return new Pol(coe);
    }

    static del(f, g) {
        let coe = [];
        for (let i in g.coe) {
            coe[i] = new Q(-g.coe[i].z, g.coe[i].m);
        }
        return Pol.add(f, new Pol(coe));
    }

    static mul(f, g) {
        if (f.deg == -Infinity || g.deg == -Infinity) return Pol.zero;
        let coe = [];
        for (let i = 0; i <= f.deg; ++i) {
            for (let j = 0; j <= g.deg; ++j) {
                coe[i + j] = Q.add(coe[i + j], Q.mul(f.coe[i], g.coe[j]));
            }
        }
        return new Pol(coe);
    }

    static mulX(f, b = Q.zero, n = 0) {
        let coe = [];
        for (let i = n; i <= f.deg + n; ++i) {
            coe[i] = Q.mul(b, f.coe[i - n]);
        }
        for (let i = 0; i < n; ++i) {
            coe[i] = 0;
        }
        return new Pol(coe);
    }

    static div(f, g) {
        let coe = [];
        for (let i = f.deg - g.deg; i >= 0; --i) {
            if (i > f.deg - g.deg) continue;
            coe[i] = Q.div(f.an, g.an);
            f = Pol.del(f, Pol.mulX(g, coe[i], i));
        }
        return { q: new Pol(coe), r: f };
    }

    get an() {
        return this.coe[this.deg];
    }

    toString() {
        if (this.__string == '') {
            let s = [];
            for (let i = this.deg, f = false; i >= 0; --i) {
                if (this.coe[i] == 0) continue;
                let { z, m } = this.coe[i];
                let c = new Q(z < 0 ? -z : z, m);
                if (z < 0) s.push('-');
                else if (f) s.push('+');
                f = true;
                if (c.z != 1 || c.m != 1 || i == 0) s.push(c.toString());
                if (i > 0) s.push('x' + (i > 1 ? toSuper(i) : ''));
            }
            this.__string = s.join(' ');
        }
        return this.__string;
    }
}