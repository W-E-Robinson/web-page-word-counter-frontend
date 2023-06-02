import { put, call, takeEvery, all } from "redux-saga/effects";

import { FetchWordCountRequest, WebPageInfo } from "../../actions/wordCount/types";
import {
    fetchWordCountSuccess,
    fetchWordCountFailure,
} from "../../actions/wordCount/actions";
import { FETCH_WORD_COUNT_REQUEST } from "../../actions/wordCount/actionTypes";
import { getWordCount } from "../../apis/wordCount";

export function* fetchWordCountSaga(action: FetchWordCountRequest) {
    try {
        const response: WebPageInfo = yield call(
            getWordCount,
            action.payload.webPageUrl,
        );
        yield put(
            fetchWordCountSuccess({
                webPageInfo: response,
            }),
        );
    } catch (error: any) {
        yield put(
            fetchWordCountFailure({
                error: error.message,
            }),
        );
    }
}

export default function* wordCountSaga() {
    yield all([
        takeEvery(FETCH_WORD_COUNT_REQUEST, fetchWordCountSaga),
    ]);
}
