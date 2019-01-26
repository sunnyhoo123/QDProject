const BASE = process.env.API_ROOT,
    JSON_BASE = process.env.JSON_ROOT,
    TOTAL = `${BASE}/base`,
    NODE_URL = `${TOTAL}/NODE`,
    NODE = {
        list:`${NODE_URL}list`
    }
export default{
    NODE,
    JSON_BASE 
}