import { http } from "./service"

export const queryList = async(params) => {
  const param = {
    method: "get",
    url: "https://result.eolinker.com/2wXUu3wf3a34424118f2139a38fee7e0969f6078dbc9650?uri=/planList",
  }
  const res = await http({ ...param });
  return res;
}