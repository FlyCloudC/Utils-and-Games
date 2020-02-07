let audio, showP;
let urlList = new Map();

window.onload = function () {
  [audio, showP] = ['preview-audio', 'show-url'].map(x => document.getElementById(x));
  for (let key of ['spd', 'pit', 'vol', 'per', 'tex'])
    urlList.set(key, document.getElementById(key));
}

function say() {
  let url = 'http://tts.baidu.com/text2audio?cuid=baike&lan=zh&ctp=1&pdt=301';
  for (let [key, { value }] of urlList)
    if (value)
      url += `&${key}=${value}`;
  audio.src = url;
  showP.innerHTML = encodeURI(url);
}
