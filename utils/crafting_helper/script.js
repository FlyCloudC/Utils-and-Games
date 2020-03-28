let itemList;
let targetInput, queryButton, output;

window.onload = () => {
  [targetInput, ignoreInput, queryButton, output] =
    ['target-input', 'ignore-input', 'query-button', 'output']
      .map(x => document.getElementById(x));

  let itemArray = Object.entries(craftTable);
  for (let [item, table] of itemArray) {
    if (!table.count) table.count = 1;
    for (let material of table.materialList)
      if (material.length == 1) material.push(1);
  }

  itemList = new Map(itemArray);
}

function toGroup(x) {
  return x < 64 ? x : `(64*${Math.floor(x / 64)}${x % 64 == 0 ? '' : `+${x % 64}`})`;
}

function query() {
  let targetList = targetInput.value
    .split(/[，/,]/)
    .map(x => {
      let [item, count = 1] = x.split('*');
      return { item, count: Number(count) };
    })
  let ignoreList = new Set(ignoreInput.value.split(/[，/,]/));
  console.log(targetList);
  for (let { item } of targetList) {
    if (!itemList.has(item)) {
      output.innerHTML = `找不到${item}`;
      return false;
    }
  }

  let { basicMaterial, madeRoute, extraItem } = solve(targetList, ignoreList);
  //console.log(basicMaterial);
  //console.log(madeRoute);

  //输出基础原料数量，合成路线(所用机器和一次放入数量)
  let text = [];
  text.push('基础材料:');
  text.push(basicMaterial
    .map(({ item, count }) => `${item} * ${toGroup(count)}`)
    .join(' , ')
  );
  text.push('</br>合成路线:');
  text.push(
    madeRoute
      .map(({ product, productCount, machine, materialList }) =>
        `${materialList
          .map(([item, count]) => `${item} * ${toGroup(count)}`)
          .join(' + ')
        } ==(${machine})=> ${product} * ${productCount}
        `
      ).join('</br>')
  );
  console.log(madeRoute);
  if (extraItem.length > 0) {
    text.push('</br>剩余材料:')
    text.push(extraItem
      .map(({ item, count }) => `${item} * ${count}`)
      .join(' , ')
    );
  }
  output.innerHTML = text.join('</br>');
}

//--------------------------------------------------------------

function solve(targetList, ignoreList) {
  let indegree = new Map();//get(物品)==入度
  let needsCount = new Map();//get(物品)==所需的数量
  let productionCount = new Map();//get(物品)==合成这个物品的次数
  //BFS统计入度
  let queue = [];
  for (let { item, count } of targetList) {
    queue.push(item);
    indegree.set(item, 0);
  }
  for (let item of queue) {
    needsCount.set(item, 0);//初始化
    if (!itemList.has(item) || ignoreList.has(item)) continue;
    for (let [material] of itemList.get(item).materialList) {
      if (!indegree.has(material)) {
        indegree.set(material, 0);
        queue.push(material);
      }
      indegree.set(material, indegree.get(material) + 1);
    }
  }

  //拓扑排序
  let stack = [];//[物品1,物品2...]
  queue = [];
  for (let { item, count } of targetList) {
    if (indegree.get(item) == 0) {
      queue.push(item);
      stack.push(item);
    }
    needsCount.set(item, count);
  }
  //for (let product of queue) {
  for (let i = targetList.length - 1; i >= 0;) {
    let product = stack[i--];
    if (!itemList.has(product) || ignoreList.has(product)) continue;
    for (let [material, materialCount] of itemList.get(product).materialList) {
      //按拓扑序操作
      productionCount.set(
        product,
        Math.ceil(needsCount.get(product) / itemList.get(product).count)
      );
      needsCount.set(
        material,
        needsCount.get(material) + productionCount.get(product) * materialCount
      );
      //
      let lastIndehree = indegree.get(material) - 1;
      indegree.set(material, lastIndehree);
      if (lastIndehree == 0) {
        stack[++i] = material;
        queue.push(material);
      }
    }
  }

  //基础原料
  let basicMaterial = [];
  for (let item of needsCount.keys())
    if (!itemList.has(item) || ignoreList.has(item))
      basicMaterial.push({ item, count: needsCount.get(item) });

  //合成路线
  let madeRoute = [];
  //for (let i = queue.length - 1; i >= 0; --i) {
  //  let product = queue[i];
  queue.reverse();
  for (let product of queue) {
    if (itemList.has(product) && !ignoreList.has(product)) {
      let { machine, materialList, count } = itemList.get(product);
      let productCount = productionCount.get(product) * count;
      materialList = materialList.map(
        ([material, materialCount]) =>
          [
            material,
            materialCount * productionCount.get(product)
          ]
      );
      madeRoute.push({ product, productCount, machine, materialList });
    }
  }

  //多余的物品
  let extraItem = [];
  for (let item of productionCount.keys()) {
    let extra =
      productionCount.get(item) * itemList.get(item).count
      % needsCount.get(item);
    if (extra > 0) extraItem.push({ item, count: extra });
  }
  return { basicMaterial, madeRoute, extraItem };
}

function showAllItem() {
  output.innerHTML = Array.from(itemList.keys())
    .map(x => `<a onclick="targetInput.value='${x}',query()">${x}</a>`)
    .join('</br>');
}