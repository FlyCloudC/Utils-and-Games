let audio, showP;
let map = new Map();

window.onload = function () {
  audio = document.getElementById('preview-audio');
  showP = document.getElementById('show-url');
  for (let key of ['spd', 'pit', 'vol', 'per', 'tex'])
    map.set(key, document.getElementById(key));
}

function say() {
  let url = 'http://tts.baidu.com/text2audio?cuid=baike&lan=zh&ctp=1&pdt=301';
  for (let [key, { value }] of map)
    if(value)
      url += `&${key}=${value}`;
  audio.src = url;
  showP.innerHTML = encodeURI(url);
}