/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
  let delay = t || 500;
  let timer;
  // console.log(fn)
  // console.log(typeof fn)
  return function() {
    let args = arguments;
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  }
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last;
  let timer;
  let interval = t || 500;
  return function() {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  }
};

// 隐藏页面上所有指定元素
export const hide = el => [...el].forEach(e => (e.style.display = "none"));

// 确认元素是否具有指定的类？
export const hasClass = (el, className) => el.classList.contains(className);

// 获取当前页面的滚动位置
export const getScrollPosition = (el = window) => ({ 
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft, 
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop 
});

// 平滑滚动到页面顶部
export const scrollToTop = () => {     
  const c = document.documentElement.scrollTop || document.body.scrollTop;     
  if (c > 0) {         
    window.requestAnimationFrame(scrollToTop);         
    window.scrollTo(0, c - c / 8);     
  } 
}; 

// 确认父元素是否包含子元素
export const elementContains = (parent, child) => parent !== child && parent.contains(child); 

// 确认指定元素是否在视口可见
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {     
  const { top, left, bottom, right } = el.getBoundingClientRect();     
  const { innerHeight, innerWidth } = window;
  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// 获取一个元素内的所有图像
export const getImages = (el, includeDuplicates = false) => {     
  const images = [...el.getElementsByTagName("img")].map(img => img.getAttribute("hide"));     
  return includeDuplicates ? images : [...new Set(images)]; 
};

// 辨设备是移动设备还是桌面设备
export const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

// 获取当前 URL
export const currentURL = () => window.location.href;

// 创建一个包含当前 URL 参数的对象
export const getURLParameters = url => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf( "=" ))] = v.slice(v.indexOf( "=" ) + 1)), a), {}); 

// 从对象检索给定选择器指示的一组属性 !!
export const getDeep = (from, ...selectors) => [...selectors].map(s => s.replace(/\[([^[\]]*)\]/g, ".$1.").split(".").filter(t => t !== "").reduce((prev, cur) => prev && prev[cur], from)); 
// const get = (from, ...selectors) => [...selectors].map(s => s.replace(/\[([^\[\]]*)\]/g, ".$1.").split(".").filter(t => t !== "").reduce((prev, cur) => prev && prev[cur], from)); 

// 在给定元素上触发特定事件，且可选传递自定义数据
export const triggerEvent = (el, eventType, detail) => el.dispatchEvent(new CustomEvent(eventType, { detail }));

// 获取两个日期之间的天数间隔
export const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24); 

// 确定页面的浏览器选项卡是否处于前台活跃状态
export const isBrowserTabFocused = () => !document.hidden; 

