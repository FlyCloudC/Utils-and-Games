let audio, showP;
let key = ['spd', 'pit', 'vol', 'per', 'tex'];
let value= [];

function dg(x){return document.getElementById(x);}

window.onload = function(){
    audio = dg('preview-audio');
    showP = dg('show-url');
    for(let i in key) value[i] = dg(key[i]);
}

function say(){
    let url =  'http://tts.baidu.com/text2audio?cuid=baike&lan=zh&ctp=1&pdt=301';
    for(let i in key)
        if(value[i].value)
            url += `&${key[i]}=${value[i].value}`;
    audio.src = url;
    showP.innerHTML = encodeURI(url);
}