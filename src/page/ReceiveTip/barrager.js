/**
 * @description 生产弹幕
 * @author wanglinfeng
 */

var Barrager = {}; // 弹幕制造者

var user_rate = [0.3, 0.5, 0.2]; // 不同领奖者出现默认概率
var time = ['30秒前', '1分钟前', '2分钟前', '3分钟前', '刚刚'];
function getRandom(n, m) {
  var c = m - n + 1;
  return Math.floor(Math.random() * c + n);
}
var familyNames = new Array(
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
  "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
  "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
  "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
  "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
  "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
  "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
  "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
  "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
  "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
);
var nickName = [
  '柠檬土豆白云', 'Amy', '秋水一方', '倚天长剑', '水上小白龙', 'Rose', 'SweetHeart',
  'Lemon', 'Linda', 'Cindy', 'Mrs Wang', '只怪相遇', 'SouthC', 'SkinnyJ', '霍多尔',
  '情有独钟', '往日重现', '92号公路', '汽水的魅力', '微观世界', '捷克孙', '有且克无', '隔壁老李不容易',
  '驻海望天际', '辛勤的园丁', '兰陵王', 'Hip pop', 'Seewo_5841', '吹风', 'long', '敏慧',
  '全知全能', '未来老师', '踏雪寻梅', '倚天不屠龙', '佛山科比', '火枪手二把子', '山顶洞人', '琵琶上塞',
  '苏涛', '等荣东', '康华学者', '等等', '入戏三分', 'Ｎot see︶', 'Seven friends', '疯狂的马er',
  'Composure', 'Nefertari', 'Mr.galaxy', '得之我幸', 'Whosheart', '笑颜如初', '小河边唱歌',
  '挥剑断天下', '任凭风吹', '沉默是金', '当爱已成往事', '骑着蜗牛追飞机', '柠夏初开', '苏里苏里',
  '外向的孤独患者', 'manify', '江南情不变', 'WhenAlways', '莎士比亚的天份', '只要有你的地方'
];

// 随机生成 *老师
function getUsersName() {
  var head = familyNames[getRandom(0, familyNames.length - 1)];
  return head + '老师';
}

// 市面上的手机前三位
var numArray = new Array("139", "138", "137", "136", "135", "134", "159", "158", "157", "150", "151", "152",
"188", "187", "182", "183", "184", "178", "130", "131", "132", "156", "155", "186", "185", "176", "133",
"153", "189", "180", "181", "177", "199");

// 随机生成电话后四位
function getMoblieNumLast() {
  var last = [];
  for (var i = 0; i < 4; i++) {
    last.push(Math.round(Math.random() * 9));
  }
  return last.join('');
}

// 随机生成带*号电话号码
function getPhoneNum() {
  var head = numArray[getRandom(0, numArray.length - 1)];
  var last = getMoblieNumLast();
  return head + '****' + last;
}

// 随机抽取昵称
function getNickName() {
  return nickName[getRandom(0, nickName.length - 1)];
}

// 按照配置中的概率生成用户名
function createName(el, rate) {
  var name = '';
  var rate_first = rate[0] * 100;
  var rate_second = rate_first + rate[1] * 100;
  if (el <= rate_first) {
    name = getUsersName();
  } else if (rate_first < el && el <= rate_second) {
    name = getNickName();
  } else {
    name = getPhoneNum();
  }
  return name;
}

// 按照配置中的概率生成奖项
function createGift(el, rate, gift) {
  var gift = gift || [];
  var rate_first = rate[0] * 100;
  var rate_second = rate_first + rate[1] * 100;
  var rate_third = rate_second + rate[2] * 100;
  if (el <= rate_first) {
    gift = gift[0];
  } else if (rate_first < el && el <= rate_second) {
    gift = gift[1];
  } else if (rate_second < el && el <= rate_third) {
    gift = gift[2];
  } else {
    gift = gift[3];
  }
  return gift;
}

// 输出所有的信息
function makeGiftGetr(config) {
  var el = getRandom(0, 99);
  var info = {};
  var user_rate = config.user_rate || user_rate;
  var gift = config.gift;
  var gift_rate = config.gift_rate;

  // 入参校验
  if (gift && gift_rate) {
    var all_first_rate = reduce(gift_rate);
    var all_second_rate = reduce(user_rate);

    if (all_first_rate !== 1 || all_second_rate !== 1) {
      throw new Error('参数格式有误');
    }
  } else {
    throw new Error('缺少参数');
  }

  // 用户信息： *老师 -> 30%  昵称 -> 70% 电话 -> 0%
  info.name = createName(el, user_rate);
  info.gift = createGift(el, gift_rate, gift);

  // 时间文案按概率出现
  info.time = time[getRandom(0, time.length - 1)];
  return info;
}

// 计算数组之和
function reduce(list) {
  var result = 0;
  for (var i = 0; i < list.length; i ++) {
    result = result +list[i];
  }
  return result;
}
Barrager.init = function(config) {
  var maker = {};
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError(
          'Function.prototype.bind - what is trying to be bound is not callable'
        );
      }
      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function() {},
        fBound = function() {
          return fToBind.apply(
            this instanceof fNOP && oThis ? this : oThis,
            aArgs.concat(Array.prototype.slice.call(arguments))
          );
        };
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    };
  }
  maker.makeBarrage = makeGiftGetr.bind(null, config);
  return maker;
};

export default Barrager;
