import 'whatwg-fetch';

const INIT = 'INIT';
const FAIL = 'FAIL';
const SUCC = 'SUCC';


const initialState = {
  demo : {}
};

export default function demo(state = initialState, action = {type: INIT}) {
  switch (action.type) {
    case SUCC:
      return {demo:action.data}
    default:
      return state;
  }
}

const Fail = () => ({
  type: FAIL
})

const ajaxSuccess = (info) => {
  return{
    type : SUCC,
    data : info
  }
}

export function fetchData(){
  return async (dispatch,getState) =>{
    const rsp = await fetch('https://socket-center.class100.com/servlist');

    const data = await rsp.json();

    dispatch(ajaxSuccess(data));

  }
}







