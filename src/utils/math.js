/**
 * 计算一个数的整数部分中有几个数
 * 例如
 *  integerWidth(1) => 1,
 *  integerWidth(12) => 2,
 *  integerWidth(123) => 3,
 * @param value
 * @param base 基底/进制
 */
export const integerWidth = (value, base = 10) => {
  const values = Number(value);
  const bases = Number(base);

  if (Number.isNaN(values) ||
    Number.isNaN(bases)) {
    return NaN;
  } else if (0 === bases) {
    return Infinity;
  } else if (0 === values) {
    return 0;
  } else {
    return Math.floor(Math.log(Math.abs(values)) / Math.log(bases) + 1);
  }
};

export const positiveIntegerValidator = value => value > 0 && value % 1 === 0;

export const naturalIntegerValidator = value => value >= 0 && value % 1 === 0;

/**
 * 按三角函数曲线变换输入
 * 用于动画
 * @param ratio 0-1
 * @returns 0-1
 */
export const ease = (ratio) =>
  (1 - Math.cos(ratio * Math.PI)) / 2;


// IP地址转换成 Number
export const ipToNumber = (ip) =>{
  const numbers = ip.split(".");  
  return parseInt(numbers[0])*256*256*256 + parseInt(numbers[1])*256*256 + parseInt(numbers[2])*256 + parseInt(numbers[3]);  
};

// Number地址转换成 IP地址
export const numberToIp = (number)  => {
  return (Math.floor(number/(256*256*256))) + "." +   
  (Math.floor(number%(256*256*256)/(256*256))) + "." +   
  (Math.floor(number%(256*256)/256)) + "." +   
  (Math.floor(number%256)); 
};

// 20位随机字母数字
export const randomCode20 = ()  => {
  const randomData = [
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z"
  ];
  let result = "";
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].forEach(() => result += randomData[Math.round(Math.random()*36)])
  // for (let i = 0; i < 20; i++) {
  //   result += randomData[Math.round(Math.random()*36)];
  // }
  return result;
};