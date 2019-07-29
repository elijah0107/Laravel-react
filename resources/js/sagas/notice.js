import { call, put } from 'redux-saga/effects';
import { Creators as OrdersCreators } from '../reducers/notice';

/**
 * Делает запрос на получение списка адресов доставки в API и обрабатывает ответ.
 * @generator
 * @param {Object} options.api Объект с API.
 */
export function* request ({ api }, { email = '', name = '' }) {
  const response = yield call(api.getNotice, { email: email, name: name });
  const { ok, data } = response || {};
  if (ok) {
    const { items } = data || {};
    if (Array.isArray(items)) {
      const processedOrders = yield call(processOrders, items);
      yield put(OrdersCreators.success(processedOrders));
    }
  } else {
    yield put(OrdersCreators.failure());
  }
}

/**
 * Обрабатывает массив заказов.
 * @param {Array} orders Массив заказов, пришедший от API.
 * @return {Array} Обработанный массив заказов с нужными полями.
 */
export function processOrders (orders) {
  return Array
    .from(orders || [])
    .map(processOrder);
}

/**
 * Обрабатывает массив заказов.
 * @param {Object} order Массив заказов, пришедший от API.
 * @return {Object} Обработанный заказ с нужными полями.
 */
export function processOrder (order) {
  order = order || {};
  return {
    test: 'test',
    ...order,
  };
}
