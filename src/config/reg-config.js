export default {
    PHONE: /^1[0-9]{10}$/,
    RIGHTPHONE: /^1(3|4|5|7|8)\d{9}$/,
    IDCARD: /^\d{6}((?:19|20)((?:\d{2}(?:0[13578]|1[02])(?:0[1-9]|[12]\d|3[01]))|(?:\d{2}(?:0[13456789]|1[012])(?:0[1-9]|[12]\d|30))|(?:\d{2}02(?:0[1-9]|1\d|2[0-8]))|(?:(?:0[48]|[2468][048]|[13579][26])0229)))\d{2}(\d)[xX\d]$/,
    CHANANAME: /^[\u4e00-\u9fa5]{2,4}$/,
    EMAIL: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
    CARLICENSE: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/,
    FRAMENO: /^[A-Z]{1}[A-Z0-9]{15}[0-9]{1}$/,
    ENGINENO: /^[a-zA-Z0-9]{6,30}$/,
    SEATS: /^[1-9]$/,
    EXHAUSTSCALE: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
    NOTEMPTY: /\S+/,
    // PASSWORD: /^[a-zA-Z]\w{8,20}$/,
    PASSWORD: /^[\x21-\x7E]{8,20}$/,
    // PASSWORD: /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[0-9A-Za-z!-)]{8,}$/,
    // USERNAME: /\S{4,20}$/,
    // USERNAME:  /^[a-zA-Z]\w{4,19}$/,
    USERNAME:  /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/,
    LOGINNAME:/\S{4,20}/,
    // USERNAME: /^[\da-zA-Z\u4E00-\u9FA5]{1,10}$/,
    NAME: /^[\da-zA-Z\u4E00-\u9FA5]{1,10}$/,
    COMPANY: /^[\da-zA-Z\u4E00-\u9FA5]{1,25}$/,
    SHORTHAND: /^[\da-zA-Z\u4E00-\u9FA5]{1,10}$/,
    NODENAME: /^[\da-zA-Z\u4E00-\u9FA5]{0,50}$/,
    NODEDISC: /^(.|\n){0,150}$/,
    PHONETEL:/^\d{12}$/,
    ROLENAME: /^[\da-zA-Z\u4E00-\u9FA5]{1,12}$/,
    TITLENAME: /^[\da-zA-Z\u4E00-\u9FA5]{1,60}$/,
	RATE: /^(\d|[1-9]\d+)(\.\d+)?$/,
    NUMBER:/^\w{15}$|^\w{18}$/,
    LEGAL:/^\w{20}$/,
    COMNAME:/^[\da-zA-Z\u4E00-\u9FA5]{1,20}$/,
    MINUS:/^\d+(\.\d+)?$/,
    CHINESE:/^[\u4E00-\u9FA5]+$/,
    ENGLISH:/^[\a-zA-Z]+$/,
}