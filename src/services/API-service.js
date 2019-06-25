import Http from 'axios'
import API from '@/config/API-config'
Http.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8"

class ApiService{
    constructor(){
        this.TestURL ={
            imgTestURL:this.get.bind(this, API.TestURL),
            acgclubURL:this.get.bind(this, API.AcgclubPictures)
        }
    }
    get(url, params) {
        // if(params) {
        //     url += encodeParams(params);
        // }
        return Http.get(url).then(res => res.data)
    }
    post(url,params){
        typeof params === 'undefined' ? params = {} : '';
        return Http.post(url, params).then(res => res.data)
    }
}

export default new ApiService()