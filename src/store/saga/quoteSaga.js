import { call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios'

import * as actionType from 'store/actions/actionType';

function* watchFetchProducts() {
  yield takeEvery(actionType.QUOTE, quote)
}

const getData = () => {
    return axios.get('https://favqs.com/api/qotd')
}

export function* quote() {
    try {
        const data = yield call(getData);
        const quote = yield data.data.quote.body;
        const author = yield data.data.quote.author;
        yield put({
        type: actionType.GENERATE_QUOTE,
        quote,
        author
    })
    } catch (e) {
        console.log(e)
    }
}

export default function* quoteSaga() {
    yield watchFetchProducts()
}

