import { call, put, select } from 'redux-saga/effects';
import { Creators as NoticeCreators } from '../reducers/notice';
import { selectEmail, selectName } from '../selectors';

/**
 * Делает запрос на получение списка адресов доставки в API и обрабатывает ответ.
 * @generator
 * @param {Object} options Объект с опциями.
 * @param {Object} options.api Объект с API.
 */
export function* request ({ api }) {
  const email = yield select(selectEmail);
  const name = yield select(selectName);
  const validated = validateContact({ email: email, name: name });
  if (validated) {
    yield put(NoticeCreators.setError(validated));
  }
  if (!validated) {
    const response = yield call(api.getNotice, { email: email, name: name });
    const { ok, data } = response || {};
    if (ok) {
      yield put(NoticeCreators.success(data));
    } else {
      yield put(NoticeCreators.failure());
    }
  }
}

/**
 * Валидирует контакты.
 * @param {Object} contact Необработанные данные.
 * @return {Object|null} Контакты.
 */
export function validateContact (contact) {
  const {
    email,
    name,
  } = contact || {};
  if (!email && !name) {
    return 'Необходимо заполнить email и name';
  }
  if (!email) {
    return 'Необходимо заполнить email';
  }
  if (!name) {
    return 'Необходимо заполнить name';
  }
  return null;
}

