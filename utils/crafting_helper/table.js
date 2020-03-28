let craftTable = {
  //武器
  '奶奶的拐杖': {
    machine: '高级工作台',
    materialList: [
      ['橡木原木', 3]
    ]
  },
  '爷爷的拐杖': {
    machine: '高级工作台',
    materialList: [
      ['橡木原木', 3],
      ['皮革', 2]
    ]
  },
  '处决之剑': {
    machine: '高级工作台',
    materialList: [
      ['绿宝石', 2],
      ['魔法因子-II', 2],
      ['烈焰棒']
    ]

  },
  '吸血鬼之刀': {
    machine: '魔法工作台',
    materialList: [
      ['凋灵骷髅头颅', 2],
      ['烈焰棒']
    ]
  },
  '地震斧': {
    machine: '魔法工作台',
    materialList: [
      ['硬化金属', 3],
      ['元素法杖', 2]
    ]
  },
  '灵魂绑定剑': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石剑']
    ]
  },
  '灵魂绑定剑': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石剑']
    ]
  },
  '灵魂绑定三叉戟': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['三叉戟']
    ]
  },
  '灵魂绑定弓': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['弓']
    ]
  },
  '灵魂绑定剑': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石剑']
    ]
  },
  '爆裂之弓': {
    machine: '魔法工作台',
    materialList: [
      ['木棍', 2],
      ['火药', 2],
      ['硫酸盐'],
      ['元素法杖-火']
    ]
  },
  '冰封之弓': {
    machine: '魔法工作台',
    materialList: [
      ['木棍', 2],
      ['冰', 2],
      ['浮冰'],
      ['元素法杖-水']
    ]
  },
  //物品
  '便携工作台': {
    machine: '高级工作台',
    materialList: [
      ['书'],
      ['工作台']
    ]
  },
  '便携垃圾箱': {
    machine: '高级工作台',
    materialList: [
      ['铁锭', 8]
    ]
  },
  '破布': {
    machine: '高级工作台',
    materialList: [
      ['布', 6],
      ['线', 2]
    ]
  },
  '绷带': {
    machine: '高级工作台',
    materialList: [
      ['破布', 2],
      ['线']
    ]
  },
  '夹板': {
    machine: '高级工作台',
    materialList: [
      ['木棍', 3],
      ['铁锭', 2]
    ],
    'count': 4
  },
  '维他命': {
    machine: '高级工作台',
    materialList: [
      ['锡罐'],
      ['苹果'],
      ['红色蘑菇'],
      ['糖']
    ]
  },
  '药物': {
    machine: '高级工作台',
    materialList: [
      ['维他命'],
      ['浓奶油'],
      ['糖']
    ]
  },
  '小型背包': {
    machine: '高级工作台',
    materialList: [
      ['皮革', 5],
      ['金锭(6克拉)', 2],
      ['箱子']
    ]
  },
  '普通背包': {
    machine: '高级工作台',
    materialList: [
      ['皮革', 5],
      ['金锭(10克拉)', 2],
      ['小型背包']
    ]
  },
  '中型背包': {
    machine: '高级工作台',
    materialList: [
      ['皮革', 5],
      ['金锭(14克拉)', 2],
      ['普通背包']
    ]
  },
  '编织背包': {
    machine: '高级工作台',
    materialList: [
      ['布', 5],
      ['金锭(16克拉)', 2],
      ['中型背包']
    ]
  },
  '镀金背包': {
    machine: '高级工作台',
    materialList: [
      ['皮革', 2],
      ['金锭(22克拉)', 4],
      ['编织背包']
    ]
  },
  '金光闪闪的背包': {
    machine: '高级工作台',
    materialList: [
      ['皮革', 2],
      ['金锭(24克拉)', 4],
      ['镀金背包']
    ]
  },
  '灵魂绑定背包': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['末影因子-II', 4],
      ['编织背包']
    ]
  },
  '小冰柜': {
    machine: '高级工作台',
    materialList: [
      ['铝锭', 5],
      ['布', 3],
      ['冷却装置']
    ]
  },
  //基础机器
  '高级工作台': {
    machine: '多方块结构',
    materialList: [
      ['工作台'],
      ['发射器']
    ]
  },
  '磨石': {
    machine: '多方块结构',
    materialList: [
      ['橡木栅栏'],
      ['发射器']
    ]
  },
  '盔甲锻造台': {
    machine: '多方块结构',
    materialList: [
      ['铁砧'],
      ['发射器']
    ]
  },
  '矿石粉碎机': {
    machine: '多方块结构',
    materialList: [
      ['铁栏杆', 2],
      ['地狱砖栅栏'],
      ['发射器']
    ]
  },
  '压缩机': {
    machine: '多方块结构',
    materialList: [
      ['活塞', 2],
      ['地狱砖栅栏'],
      ['发射器']
    ]
  },
  '冶炼炉': {
    machine: '多方块结构',
    materialList: [
      ['地狱砖块', 2],
      ['地狱砖栅栏'],
      ['发射器'],
      ['打火石']
    ]
  },
  '压力机': {
    machine: '多方块结构',
    materialList: [
      ['活塞', 4],
      ['平滑石台阶', 2],
      ['炼药锅'],
      ['玻璃'],
      ['发射器']
    ]
  },
  '魔法工作台': {
    machine: '多方块结构',
    materialList: [
      ['书架'],
      ['工作台'],
      ['发射器']
    ]
  },
  '洗矿机': {
    machine: '多方块结构',
    materialList: [
      ['炼药锅'],
      ['橡木栅栏'],
      ['发射器']
    ]
  },
  '台锯': {
    machine: '多方块结构',
    materialList: [
      ['平滑石台阶', 2],
      ['铁块'],
      ['切石机']
    ]
  },
  '挖矿机': {
    machine: '多方块结构',
    materialList: [
      ['铁块', 4],
      ['太阳能板', 2],
      ['箱子'],
      ['漏斗'],
      ['发射器']
    ]
  },
  '高级挖矿机': {
    machine: '多方块结构',
    materialList: [
      ['金块(24克拉)', 4],
      ['太阳能板', 2],
      ['箱子'],
      ['漏斗'],
      ['发射器']
    ]
  },
  '自动淘金机': {
    machine: '多方块结构',
    materialList: [
      ['橡木活板门'],
      ['炼药锅']
    ]
  },
  '榨汁机': {
    machine: '多方块结构',
    materialList: [
      ['地狱砖栅栏'],
      ['玻璃'],
      ['发射器']
    ]
  },
  '物品输出箱': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 5],
      ['漏斗'],
      ['箱子']
    ]
  },
  '自动点火机': {
    machine: '高级工作台',
    materialList: [
      ['电动马达', 2],
      ['钢板', 2],
      ['基础电路板'],
      ['打火石'],
      ['漏斗']
    ]
  },
  '搅拌机': {
    machine: '多方块结构',
    materialList: [
      ['橡木台阶', 6],
      ['炼药锅']
    ]
  },
  '坩埚': {
    machine: '高级工作台',
    materialList: [
      ['陶瓦', 6],
      ['打火石']
    ]
  },
  '强化熔炉-I': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['熔炉']
    ]
  },
  '强化熔炉-II': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-I']
    ]
  },
  '强化熔炉-III': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-II']
    ]
  },
  '强化熔炉-IV': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-III']
    ]
  },
  '强化熔炉-V': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-IV']
    ]
  },
  '强化熔炉-VI': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-V']
    ]
  },
  '强化熔炉-VII': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-VI']
    ]
  },
  '强化熔炉-VIII': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-VII']
    ]
  },
  '强化熔炉-IX': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-VIII']
    ]
  },
  '强化熔炉-X': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-IX']
    ]
  },
  '强化熔炉-XI': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-X']
    ]
  },
  '强化合金熔炉': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 4],
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化熔炉-XI']
    ]
  },
  '黑金刚石镶边熔炉': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石', 4],
      ['加热线圈', 2],
      ['电动马达'],
      ['基础电路板'],
      ['强化合金熔炉']
    ]
  },
  '方块放置机': {
    machine: '高级工作台',
    materialList: [
      ['金锭(4克拉)', 4],
      ['铁锭', 2],
      ['活塞', 2],
      ['电动马达']
    ]
  },
  //工具
  '淘金盘': {
    machine: '高级工作台',
    materialList: [
      ['石头', 5],
      ['碗']
    ]
  },
  '下界淘金盘': {
    machine: '高级工作台',
    materialList: [
      ['地狱砖', 5],
      ['淘金盘']
    ]
  },
  '抓钩': {
    machine: '高级工作台',
    materialList: [
      ['锁链', 2],
      ['钩子']
    ]
  },
  '熔炉镐': {
    machine: '高级工作台',
    materialList: [
      ['岩浆水晶', 3],
      ['硅铁', 2]
    ]
  },
  '伐木斧': {
    machine: '魔法工作台',
    materialList: [
      ['人造钻石', 2],
      ['镀金铁锭', 2],
      ['人造绿宝石']
    ]
  },
  '刷怪笼之镐': {
    machine: '魔法工作台',
    materialList: [
      ['硅铁', 3],
      ['镀金铁锭', 2]
    ]
  },
  '赫拉克勒斯之镐': {
    machine: '魔法工作台',
    materialList: [
      ['硬化金属', 3],
      ['硅铁', 2]
    ]
  },
  '爆炸镐': {
    machine: '魔法工作台',
    materialList: [
      ['硅铁', 2],
      ['TNT', 2],
      ['人造钻石']
    ]
  },
  '爆炸铲': {
    machine: '魔法工作台',
    materialList: [
      ['硅铁'],
      ['TNT'],
      ['人造钻石']
    ]
  },
  '寻矿镐': {
    machine: '魔法工作台',
    materialList: [
      ['硅铁', 2],
      ['指南针', 2],
      ['人造钻石']
    ]
  },
  '钴镐': {
    machine: '高级工作台',
    materialList: [
      ['钴锭', 2],
      ['镍锭', 3],
    ]
  },
  '矿脉镐': {
    machine: '魔法工作台',
    materialList: [
      ['镀金铁锭', 2],
      ['绿宝石矿石', 2],
      ['人造钻石']
    ]
  },
  '灵魂绑定镐': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石镐']
    ]
  },
  '灵魂绑定斧': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石斧']
    ]
  },
  '灵魂绑定铲': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石铲']
    ]
  },
  '灵魂绑定锄': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石锄']
    ]
  },
  //资源
  '强化合金锭': {
    machine: '冶炼炉',
    materialList: [
      ['大马士革钢锭'],
      ['硬化金属'],
      ['科林斯青铜锭'],
      ['焊锡锭'],
      ['银铜合金锭'],
      ['金锭(24克拉)']
    ]
  },
  '硬化金属': {
    machine: '冶炼炉',
    materialList: [
      ['大马士革钢锭'],
      ['硬铝锭'],
      ['压缩碳'],
      ['铝青铜锭']
    ]
  },
  '大马士革钢锭': {
    machine: '冶炼炉',
    materialList: [
      ['钢锭'],
      ['铁粉'],
      ['碳'],
      ['铁锭']
    ]
  },
  '钢锭': {
    machine: '冶炼炉',
    materialList: [
      ['铁粉'],
      ['碳'],
      ['铁锭']
    ]
  },
  '青铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['铜粉'],
      ['锡粉'],
      ['铜锭']
    ]
  },
  '硬铝锭': {
    machine: '冶炼炉',
    materialList: [
      ['铝粉'],
      ['铜粉'],
      ['铝锭']
    ]
  },
  '银铜合金锭': {
    machine: '冶炼炉',
    materialList: [
      ['银粉'],
      ['铜粉'],
      ['银锭']
    ]
  },
  '黄铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['铜粉'],
      ['锌粉'],
      ['铜锭']
    ]
  },
  '铝黄铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['铝粉'],
      ['黄铜锭'],
      ['铝锭']
    ]
  },
  '铝青铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['铝粉'],
      ['青铜锭'],
      ['铝锭']
    ]
  },
  '科林斯青铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['银粉'],
      ['金粉'],
      ['铜粉'],
      ['青铜锭']
    ]
  },
  '焊锡锭': {
    machine: '冶炼炉',
    materialList: [
      ['铅粉'],
      ['锡粉'],
      ['铅锭']
    ]
  },
  '人造蓝宝石': {
    machine: '冶炼炉',
    materialList: [
      ['铝粉'],
      ['玻璃'],
      ['玻璃板'],
      ['铝锭'],
      ['青金石']
    ]
  },
  '黑金刚石原矿': {
    machine: '冶炼炉',
    materialList: [
      ['人造钻石'],
      ['碳块'],
      ['玻璃板']
    ]
  },
  '镍锭': {
    machine: '冶炼炉',
    materialList: [
      ['铁粉'],
      ['铁锭'],
      ['铜粉']
    ]
  },
  '钴锭': {
    machine: '冶炼炉',
    materialList: [
      ['铁粉'],
      ['铜粉'],
      ['镍锭']
    ]
  },
  '硅铁': {
    machine: '冶炼炉',
    materialList: [
      ['铁锭'],
      ['铁粉'],
      ['硅']
    ]
  },
  '镀金铁锭': {
    machine: '冶炼炉',
    materialList: [
      ['金锭(24克拉)'],
      ['铁粉']
    ]
  },
  '人造绿宝石': {
    machine: '冶炼炉',
    materialList: [
      ['人造蓝宝石'],
      ['铝粉'],
      ['铝锭'],
      ['玻璃板']
    ]
  },
  '红石合金锭': {
    machine: '冶炼炉',
    materialList: [
      ['红石粉'],
      ['红石块'],
      ['硅铁'],
      ['硬化金属']
    ]
  },
  '人造钻石': {
    machine: '压力机',
    materialList: [
      ['碳块']
    ]
  },
  '黑金刚石': {
    machine: '压力机',
    materialList: [
      ['黑金刚石原矿']
    ]
  },
  '铜锭': {
    machine: '冶炼炉',
    materialList: [
      ['铜粉']
    ]
  },
  '锡锭': {
    machine: '冶炼炉',
    materialList: [
      ['锡粉']
    ]
  },
  '银锭': {
    machine: '冶炼炉',
    materialList: [
      ['银粉']
    ]
  },
  '铅锭': {
    machine: '冶炼炉',
    materialList: [
      ['铅粉']
    ]
  },
  '铝锭': {
    machine: '冶炼炉',
    materialList: [
      ['铝粉']
    ]
  },
  '锌锭': {
    machine: '冶炼炉',
    materialList: [
      ['锌粉']
    ]
  },
  '镁锭': {
    machine: '冶炼炉',
    materialList: [
      ['镁粉']
    ]
  },
  '硫酸盐': {
    machine: '矿石粉碎机',
    materialList: [
      ['地狱岩', 16]
    ]
  },
  '碳': {
    machine: '压缩机',
    materialList: [
      ['煤炭', 8]
    ]
  },
  '压缩碳': {
    machine: '压缩机',
    materialList: [
      ['碳', 4]
    ]
  },
  '碳块': {
    machine: '高级工作台',
    materialList: [
      ['压缩碳', 8],
      ['燧石']
    ]
  },
  '金锭(24克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(22克拉)']
    ]
  },
  '金锭(22克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(20克拉)']
    ]
  },
  '金锭(20克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(18克拉)']
    ]
  },
  '金锭(18克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(16克拉)']
    ]
  },
  '金锭(16克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(14克拉)']
    ]
  },
  '金锭(14克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(12克拉)']
    ]
  },
  '金锭(12克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(10克拉)']
    ]
  },
  '金锭(10克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(8克拉)']
    ]
  },
  '金锭(8克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(6克拉)']
    ]
  },
  '金锭(6克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
      ['金锭(4克拉)']
    ]
  },
  '金锭(4克拉)': {
    machine: '冶炼炉',
    materialList: [
      ['金粉'],
    ]
  },
  '硅': {
    machine: '冶炼炉',
    materialList: [
      ['石英块']
    ]
  },
  '铀': {
    machine: '高级工作台',
    materialList: [
      ['一小堆铀', 4]
    ]
  },
  '镁盐': {
    machine: '加热压力仓',
    materialList: [
      ['镁'],
      ['盐']
    ]
  },
  '原油桶': {
    machine: '原油泵',
    materialList: [
      ['桶']
    ]
  },
  '燃料桶': {
    machine: '炼油厂',
    materialList: [
      ['原油桶']
    ]
  },
  '起泡锭(33%)': {
    machine: '加热压力仓',
    materialList: [
      ['金锭(24克拉)'],
      ['铀']
    ]
  },
  '起泡锭(66%)': {
    machine: '加热压力仓',
    materialList: [
      ['起泡锭(33%)'],
      ['黑金刚石']
    ]
  },
  '起泡锭': {
    machine: '加热压力仓',
    materialList: [
      ['起泡锭(66%)'],
      ['下界之星']
    ]
  },
  '浓缩下界冰': {
    machine: '加热压力仓',
    materialList: [
      ['下界冰'],
      ['钚']
    ]
  },
  '镎': {
    machine: '核反应堆',
    materialList: [
      ['铀']
    ]
  },
  '钚': {
    machine: '核反应堆',
    materialList: [
      ['镎']
    ]
  },
  '高纯度铀': {
    machine: '加热压力仓',
    materialList: [
      ['钚'],
      ['铀']
    ]
  },
  //食物
  '幸运饼干': {
    machine: '高级工作台',
    materialList: [
      ['曲奇'],
      ['纸']
    ]
  },
  '减肥曲奇': {
    machine: '魔法工作台',
    materialList: [
      ['曲奇'],
      ['鞘翅鳞片']
    ]
  },
  '幸运饼干': {
    machine: '高级工作台',
    materialList: [
      ['曲奇'],
      ['纸']
    ]
  },
  '牛肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['牛排']
    ]
  },
  '猪肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['熟猪排']
    ]
  },
  '鸡肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['熟鸡肉']
    ]
  },
  '羊肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['熟羊肉']
    ]
  },
  '兔肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['熟兔肉']
    ]
  },
  '鱼干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['熟鳕鱼']
    ]
  },
  '魔法糖': {
    machine: '高级工作台',
    materialList: [
      ['糖'],
      ['红石粉'],
      ['萤石粉']
    ]
  },
  '怪物肉干': {
    machine: '高级工作台',
    materialList: [
      ['盐'],
      ['腐肉']
    ]
  },
  '苹果汁': {
    machine: '榨汁机',
    materialList: [
      ['苹果']
    ]
  },
  '胡萝卜汁': {
    machine: '榨汁机',
    materialList: [
      ['胡萝卜']
    ]
  },
  '西瓜汁': {
    machine: '榨汁机',
    materialList: [
      ['西瓜']
    ]
  },
  '南瓜汁': {
    machine: '榨汁机',
    materialList: [
      ['南瓜']
    ]
  },
  '浆果汁': {
    machine: '榨汁机',
    materialList: [
      ['甜浆果']
    ]
  },
  '金苹果汁': {
    machine: '榨汁机',
    materialList: [
      ['金苹果']
    ]
  },
  //魔法物品
  '魔法因子-I': {
    machine: '磨石',
    materialList: [
      ['地狱疣']
    ],
    'count': 2
  },
  '魔法因子-II': {
    machine: '高级工作台',
    materialList: [
      ['魔法因子-I', 4]
    ]
  },
  '魔法因子-III': {
    machine: '高级工作台',
    materialList: [
      ['魔法因子-II', 4]
    ]
  },
  '末影因子-I': {
    machine: '高级工作台',
    materialList: [
      ['末影之眼']
    ],
    'count': 2
  },
  '末影因子-II': {
    machine: '高级工作台',
    materialList: [
      ['末影因子-I', 4]
    ]
  },
  '末影因子-III': {
    machine: '高级工作台',
    materialList: [
      ['末影因子-II', 4]
    ]
  },
  '魔法书皮': {
    machine: '高级工作台',
    materialList: [
      ['魔法因子-II', 4],
      ['书']
    ]
  },
  '岩浆水晶': {
    machine: '高级工作台',
    materialList: [
      ['魔法因子-I', 4],
      ['烈焰粉', 4],
      ['古代符文[火]']
    ]
  },
  '普通护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-II', 4],
      ['金锭(8克拉)', 2],
      ['绿宝石']
    ]
  },
  '坏死颅骨': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['凋零骷髅头颅']
    ]
  },
  '来世精华': {
    machine: '古代祭坛',
    materialList: [
      ['末影因子-III', 4],
      ['古代符文[气]'],
      ['古代符文[地]'],
      ['古代符文[火]'],
      ['古代符文[水]'],
      ['坏死颅骨']
    ]
  },
  '古代基座': {
    machine: '魔法工作台',
    materialList: [
      ['黑曜石', 4],
      ['金锭(8克拉)', 2],
      ['石头']
    ],
    count: 4
  },
  '空白符文': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-I', 4],
      ['石头', 4],
      ['黑曜石']
    ]
  },
  '古代符文[气]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-I', 2],
      ['羽毛', 4],
      ['恶魂之泪', 2],
      ['空白符文']
    ],
    count: 4
  },
  '古代符文[地]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-I', 2],
      ['泥土', 2],
      ['石头', 2],
      ['黑曜石', 2],
      ['空白符文']
    ],
    count: 4
  },
  '古代符文[火]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-II', 2],
      ['火焰弹', 4],
      ['烈焰粉'],
      ['打火石'],
      ['古代符文[地]']
    ],
    count: 4
  },
  '古代符文[水]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-II', 2],
      ['水桶', 2],
      ['沙子', 2],
      ['生鲑鱼'],
      ['生鳕鱼'],
      ['空白符文']
    ],
    count: 4
  },
  '古代符文[末影]': {
    machine: '古代祭坛',
    materialList: [
      ['末影因子-III', 2],
      ['末影之眼', 2],
      ['末影珍珠', 4],
      ['空白符文']
    ],
    count: 6
  },
  '古代符文[雷]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-III', 2],
      ['铁锭', 4],
      ['幻翼膜'],
      ['古代符文[气]'],
      ['古代符文[水]']
    ],
    count: 4
  },
  '古代符文[虹]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-III', 2],
      ['羊毛', 2],
      ['红色染料'],
      ['青色染料'],
      ['黄色染料'],
      ['品红色染料'],
      ['古代符文[末影]']
    ]
  },
  '古代符文[灵魂绑定]': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-III', 4],
      ['末影因子-III', 2],
      ['来世精华', 2],
      ['古代符文[末影]']
    ]
  },
  //魔法防具
  '末影头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['末影因子-I', 2],
      ['黑曜石', 2],
      ['末影之眼']
    ]
  },
  '末影胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['末影因子-I', 2],
      ['黑曜石', 5],
      ['末影之眼']
    ]
  },
  '末影护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['末影因子-I', 2],
      ['黑曜石', 4],
      ['末影之眼']
    ]
  },
  '末影靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['末影因子-I', 2],
      ['黑曜石', 2]
    ]
  },
  '史莱姆头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['铁锭', 3],
      ['粘液球', 2]
    ]
  },
  '史莱姆胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['铁锭', 4],
      ['粘液球', 4]
    ]
  },
  '史莱姆护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['铁锭', 5],
      ['粘液球', 2]
    ]
  },
  '史莱姆靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['铁锭', 2],
      ['粘液球', 2]
    ]
  },
  '萤石头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['萤石', 5]
    ]
  },
  '萤石胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['萤石', 8]
    ]
  },
  '萤石护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['萤石', 7]
    ]
  },
  '萤石靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['萤石', 4]
    ]
  },
  '史莱姆头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['粘液球', 4],
      ['钢板']
    ]
  },
  '史莱姆胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['粘液球', 7],
      ['钢板']
    ]
  },
  '史莱姆护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['粘液球', 6],
      ['钢板']
    ]
  },
  '史莱姆靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['粘液球', 4],
      ['钢板']
    ]
  },
  '农夫的靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['干草块', 4]
    ]
  },
  '践踏者之靴': {
    machine: '盔甲锻造台',
    materialList: [
      ['黄色羊毛', 2],
      ['活塞', 2]
    ]
  },
  '灵魂绑定头盔': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石头盔']
    ]
  },
  '灵魂绑定胸甲': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石胸甲']
    ]
  },
  '灵魂绑定护腿': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石护腿']
    ]
  },
  '灵魂绑定靴子': {
    machine: '魔法工作台',
    materialList: [
      ['来世精华', 2],
      ['钻石靴子']
    ]
  },
  //科技零件
  '磁铁': {
    machine: '冶炼炉',
    materialList: [
      ['镍锭'],
      ['铝粉'],
      ['铁粉'],
      ['钴锭']
    ]
  },
  '高级电路板': {
    machine: '高级工作台',
    materialList: [
      ['红石块', 2],
      ['青金石块', 6],
      ['基础电路板']
    ]
  },
  '电池': {
    machine: '高级工作台',
    materialList: [
      ['锌锭', 2],
      ['铜锭', 2],
      ['硫酸盐', 2],
      ['红石粉']
    ]
  },
  '钢推进器': {
    machine: '高级工作台',
    materialList: [
      ['铝青铜锭', 3],
      ['钢板', 2],
      ['火焰弹'],
      ['红石粉']
    ]
  },
  '能量水晶': {
    machine: '高级工作台',
    materialList: [
      ['红石粉', 4],
      ['人造蓝宝石', 4],
      ['人造钻石']
    ]
  },
  '太阳能板': {
    machine: '高级工作台',
    materialList: [
      ['玻璃', 3],
      ['硅', 3],
      ['硅铁', 3]
    ]
  },
  '电磁铁': {
    machine: '高级工作台',
    materialList: [
      ['电池'],
      ['磁铁'],
      ['镍锭'],
      ['钴锭']
    ]
  },
  '电动马达': {
    machine: '高级工作台',
    materialList: [
      ['铜线', 6],
      ['电磁铁']
    ]
  },
  '加热线圈': {
    machine: '高级工作台',
    materialList: [
      ['铜线', 8],
      ['电动马达']
    ]
  },
  '铜线': {
    machine: '高级工作台',
    materialList: [
      ['铜锭', 3]
    ],
    count: 8
  },
  '钢化玻璃': {
    machine: '高级工作台',
    materialList: [
      ['玻璃', 8],
      ['钢筋板']
    ],
    count: 16
  },
  '太阳能阵列': {
    machine: '高级工作台',
    materialList: [
      ['钢化玻璃', 6],
      ['太阳能板', 3]
    ]
  },
  '冷却装置': {
    machine: '高级工作台',
    materialList: [
      ['冰', 6],
      ['铝锭', 2],
      ['电动马达']
    ]
  },
  '防凋灵黑曜石': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 4],
      ['黑曜石', 4],
      ['钢化玻璃']
    ],
    count: 4
  },
  '防凋灵玻璃': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 4],
      ['防凋灵黑曜石', 4],
      ['钢化玻璃']
    ],
    count: 4
  },
  '反应堆冷却剂': {
    machine: '冰箱',
    materialList: [
      ['蓝冰']
    ]
  },
  '下界冰冷却剂': {
    machine: '加热压力仓',
    materialList: [
      ['浓缩下界冰']
    ]
  },
  //杂项
  '筛矿': {
    machine: '淘金盘',
    materialList: [
      ['沙砾']
    ]
  },
  '小麦粉': {
    machine: '磨石',
    materialList: [
      ['小麦']
    ]
  },
  '钢板': {
    machine: '压缩机',
    materialList: [
      ['钢锭', 8]
    ]
  },
  '锁链': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 3]
    ],
    count: 8
  },
  '钩子': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 3]
    ]
  },
  '石块': {
    machine: '洗矿机',
    materialList: [
      ['筛矿']
    ]
  },
  '盐': {
    machine: '洗矿机',
    materialList: [
      ['沙子', 4]
    ]
  },
  '浓奶油': {
    machine: '高级工作台',
    materialList: [
      ['牛奶桶']
    ]
  },
  '黄油': {
    machine: '高级工作台',
    materialList: [
      ['牛奶桶'],
      ['盐']
    ]
  },
  '奶酪': {
    machine: '高级工作台',
    materialList: [
      ['浓奶油'],
      ['盐']
    ]
  },
  '已粉碎的矿石': {
    machine: '矿石粉碎机',
    materialList: [
      ['筛矿']
    ]
  },
  '粉末状的矿石': {
    machine: '矿石粉碎机',
    materialList: [
      ['已粉碎的矿石']
    ]
  },
  '纯矿簇': {
    machine: '洗矿机',
    materialList: [
      ['粉末状的矿石']
    ]
  },
  '一小块铀': {
    machine: '矿石粉碎机',
    materialList: [
      ['纯矿簇']
    ]
  },
  '一小堆铀': {
    machine: '高级工作台',
    materialList: [
      ['一小块铀', 9]
    ]
  },
  '布': {
    machine: '高级工作台',
    materialList: [
      ['白色羊毛']
    ],
    count: 8
  },
  '锡罐': {
    machine: '高级工作台',
    materialList: [
      ['锡锭', 8]
    ],
    count: 4
  },
  '金块(24克拉)': {
    machine: '高级工作台',
    materialList: [
      ['金锭(24克拉)', 9]
    ]
  },
  '钢筋板': {
    machine: '压缩机',
    materialList: [
      ['强化合金锭', 8]
    ]
  },
  '强力胶布': {
    machine: '高级工作台',
    materialList: [
      ['铝粉', 3],
      ['纸', 3],
      ['粘液球', 2],
      ['白色羊毛']
    ],
    count: 2
  },
  '塑料纸': {
    machine: '加热压力仓',
    materialList: [
      ['原油桶']
    ]
  },
  '机器人内存核心': {
    machine: '高级工作台',
    materialList: [
      ['黄铜锭', 4],
      ['能量水晶', 2],
      ['橙色染色玻璃', 2],
      ['锡粉']
    ]
  },
  '有机肥料': {
    machine: '食品堆肥器',
    materialList: [
      ['有机食物']
    ]
  },
  //防具
  '大马士革钢头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['大马士革钢锭', 5]
    ]
  },
  '大马士革钢胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['大马士革钢锭', 8]
    ]
  },
  '大马士革钢护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['大马士革钢锭', 7]
    ]
  },
  '大马士革钢靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['大马士革钢锭', 4]
    ]
  },
  '强化合金头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['强化合金锭', 5]
    ]
  },
  '强化合金胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['强化合金锭', 8]
    ]
  },
  '强化合金护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['强化合金锭', 7]
    ]
  },
  '强化合金靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['强化合金锭', 4]
    ]
  },
  '仙人掌头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['仙人掌', 5]
    ]
  },
  '仙人掌胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['仙人掌', 8]
    ]
  },
  '仙人掌护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['仙人掌', 7]
    ]
  },
  '仙人掌靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['仙人掌', 4]
    ]
  },
  '锁链头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['锁链', 5]
    ]
  },
  '锁链胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['锁链', 8]
    ]
  },
  '锁链护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['锁链', 7]
    ]
  },
  '锁链靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['锁链', 4]
    ]
  },
  '镀金铁头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['镀金铁锭', 5]
    ]
  },
  '镀金铁胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['镀金铁锭', 8]
    ]
  },
  '镀金铁护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['镀金铁锭', 7]
    ]
  },
  '镀金铁靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['镀金铁锭', 4]
    ]
  },
  '潜水头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['橙色羊毛', 3],
      ['黑色羊毛', 2],
      ['玻璃板']
    ]
  },
  '防化服': {
    machine: '盔甲锻造台',
    materialList: [
      ['橙色羊毛', 5],
      ['黑色羊毛', 3]
    ]
  },
  '防化护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['橙色羊毛', 4],
      ['黑色羊毛', 3]
    ]
  },
  '橡胶靴': {
    machine: '盔甲锻造台',
    materialList: [
      ['黑色羊毛', 4]
    ]
  },
  '金头盔': {
    machine: '盔甲锻造台',
    materialList: [
      ['金锭(12克拉)', 5]
    ]
  },
  '金胸甲': {
    machine: '盔甲锻造台',
    materialList: [
      ['金锭(12克拉)', 8]
    ]
  },
  '金护腿': {
    machine: '盔甲锻造台',
    materialList: [
      ['金锭(12克拉)', 7]
    ]
  },
  '金靴子': {
    machine: '盔甲锻造台',
    materialList: [
      ['金锭(12克拉)', 4]
    ]
  },
  //护身符-1级
  '铁砧护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['铁砧', 2],
      ['普通护身符']
    ],
    count: 4
  },
  '矿工护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['筛矿'],
      ['人造蓝宝石'],
      ['普通护身符']
    ]
  },
  '猎人护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['怪物肉干'],
      ['人造蓝宝石'],
      ['普通护身符']
    ]
  },
  '岩浆行者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['熔岩桶'],
      ['人造蓝宝石'],
      ['普通护身符']
    ],
    count: 4
  },
  '潜水者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['水桶'],
      ['钓鱼竿'],
      ['普通护身符']
    ],
    count: 4
  },
  '天使护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['羽毛', 2],
      ['普通护身符']
    ]
  },
  '消防员护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['岩浆水晶', 2],
      ['普通护身符']
    ],
    count: 4
  },
  '魔法师护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['附魔台', 2],
      ['普通护身符']
    ]
  },
  '旅行者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['元素法杖-风', 2],
      ['天使护身符']
    ]
  },
  '战士护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['强化合金锭', 2],
      ['普通护身符']
    ],
    count: 4
  },
  '骑士护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['镀金铁锭', 2],
      ['战术护身符']
    ],
    count: 4
  },
  '旋风护身符': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['元素法杖-风', 2],
      ['旅行者护身符']
    ]
  },
  '巫师护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['魔法末影之眼', 2],
      ['魔法师护身符']
    ]
  },
  //魔法工具
  '末影背包': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-II', 4],
      ['皮革', 4],
      ['箱子']
    ]
  },
  '魔法末影之眼': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-II', 4],
      ['末影珍珠', 4],
      ['末影之眼']
    ]
  },
  '元素法杖': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 2],
      ['魔法书皮', 2],
      ['木棍']
    ]
  },
  '元素法杖-风': {
    machine: '魔法工作台',
    materialList: [
      ['元素法杖', 2],
      ['羽毛', 2],
      ['末影因子-III']
    ]
  },
  '元素法杖-水': {
    machine: '魔法工作台',
    materialList: [
      ['元素法杖', 2],
      ['睡莲', 2],
      ['魔法因子-II']
    ]
  },
  '元素法杖-火': {
    machine: '魔法工作台',
    materialList: [
      ['元素法杖', 2],
      ['岩浆水晶']
    ]
  },
  '元素法杖-雷': {
    machine: '古代祭坛',
    materialList: [
      ['末影因子-III', 2],
      ['古代符文[雷]', 4],
      ['元素法杖-风'],
      ['元素法杖-水'],
      ['魔法糖']
    ]
  },
  '吸入磁铁': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 4],
      ['末影因子-II', 2],
      ['磁铁']
    ]
  },
  '已修复的刷怪笼': {
    machine: '古代祭坛',
    materialList: [
      ['学识之瓶', 4],
      ['古代符文[末影]', 2],
      ['来世精华', 2],
      ['已损坏的刷怪笼']
    ]
  },
  '维度传送卷轴': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['魔法末影之眼', 2],
      ['魔法书皮']
    ]
  },
  '知识共享之书': {
    machine: '魔法工作台',
    materialList: [
      ['羽毛'],
      ['玻璃瓶'],
      ['墨囊'],
      ['书与笔'],
      ['魔法书皮']
    ]
  },
  '学识之瓶': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-II', 3],
      ['玻璃板']
    ],
    count: 8
  },
  '古代祭坛': {
    machine: '魔法工作台',
    materialList: [
      ['魔法因子-III', 2],
      ['黑曜石', 2],
      ['金锭(8克拉)', 2],
      ['附魔台']
    ]
  },
  '地狱骨粉': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-II', 2],
      ['地狱疣', 4],
      ['古代符文[地]'],
      ['烈焰粉'],
      ['骨粉']
    ]
  },
  '鞘翅鳞片': {
    machine: '古代祭坛',
    materialList: [
      ['末影因子-III', 4],
      ['古代符文[气]', 2],
      ['幻翼膜', 2],
      ['羽毛']
    ]
  },
  '鞘翅': {
    machine: '古代祭坛',
    materialList: [
      ['鞘翅鳞片', 4],
      ['古代符文[气]', 4],
      ['皮革外套']
    ]
  },
  '经验修补鞘翅': {
    machine: '古代祭坛',
    materialList: [
      ['学识之瓶', 6],
      ['鞘翅鳞片', 2],
      ['鞘翅']
    ]
  },
  '灵魂绑定鞘翅': {
    machine: '古代祭坛',
    materialList: [
      ['学识之瓶', 4],
      ['鞘翅鳞片', 2],
      ['来世精华'],
      ['鞘翅']
    ]
  },
  '不死图腾': {
    machine: '古代祭坛',
    materialList: [
      ['魔法因子-III', 2],
      ['来世精华', 4],
      ['绿宝石块', 2],
      ['普通护身符']
    ]
  },
  '彩虹羊毛': {
    machine: '古代祭坛',
    materialList: [
      ['白色羊毛', 8],
      ['古代符文[虹]']
    ],
    count: 8
  },
  '彩虹玻璃': {
    machine: '古代祭坛',
    materialList: [
      ['白色染色玻璃', 8],
      ['古代符文[虹]']
    ],
    count: 8
  },
  '彩虹玻璃板': {
    machine: '古代祭坛',
    materialList: [
      ['白色染色玻璃板', 8],
      ['古代符文[虹]']
    ],
    count: 8
  },
  '彩虹粘土块': {
    machine: '古代祭坛',
    materialList: [
      ['白色陶瓦', 8],
      ['古代符文[虹]']
    ],
    count: 8
  },
  '吸入漏斗': {
    machine: '古代祭坛',
    materialList: [
      ['黑曜石', 2],
      ['漏斗', 2],
      ['古代符文[地]', 2],
      ['古代符文[末影]', 2],
      ['吸入磁铁']
    ]
  },
  //科技工具
  '电力喷射背包-I': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '电力喷射背包-II': {
    machine: '高级工作台',
    materialList: [
      ['焊锡锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '电力喷射背包-III': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '电力喷射背包-IV': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '电力喷射背包-V': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '电力喷射背包-VI': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['中型储能电容']
    ]
  },
  '电力喷射背包-VII': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石', 4],
      ['钢推进器', 2],
      ['能量水晶'],
      ['巨型储能电容']
    ]
  },
  '降落伞': {
    machine: '高级工作台',
    materialList: [
      ['布', 3],
      ['锁链', 2]
    ]
  },
  '全息投影仪': {
    machine: '高级工作台',
    materialList: [
      ['铝黄铜锭', 3],
      ['能量水晶'],
      ['电动马达']
    ],
    count: 3
  },
  '多功能工具-I': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 5],
      ['小型储能电容']
    ]
  },
  '多功能工具-II': {
    machine: '高级工作台',
    materialList: [
      ['焊锡锭', 5],
      ['小型储能电容']
    ]
  },
  '多功能工具-III': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 5],
      ['小型储能电容']
    ]
  },
  '多功能工具-IV': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 5],
      ['小型储能电容']
    ]
  },
  '多功能工具-V': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 5],
      ['小型储能电容']
    ]
  },
  '多功能工具-VI': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 5],
      ['中型储能电容']
    ]
  },
  '多功能工具-VII': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石', 5],
      ['巨型储能电容']
    ]
  },
  '太阳能头盔': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 4],
      ['中型储能电容', 2],
      ['太阳能板']
    ]
  },
  '夜视眼镜': {
    machine: '盔甲锻造台',
    materialList: [
      ['煤炭块', 6],
      ['黄绿色染色玻璃板', 2]
    ]
  },
  '喷气靴-I': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '喷气靴-II': {
    machine: '高级工作台',
    materialList: [
      ['焊锡锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '喷气靴-III': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '喷气靴-IV': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '喷气靴-V': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['小型储能电容']
    ]
  },
  '喷气靴-VI': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['中型储能电容']
    ]
  },
  '喷气靴-VII': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['巨型储能电容']
    ]
  },
  '装甲喷气靴': {
    machine: '高级工作台',
    materialList: [
      ['钢板', 2],
      ['钢推进器', 2],
      ['能量水晶'],
      ['中型储能电容']
    ]
  },
  //护身符-2级
  '末影铁砧护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['铁砧护身符']
    ],
    count: 4
  },
  '末影矿工护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['矿工护身符']
    ]
  },
  '末影猎人护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['猎人护身符']
    ]
  },
  '末影岩浆行者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['岩浆行者护身符']
    ],
    count: 4
  },
  '末影潜水者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['潜水者护身符']
    ],
    count: 4
  },
  '末影天使护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['天使护身符']
    ]
  },
  '末影消防员护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['消防员护身符']
    ],
    count: 4
  },
  '末影魔法师护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['魔法师护身符']
    ]
  },
  '末影旅行者护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['旅行者护身符']
    ]
  },
  '末影战士护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['战士护身符']
    ],
    count: 4
  },
  '末影骑士护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['骑士护身符']
    ],
    count: 4
  },
  '末影旋风护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['旋风护身符']
    ]
  },
  '末影巫师护身符': {
    machine: '魔法工作台',
    materialList: [
      ['末影因子-III', 4],
      ['巫师护身符']
    ]
  },
  //能源与电力
  '能源调节器': {
    machine: '高级工作台',
    materialList: [
      ['银锭', 4],
      ['大马士革钢锭', 4],
      ['电动马达']
    ]
  },
  '小型储能电容': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 4],
      ['红石合金锭', 2],
      ['红石粉', 2],
      ['硫酸盐']
    ]
  },
  '中型储能电容': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 4],
      ['红石合金锭', 2],
      ['红石粉', 2],
      ['小型储能电容']
    ]
  },
  '大型储能电容': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 4],
      ['红石合金锭', 2],
      ['红石粉', 2],
      ['中型储能电容']
    ]
  },
  '巨型储能电容': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 4],
      ['红石合金锭', 2],
      ['红石粉', 2],
      ['大型储能电容']
    ]
  },
  '黑金刚石镶边储能电容': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石', 4],
      ['红石合金锭', 2],
      ['红石粉', 2],
      ['巨型储能电容']
    ]
  },
  '太阳能发电机': {
    machine: '高级工作台',
    materialList: [
      ['太阳能板', 3],
      ['铝锭', 3],
      ['电动马达']
    ]
  },
  '高级太阳能发电机': {
    machine: '高级工作台',
    materialList: [
      ['太阳能发电机', 4],
      ['铝锭', 4],
      ['红石粉']
    ]
  },
  '黑金刚石太阳能发电机': {
    machine: '高级工作台',
    materialList: [
      ['高级太阳能发电机', 4],
      ['铝锭', 4],
      ['黑金刚石']
    ]
  },
  '充能太阳能发电机': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石太阳能发电机', 4],
      ['起泡锭', 4],
      ['电磁铁']
    ]
  },
  '充电台': {
    machine: '高级工作台',
    materialList: [
      ['电池', 2],
      ['小型储能电容'],
      ['电磁铁'],
      ['工作台']
    ]
  },
  '电炉': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 4],
      ['熔炉'],
      ['加热线圈'],
      ['电动马达']
    ]
  },
  '电炉-II': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 4],
      ['电炉'],
      ['加热线圈'],
      ['电动马达']
    ]
  },
  '电炉-III': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 2],
      ['钢锭', 2],
      ['电炉-II'],
      ['加热线圈'],
      ['电动马达']
    ]
  },
  '电动淘金机': {
    machine: '高级工作台',
    materialList: [
      ['铝锭', 3],
      ['燧石', 2],
      ['淘金盘'],
      ['电动马达']
    ]
  },
  '电动淘金机-II': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 3],
      ['铁锭', 2],
      ['淘金盘'],
      ['电动淘金机']
    ]
  },
  '电动淘金机-III': {
    machine: '高级工作台',
    materialList: [
      ['钴锭', 2],
      ['电动马达', 2],
      ['起泡锭'],
      ['淘金盘'],
      ['电动淘金机-II']
    ]
  },
  '电动洗矿机': {
    machine: '高级工作台',
    materialList: [
      ['铜锭', 3],
      ['电磁铁', 2],
      ['水桶'],
      ['电动淘金机']
    ]
  },
  '电动洗矿机-II': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 3],
      ['电磁铁', 2],
      ['水桶'],
      ['电动洗矿机']
    ]
  },
  '电动洗矿机-III': {
    machine: '高级工作台',
    materialList: [
      ['科林斯青铜锭', 2],
      ['电磁铁', 2],
      ['水桶'],
      ['起泡锭'],
      ['电动洗矿机-II']
    ]
  },
  '电动铸锭机': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 2],
      ['加热线圈', 2],
      ['电动马达'],
      ['打火石'],
      ['电动洗矿机']
    ]
  },
  '电动铸锭机-II': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 2],
      ['黄铜锭', 2],
      ['加热线圈', 2],
      ['电动马达'],
      ['打火石'],
      ['电动铸锭机']
    ]
  },
  '电动铸锭机-III': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 2],
      ['黄铜锭', 2],
      ['加热线圈', 2],
      ['起泡锭'],
      ['打火石'],
      ['电动铸锭机-II']
    ]
  },
  '电动坩埚': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 4],
      ['大马士革钢锭', 2],
      ['加热线圈'],
      ['坩埚'],
      ['巨型储能电容']
    ]
  },
  '电动坩埚-II': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 2],
      ['科林斯青铜锭', 2],
      ['铅锭', 2],
      ['加热线圈'],
      ['电动马达'],
      ['电动坩埚']
    ]
  },
  '电动坩埚-III': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 3],
      ['科林斯青铜锭', 2],
      ['钢板', 2],
      ['能量水晶'],
      ['电动坩埚-II']
    ]
  },
  '电力碎矿机': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 4],
      ['加热线圈'],
      ['电动马达'],
      ['钻石镐']
    ]
  },
  '电力碎矿机-II': {
    machine: '高级工作台',
    materialList: [
      ['镀金铁锭', 2],
      ['加热线圈', 2],
      ['起泡锭'],
      ['钻石镐'],
      ['电力碎矿机']
    ]
  },
  '加热压力仓': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 6],
      ['加热线圈'],
      ['电动马达'],
      ['玻璃']
    ]
  },
  '加热压力仓-II': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 4],
      ['强化合金锭', 2],
      ['加热线圈'],
      ['电动马达'],
      ['加热压力仓']
    ]
  },
  '电力打粉机': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 4],
      ['加热线圈'],
      ['中型储能电容'],
      ['电力碎矿机']
    ]
  },
  '煤发电机': {
    machine: '高级工作台',
    materialList: [
      ['镍锭', 3],
      ['加热线圈', 2],
      ['电动马达'],
      ['熔炉']
    ]
  },
  '煤发电机-II': {
    machine: '高级工作台',
    materialList: [
      ['硬化金属', 2],
      ['岩浆块', 2],
      ['电动马达'],
      ['加热线圈'],
      ['煤发电机']
    ]
  },
  '生物反应器': {
    machine: '高级工作台',
    materialList: [
      ['铝黄铜锭', 3],
      ['加热线圈', 2],
      ['电动马达'],
      ['搅拌机']
    ]
  },
  '自动烘干机': {
    machine: '高级工作台',
    materialList: [
      ['加热线圈', 2],
      ['营火'],
      ['烟熏炉']
    ]
  },
  '电力碳压机': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 3],
      ['活塞', 2],
      ['电动马达'],
      ['中型储能电容']
    ]
  },
  '电力碳压机-II': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 5],
      ['粘性活塞', 2],
      ['电力碳压机'],
      ['大型储能电容']
    ]
  },
  '镁盐发电机': {
    machine: '高级工作台',
    materialList: [
      ['硬铝锭', 3],
      ['压缩碳', 2],
      ['电动马达'],
      ['水桶']
    ]
  },
  '自动附魔机': {
    machine: '高级工作台',
    materialList: [
      ['防凋灵黑曜石', 3],
      ['黑金刚石', 2],
      ['电动马达'],
      ['附魔台']
    ]
  },
  '自动袪魔机': {
    machine: '高级工作台',
    materialList: [
      ['防凋灵黑曜石', 3],
      ['黑金刚石', 2],
      ['红石粉', 2],
      ['铁砧'],
      ['自动附魔机']
    ]
  },
  '自动铁砧': {
    machine: '高级工作台',
    materialList: [
      ['铁块', 3],
      ['强化合金锭', 2],
      ['电动马达'],
      ['铁砧']
    ]
  },
  '自动铁砧-II': {
    machine: '高级工作台',
    materialList: [
      ['铁块', 3],
      ['钢板', 2],
      ['加热线圈'],
      ['自动铁砧']
    ]
  },
  '万用表': {
    machine: '高级工作台',
    materialList: [
      ['铜锭', 2],
      ['红石合金锭'],
      ['金锭(6克拉)']
    ]
  },
  '电力碳压机': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 3],
      ['活塞', 2],
      ['电动马达'],
      ['中型储能电容']
    ]
  },
  '可编程式机器人(普通)': {
    machine: '高级工作台',
    materialList: [
      ['塑料纸', 5],
      ['煤发电机'],
      ['箱子'],
      ['电动马达'],
      ['机器人内存核心']
    ]
  },
  '可编程式机器人(矿工)': {
    machine: '高级工作台',
    materialList: [
      ['钻石镐', 2],
      ['电动马达'],
      ['可编程式机器人(普通)']
    ]
  },
  '可编程式机器人(农夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石锄', 2],
      ['电动马达'],
      ['可编程式机器人(普通)']
    ]
  },
  '可编程式机器人(樵夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石斧', 2],
      ['电动马达'],
      ['可编程式机器人(普通)']
    ]
  },
  '可编程式机器人(渔夫)': {
    machine: '高级工作台',
    materialList: [
      ['钓鱼竿', 2],
      ['电动马达'],
      ['可编程式机器人(普通)']
    ]
  },
  '可编程式机器人(屠夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石剑', 2],
      ['电动马达'],
      ['GPS发射器'],
      ['可编程式机器人(普通)']
    ]
  },
  '机器人交互接口(物品)': {
    machine: '高级工作台',
    materialList: [
      ['塑料纸', 7],
      ['基础电路板'],
      ['蓝色染色玻璃']
    ]
  },
  '机器人交互接口(燃料)': {
    machine: '高级工作台',
    materialList: [
      ['塑料纸', 7],
      ['基础电路板'],
      ['红色染色玻璃']
    ]
  },
  '高级可编程式机器人(普通)': {
    machine: '高级工作台',
    materialList: [
      ['塑料纸', 4],
      ['箱子'],
      ['燃烧反应机'],
      ['能量水晶'],
      ['机器人内存核心'],
      ['可编程式机器人(普通)']
    ]
  },
  '高级可编程式机器人(渔夫)': {
    machine: '高级工作台',
    materialList: [
      ['钓鱼竿', 2],
      ['电动马达'],
      ['高级可编程式机器人(普通)']
    ]
  },
  '高级可编程式机器人(屠夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石剑', 2],
      ['电动马达'],
      ['GPS发射器'],
      ['高级可编程式机器人(屠夫)']
    ]
  },
  '高级可编程式机器人(农夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石锄', 2],
      ['电动马达'],
      ['GPS发射器'],
      ['高级可编程式机器人(普通)']
    ]
  },
  '可授权式可编程式机器人(普通)': {
    machine: '高级工作台',
    materialList: [
      ['塑料纸', 2],
      ['起泡锭', 2],
      ['箱子'],
      ['核反应堆'],
      ['能量水晶'],
      ['机器人内存核心'],
      ['高级可编程式机器人(普通)']
    ]
  },
  '可授权式可编程式机器人(渔夫)': {
    machine: '高级工作台',
    materialList: [
      ['钓鱼竿', 2],
      ['电动马达'],
      ['可授权式可编程式机器人(渔夫)']
    ]
  },
  '可授权式可编程式机器人(屠夫)': {
    machine: '高级工作台',
    materialList: [
      ['钻石剑', 2],
      ['电动马达'],
      ['黑金刚石GPS发射器'],
      ['可授权式可编程式机器人(屠夫)']
    ]
  },
  '炼油厂': {
    machine: '高级工作台',
    materialList: [
      ['钢化玻璃', 4],
      ['红石合金锭', 2],
      ['活塞', 2],
      ['电动马达']
    ]
  },
  '岩浆发电机': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 3],
      ['加热线圈', 2],
      ['金锭(16克拉)'],
      ['电动马达']
    ]
  },
  '岩浆发电机-II': {
    machine: '高级工作台',
    materialList: [
      ['科林斯青铜锭', 3],
      ['压缩碳', 3],
      ['加热线圈', 2],
      ['岩浆发电机']
    ]
  },
  '燃烧反应机': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 4],
      ['加热线圈', 2],
      ['电动马达']
    ]
  },
  '食品加工机': {
    machine: '高级工作台',
    materialList: [
      ['锡罐', 2],
      ['银铜合金锭', 2],
      ['银锭'],
      ['电动马达'],
      ['小型储能电容']
    ]
  },
  '食品加工机': {
    machine: '高级工作台',
    materialList: [
      ['硬化金属', 2],
      ['电动马达', 2],
      ['强化合金锭'],
      ['电磁铁'],
      ['食品加工机']
    ]
  },
  '自动喂食机': {
    machine: '高级工作台',
    materialList: [
      ['金锭(18克拉)', 2],
      ['铅锭', 2],
      ['电动马达', 2],
      ['锡罐'],
      ['干草块'],
      ['食品加工机']
    ]
  },
  '动物生长加速器': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 2],
      ['电动马达', 2],
      ['起泡锭'],
      ['有机食物(小麦)'],
      ['自动喂食机']
    ]
  },
  '经验收集器': {
    machine: '高级工作台',
    materialList: [
      ['铝青铜锭', 2],
      ['防凋灵黑曜石', 2],
      ['起泡锭'],
      ['电动马达'],
      ['自动附魔机']
    ]
  },
  '食品堆肥器': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 2],
      ['锡罐', 2],
      ['电动马达'],
      ['中型储能电容'],
      ['食品加工机']
    ]
  },
  '食品堆肥器-II': {
    machine: '高级工作台',
    materialList: [
      ['硬化金属', 2],
      ['电动马达', 2],
      ['强化合金锭'],
      ['电磁铁'],
      ['食品堆肥器']
    ]
  },
  '作物生长加速器': {
    machine: '高级工作台',
    materialList: [
      ['电动马达', 2],
      ['电磁铁', 2],
      ['起泡锭'],
      ['可编程式机器人(农夫)'],
      ['动物生长加速器']
    ]
  },
  '作物生长加速器-II': {
    machine: '高级工作台',
    materialList: [
      ['电动马达', 2],
      ['电磁铁', 2],
      ['起泡锭'],
      ['高级电路板'],
      ['作物生长加速器']
    ]
  },
  '冰箱': {
    machine: '高级工作台',
    materialList: [
      ['冷却装置', 2],
      ['电动马达', 2],
      ['银锭'],
      ['浮冰'],
      ['中型储能电容']
    ]
  },
  '冰箱-II': {
    machine: '高级工作台',
    materialList: [
      ['冷却装置', 2],
      ['电磁铁', 2],
      ['银锭'],
      ['铝黄铜锭'],
      ['冰箱']
    ]
  },
  '核反应堆': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 2],
      ['起泡锭', 2],
      ['钢筋板', 3],
      ['冷却装置'],
    ]
  },
  '下界之星反应堆': {
    machine: '高级工作台',
    materialList: [
      ['科林斯青铜锭', 2],
      ['高纯度铀', 2],
      ['钢筋板', 3],
      ['下界之星'],
      ['黑金刚石镶边储能电容']
    ]
  },
  '自动合成机': {
    machine: '高级工作台',
    materialList: [
      ['货运马达', 2],
      ['起泡锭'],
      ['电动马达'],
      ['工作台']
    ]
  },
  '反应堆访问接口': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 2],
      ['起泡锭'],
      ['电动马达'],
      ['货运马达']
    ]
  },
  '流体泵': {
    machine: '高级工作台',
    materialList: [
      ['桶', 2],
      ['货运马达'],
      ['原油泵'],
      ['中型储能电容']
    ]
  },
  '碳压机': {
    machine: '高级工作台',
    materialList: [
      ['碳', 4],
      ['加热线圈', 2],
      ['黑金刚石'],
      ['电动马达'],
      ['加热压力仓']
    ]
  },
  '碳压机-II': {
    machine: '高级工作台',
    materialList: [
      ['碳', 2],
      ['加热线圈', 2],
      ['黑金刚石', 2],
      ['电动马达'],
      ['电磁铁'],
      ['碳压机']
    ]
  },
  '碳压机-III': {
    machine: '高级工作台',
    materialList: [
      ['强化合金锭', 2],
      ['加热线圈', 2],
      ['黑金刚石', 2],
      ['电动马达'],
      ['电磁铁'],
      ['碳压机-II']
    ]
  },
  '电力冶炼机': {
    machine: '高级工作台',
    materialList: [
      ['地狱砖块', 2],
      ['镀金铁锭', 2],
      ['加热线圈', 2],
      ['电动马达', 2],
      ['电动铸锭机']
    ]
  },
  '电力冶炼机-II': {
    machine: '高级工作台',
    materialList: [
      ['大马士革钢锭', 2],
      ['镀金铁锭', 2],
      ['加热线圈', 2],
      ['电动马达'],
      ['能量水晶'],
      ['电力冶炼机']
    ]
  },
  '凋灵汇编器': {
    machine: '高级工作台',
    materialList: [
      ['起泡锭', 2],
      ['防凋灵黑曜石', 2],
      ['强化合金锭'],
      ['机器人内存核心'],
      ['电动马达'],
      ['下界之星'],
      ['黑金刚石镶边储能电容']
    ]
  },
  //基于GPS的机器
  'GPS发射器': {
    machine: '高级工作台',
    materialList: [
      ['钢锭',4],
      ['电动马达'],
      ['电磁铁'],
      ['高级电路板']
    ]
  },
  '高级GPS发射器': {
    machine: '高级工作台',
    materialList: [
      ['GPS发射器',4],
      ['青铜锭', 4],
      ['碳']
    ]
  },
  '高级GPS发射器': {
    machine: '高级工作台',
    materialList: [
      ['高级GPS发射器',4],
      ['科林斯青铜锭', 4],
      ['黑金刚石']
    ]
  },
  '充能GPS发射器': {
    machine: '高级工作台',
    materialList: [
      ['黑金刚石GPS发射器',4],
      ['镍锭', 2],
      ['起泡锭', 2],
      ['黑金刚石']
    ]
  },
  'GPS控制面板': {
    machine: '高级工作台',
    materialList: [
      ['铝黄铜锭', 3],
      ['钴锭', 2],
      ['电磁铁'],
      ['高级电路板']
    ]
  },
  'GPS设置路径点工具': {
    machine: '高级工作台',
    materialList: [
      ['青金石', 2],
      ['红石粉', 2],
      ['红石合金锭'],
      ['电磁铁'],
      ['基础电路板']
    ]
  },
  'GPS应急发射器': {
    machine: '高级工作台',
    materialList: [
      ['来世精华'],
      ['电磁铁'],
      ['GPS发射器']
    ]
  },
  'GPS地形扫描器': {
    machine: '高级工作台',
    materialList: [
      ['电磁铁', 3],
      ['钢锭', 2],
      ['电动马达']
    ]
  },
  '便携式资源扫描器': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 2],
      ['焊锡锭', 2],
      ['电磁铁', 2],
      ['电动马达'],
      ['指南针'],
      ['GPS设置路径点工具']
    ]
  },
  '原油泵': {
    machine: '高级工作台',
    materialList: [
      ['钢锭', 4],
      ['桶'],
      ['电动马达'],
      ['中型储能电容']
    ]
  },
  'GEO矿机': {
    machine: '高级工作台',
    materialList: [
      ['钻石镐', 2],
      ['强化合金锭', 2],
      ['电动马达'],
      ['原油泵'],
      ['中型储能电容']
    ]
  },
  'GPS传送塔': {
    machine: '高级工作台',
    materialList: [
      ['锌锭', 4],
      ['玻璃', 4],
      ['加热线圈']
    ],
    count:8
  },
  'GPS传送矩阵': {
    machine: '高级工作台',
    materialList: [
      ['GPS传送塔', 4],
      ['强化合金锭', 2],
      ['电磁铁', 2],
      ['GPS控制面板']
    ]
  },
  'GPS激活设备(公共)': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 3],
      ['红石粉', 2],
      ['石质压力板'],
      ['GPS发射器']
    ]
  },
  'GPS激活设备(私人)': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 2],
      ['钴锭', 2],
      ['GPS激活设备(公共)']
    ]
  },
  '电梯板': {
    machine: '高级工作台',
    materialList: [
      ['铝青铜锭', 3],
      ['活塞', 2],
      ['电动马达'],
      ['石质压力板']
    ],
    count: 2
  },
  //货物管理
  '货运马达': {
    machine: '高级工作台',
    materialList: [
      ['钢化玻璃', 4],
      ['银锭', 2],
      ['电磁铁', 2],
      ['电动马达']
    ],
    count:4
  },
  '货运管理器': {
    machine: '高级工作台',
    materialList: [
      ['钢筋板', 2],
      ['铝青铜锭', 2],
      ['全系投影仪'],
      ['货运马达'],
      ['机器人内存核心']
    ],
  },
  '货运节点(连接器)': {
    machine: '高级工作台',
    materialList: [
      ['青铜锭', 4],
      ['银锭', 4],
      ['货运马达']
    ],
    count:4
  },
  '货运节点(输入)': {
    machine: '高级工作台',
    materialList: [
      ['银铜合金锭', 2],
      ['漏斗', 2],
      ['货运节点(连接器)']
    ],
    count:2
  },
  '货运节点(输出)': {
    machine: '高级工作台',
    materialList: [
      ['黄铜锭', 2],
      ['漏斗', 2],
      ['货运节点(连接器)']
    ],
    count:2
  },
  '高级货运节点(输出)': {
    machine: '高级工作台',
    materialList: [
      ['钴锭', 2],
      ['货运马达', 2],
      ['货运节点(输出)']
    ]
  },
  '垃圾箱': {
    machine: '高级工作台',
    materialList: [
      ['铅锭', 5],
      ['货运马达'],
      ['便携垃圾箱']
    ]
  },
}