/**
 * Created by 15236 on 2017/5/24.
 */
export const contractMutation = {
  ["UPDATE_CONTRACT_LIST"](state,data){
    state.contractList = data;
  },
  ["UPDATE_CONTRACT_EXEC_LIST"](state,data){
    state.contractExecListGetter = data;
  }
};
