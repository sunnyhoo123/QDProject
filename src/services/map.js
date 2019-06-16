export function loadJs (url, id) {
  return new Promise((resolve, reject) => {
    if (!id || !document.getElementById(id)) {
      const fjs = document.getElementsByTagName('script')[0]
      const script = document.createElement('script')
      if (id) {
        script.setAttribute('id', id)
      }
      script.type = 'text/javascript'
      script.onload = script.onreadystatechange = function () {
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          script.onload = script.onreadystatechange = null
          resolve()
        }
      }
      script.src = url
      fjs.parentNode.insertBefore(script, fjs)
    } else {
      resolve()
    }
  })
}
export function  loadMap () {
  return new Promise((resolve,reject) =>{
    loadJs('http://api.map.baidu.com/api?v=2.0&ak=rK0GNOlklNNKMujnmEIQau5gXosRkWIm','Script').then((BMap) => {
    console.log(BMap)
    console.log(window)
    // setTimeout(() =>{
    //     resolve(window.BMap)
    //   },100)    
    })
  })
}