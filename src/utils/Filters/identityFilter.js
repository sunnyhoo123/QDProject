import lang from "i18n/lang.js";
import nativeData from "./nativeData";
import flatMap from "lodash/flatMap";
// 性别
export const gender = [
  { label: lang.attributes.unlimited,value: "-1" },
  { label: lang.attributes.male,value: "1" },
  { label: lang.attributes.female,value: "2" },
];
// 民族
export const allPeoples = [
  { value: "0", label: "不限" },
  { value: "03", label: "汉族" },
  { value: "01", label: "藏族" },
  { value: "02", label: "维吾尔族" },
  { value: "04", label: "蒙古族" },
  { value: "05", label: "回族" },
  { value: "06", label: "苗族" },
  { value: "07", label: "彝族" },
  { value: "08", label: "壮族" },
  { value: "09", label: "布依族" },
  { value: "10", label: "朝鲜族" },
  { value: "11", label: "满族" },
  { value: "12", label: "侗族" },
  { value: "13", label: "瑶族" },
  { value: "14", label: "白族" },
  { value: "15", label: "土家族" },
  { value: "16", label: "哈尼族" },
  { value: "17", label: "哈萨克族" },
  { value: "18", label: "傣族" },
  { value: "19", label: "黎族" },
  { value: "20", label: "傈僳族" },
  { value: "21", label: "佤族" },
  { value: "22", label: "畲族" },
  { value: "23", label: "高山族" },
  { value: "24", label: "拉祜族" },
  { value: "25", label: "水族" },
  { value: "26", label: "东乡族" },
  { value: "27", label: "纳西族" },
  { value: "28", label: "景颇族" },
  { value: "29", label: "柯尔克孜族" },
  { value: "30", label: "土族" },
  { value: "31", label: "达斡尔族" },
  { value: "32", label: "仫佬族" },
  { value: "33", label: "羌族" },
  { value: "34", label: "布朗族" },
  { value: "35", label: "撒拉族" },
  { value: "36", label: "毛难族" },
  { value: "37", label: "仡佬族" },
  { value: "38", label: "锡伯族" },
  { value: "39", label: "阿昌族" },
  { value: "40", label: "普米族" },
  { value: "41", label: "塔吉克族" },
  { value: "42", label: "怒族" },
  { value: "43", label: "乌孜别克族" },
  { value: "44", label: "俄罗斯族" },
  { value: "45", label: "鄂温克族" },
  { value: "46", label: "崩龙族" },
  { value: "47", label: "保安族" },
  { value: "48", label: "裕固族" },
  { value: "49", label: "京族" },
  { value: "50", label: "塔塔尔族" },
  { value: "51", label: "独龙族" },
  { value: "52", label: "鄂伦春族" },
  { value: "53", label: "赫哲族" },
  { value: "54", label: "门巴族" },
  { value: "55", label: "珞巴族" },
  { value: "56", label: "基诺族" },
  { value: "97", label: "其他" },
  { value: "98", label: "外国血统" },
];
// 户籍
export const native = treeifyData();

function treeifyData() {
  const codes = Object.keys(nativeData);
  return flatMap(codes, code => {
    if (code.endsWith("0000")) {
      const twoDigits = code.slice(0, 2);
      let children;
      const hasThreeLevels = nativeData[twoDigits + "0100"];
      if (!hasThreeLevels) {
        children = codes
          .filter(_ => _.startsWith(twoDigits) && !_.endsWith("0000"))
          .map(_ => ({
            label: nativeData[_],
            value: _,
          }));
      } else {
        const childrenCodes = codes.filter(_ => _.startsWith(twoDigits) && !_.endsWith("0000") && _.endsWith("00"));
        children = childrenCodes.map(_ => {
          const fourDigits = _.slice(0, 4);
          const children = codes
            .filter(_ => _.startsWith(fourDigits) && !_.endsWith("00"))
            .map(_ => ({
              label: nativeData[_],
              value: _,
            }));

          return children.length
            ? {
              label: nativeData[_],
              value: fourDigits,
              children,
            }
            : {
              label: nativeData[_],
              value: fourDigits,
            };
        });
      }

      return children.length
        ? {
          label: nativeData[twoDigits + "0000"],
          value: twoDigits,
          children,
        }
        : {
          label: nativeData[twoDigits + "0000"],
          value: twoDigits,
        };
    } else {
      return [];
    }
  });
}
