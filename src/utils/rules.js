export const checkRuleOfID = (ctx, ID) => {
  if (ID) {
    // 不需校验为空的情况
    const city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外",
    };
    const birthday = `${ID.substr(6, 4)}/${Number(ID.substr(10, 2))}/${Number(ID.substr(12, 2))}`;
    const d = new Date(birthday);
    const newBirthday = `${d.getFullYear()}/${Number(d.getMonth() + 1)}/${Number(d.getDate())}`;
    const currentTime = new Date().getTime();
    const time = d.getTime();
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrCh = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    let sum = 0;
    let residue;
    if (!/^\d{17}(\d|x)$/i.test(ID)) return ctx.$t("hintIllegalIdentityId");
    if (city[ID.substr(0, 2)] === undefined) return ctx.$t("hintIllegalArea");
    if (time >= currentTime || birthday !== newBirthday) {
      return ctx.$t("hintIllegalBirthday");
    }
    for (let i = 0; i < 17; i += 1) {
      sum += ~~ID.substr(i, 1) * arrInt[i];
    }
    residue = arrCh[sum % 11];
    if (residue !== ID.substr(17, 1).toUpperCase()) return ctx.$t("hintIllegalIdentityId");
  } else {
    return "";
  }
};

export const checkRuleOfPassword = (ctx, password) => {
  // const reg = /^[a-zA-Z0-9]{6,18}$/;
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
  if (!reg.test(password)) {
    return ctx.$t("hintPasswordFormat");
  }
  return "";
};

export const checkRuleOfAgainPassword = (ctx, againPassword, password) => {
  if (password.newPassword !== againPassword) {
    return ctx.$t("hintPasswordNotSame");
  }
  return "";
};

export const checkRuleOfUsername = (ctx, value) => {
  if (value === "admin") {
    return "";
  } else if (!value.match(/^[0-9a-zA-Z]{6,30}$/)) {
    return ctx.$t("hintUsernameFormat");
  } else {
    return "";
  }
};

export const checkRuleOfRealname = (ctx, value) => {
  if (!value.match(/^\S{2,30}$/)) {
    return ctx.$t("hintRealnameFormat");
  } else {
    return "";
  }
};

export const checkRuleOfPhone = (ctx, value) => {
  if (!!value && !value.match(/^1[3|4|5|7|8][0-9]\d{8}$/)) {
    return ctx.$t("hintMobileFormat");
  } else {
    return "";
  }
};

export const checkRuleOfNetworkSegment = (ctx, addr1, addr2, mask) => {
  if (checkRuleOfIP(ctx, addr1)) {
    return ctx.$t("hintIpFormat");
  }
  const res1 = [];
  const res2 = [];
  const from = addr1.split(".");
  const to = addr2.split(".");
  const maskCopy = mask.split(".");
  for (let i = 0, ilen = from.length; i < ilen; i += 1) {
    res1.push(parseInt(from[i]) & parseInt(maskCopy[i]));
    res2.push(parseInt(to[i]) & parseInt(maskCopy[i]));
  }
  if (res1.join(".") === res2.join(".")) {
    return "";
  } else {
    return ctx.$t("hintNotInSameSegment");
  }
};

export const checkRuleOfIP = (ctx, IP) => {
  const ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
  if (!ipReg.test(IP)) {
    return ctx.$t("hintIpFormat");
  }
  return "";
};

export const checkRuleOfThreshold = (ctx, value) => {
  if (isNaN(value) || value > 100 || value < 0) {
    return ctx.$t("hintThresholdFormat");
  }
  return "";
};

export const checkRuleOfUrl = (ctx, url) => {
  const urlReg = /^((http|https):\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
  if (url && url.match(urlReg) === null) {
    return ctx.$t("hintUrlFormat");
  }
  return "";
};
export const checkRuleOfProdLength = (ctx, v, n = 40) => {
  let i = 0;
  let sum = 0;
  sum = 0;
  for (i = 0; i < v.length; i += 1) {
    if (v.charCodeAt(i) >= 0 && v.charCodeAt(i) <= 255) {
      sum = sum + 1;
    } else {
      sum = sum + 2;
    }
  }
  if (sum > n) {
    return ctx.$t("hintProductNameLength", { length: n });
  }
  return "";
};

export const identityIdReg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
