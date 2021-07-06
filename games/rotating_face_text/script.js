let show, say;
let state = [
'(´･ω･`)',
'( ´･ω･)',
'(  ´･ω)',
'(   ´･)',
'(    ´)',
'(     )',
'(`    )',
'(･`   )',
'(ω･`  )',
'(･ω･` )'];
let now, timer, v;

function dg(x){ return document.getElementById(x);}

window.onload = function(){
	for(let s of state) s = s.replace(/ /g, '&nbsp');
	
    show = dg("show");
    say = dg("say");
    now = 0;
    v = 0;
}

function speedUp(){
	v += 3;
	clearTimeout(timer);
    timer = setTimeout(run, 1000 / v);
}

function run(){
	++now;
	if (now == state.length) now = 0;
    show.innerHTML = state[now];
    
    v -= 5 / v + v / 200;
    if(v > 0.1) {
      timer = setTimeout(run, 1000 / v);
      say.innerHTML = '转呀转~';
    }
    else  {
      clearTimeout(timer);
      timer = null;
      v = 0;
      say.innerHTML = '歇会…';
    }
}