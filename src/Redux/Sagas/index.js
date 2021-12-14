import {takeEvery} from'redux-saga/effects'


function* workersaga(){
    console.log(' Hello  new World ')
}
function* rootsSaga(){
   yield takeEvery('HELLO', workersaga)
}

export default rootsSaga 