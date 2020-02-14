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
  inputList = Array.from(document.getElementsByName('checkbox'));
  okButton.onclick = ((g) => () => g.next())(game());
  showCard.style.display = 'none';
}

function makeSelectList() {
  let inner = [];
  for (let teamId in teamList) {
    let team = teamList[teamId];
    inner.push(`<h2>${team.teamName}阵营</h2>`);
    for (let card of team.repeatedMembers)
      inner.push(`${card.name}数量：<input id="${card.id}" type="number" placeholder="3"><br />`);
    for (let card of team.members)
      inner.push(`<input id="${card.id}" type="checkbox" name="checkbox">${card.name}`);
  }
  selectList.innerHTML = inner.join('');
}



function* game() {
  selectList.style.display = 'none';
  showCard.style.display = 'block';



  alert(0);
  yield 1;
  alert(1);
  yield 2;
  selectList.style.display = 'block';
  showCard.style.display = 'none';
  return 0;
}