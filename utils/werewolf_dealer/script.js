let selectList, showCard, okButton, inputList;
const cardList = [
  { name: '平民', src: 'pm', team: 'villagers', repeatable: true },
  { name: '预言家', src: 'yyj', team: 'villagers' },
  { name: '女巫', src: 'nw', team: 'villagers' },
  { name: '猎人', src: 'lr', team: 'villagers' },
  { name: '守卫', src: 'sw', team: 'villagers' },
  { name: '白痴', src: 'bc', team: 'villagers' },
  { name: '骑士', src: 'qs', team: 'villagers' },
  { name: '守墓人', src: 'shoumr', team: 'villagers' },
  { name: '猎魔人', src: 'liemr', team: 'villagers' },
  { name: '老流氓', src: 'llw', team: 'villagers' },
  { name: '摄梦人', src: 'smr', team: 'villagers' },
  { name: '乌鸦', src: 'wy', team: 'villagers' },

  { name: '狼人', src: 'langr', team: 'werewolves', repeatable: true },
  { name: '白狼王', src: 'blw', team: 'werewolves' },
  { name: '狼王', src: 'lw', team: 'werewolves' },
  { name: '石像鬼', src: 'sxg', team: 'werewolves' },
  { name: '恶灵骑士', src: 'elqs', team: 'werewolves' },
  { name: '狼美人', src: 'lmr', team: 'werewolves' },
  { name: '隐狼', src: 'yl', team: 'werewolves' },
  { name: '血月使徒', src: 'xyst', team: 'werewolves' },

  { name: '丘比特', src: 'qbt', team: 'others' },
  { name: "盗贼", src: 'dz', team: 'others' }
];
const teamList = {
  villagers: {
    teamName: '好人',
    members: [],
    repeatedMembers: []
  },
  werewolves: {
    teamName: '狼人',
    members: [],
    repeatedMembers: []
  },
  others: {
    teamName: '第三方',
    members: [],
    repeatedMembers: [],
  }
};

window.onload = () => {
  [selectList, showCard, okButton] =
    ['select-list', 'show-card', 'ok-btn']
      .map(x => document.getElementById(x));

  for (let id in cardList) {
    let card = cardList[id];
    card.id = id;
    teamList[card.team][card.repeatable ? 'repeatedMembers' : 'members'].push(card);
  }

  makeSelectList();
  inputList = Array.from(document.getElementsByTagName('input'));
  okButton.onclick = ((g) => () => g.next())(game());
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeSelectList() {
  let inner = [];
  for (let teamId in teamList) {
    let team = teamList[teamId];
    inner.push(`<h2>${team.teamName}阵营</h2>`);
    for (let card of team.repeatedMembers)
      inner.push(`${card.name}数量：<input id="${card.id}" type="number" value="3"><br />`);
    for (let card of team.members)
      inner.push(`<div class="box"><input id="${card.id}" type="checkbox" name="checkbox">${card.name}</div>`);
  }
  selectList.innerHTML = inner.join('');
}

function* game() {
  while (true) {
    let cardToDeal = new Array();
    for (let input of inputList) {
      let id = input.id;
      if (input.checked) cardToDeal.push(cardList[id]);
      else if (input.type == 'number')
        for (let i = 0; i < input.value; ++i)
          cardToDeal.push(cardList[id]);
    }

    if (cardToDeal.length < 3) {
      alert('人数太少');
      yield;
      continue;
    }

    selectList.style.display = 'none';

    shuffle(cardToDeal);

    for (let k = cardToDeal.length - 2, i = k; i < cardToDeal.length; ++i)
      if (cardToDeal[i].name == '盗贼') {
        let j = Math.floor(Math.random() * k);
        [cardToDeal[i], cardToDeal[j]] = [cardToDeal[j], cardToDeal[i]];
        alert([i, j]);
      }

    for (let card of cardToDeal) {
      yield;
      showCard.innerHTML = `<h2>${card.name}</h2>
          <img src="https://langrensha.res.netease.com/pc/gw/20190509150909/data/kapai_peo/${card.src}.png" 
          onerror="this.style.visibility='hidden';"/>`;
      yield;
      showCard.innerHTML = '';
    }

    selectList.style.display = 'block';
    yield;
  }
}