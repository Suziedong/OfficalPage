import 'whatwg-fetch';
const INIT = 'INIT';
const FAIL = 'FAIL';
const SUCC = 'SUCC';


const initialState = {
  loginstatus : false
};

export default function login(state = initialState, action = {type: INIT}) {
  console.log('sss', action.data)
  switch (action.type) {
    case SUCC:
      return {loginstatus:action.data}
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

export function submitData(account, password){
  return async (dispatch,getState) =>{
    //const rsp = await fetch('https://socket-center.class100.com/servlist');

    //const data = await rsp.json();

    const formData = new FormData()
    formData.append('account', account)
    formData.append('password', password)
    // const rsp = await fetch('/xxx',{
    //   method : 'POST',
    //   body : formData
    // })
    //const data = await rsp.json()
    const data = true
    dispatch(ajaxSuccess(data));

  }
}







