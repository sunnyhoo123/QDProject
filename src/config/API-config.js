const BASE = process.env.API_ROOT,
    JSON_BASE = process.env.JSON_ROOT,
    TOTAL = `${BASE}/base`,
    NODE_URL = `${TOTAL}/NODE`,
    NODE = {
        list:`${NODE_URL}list`
    },
    TestURL = 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1',
    AcgclubPictures = 'https://rabtman.com/api/v2/acgclub/pictures'
export default{
    NODE,
    JSON_BASE,
    TestURL,
    AcgclubPictures
}