import { all, takeLatest } from 'redux-saga/effects';

// типы действий
import { Types as OrderType } from '../reducers/order';

// саги
import * as OrderSagas from './order';

/**
 * Возвращает сагу-наблюдатель.
 * @param {Object} options Опции для передачи в саги.
 * @param {Object} options.api Экземпляр API.
 * @param {Object} options.history Экземпляр API.
 * @return {Function} Сага-наблюдатель.
 */
export function createWatcher (options = {}) {
  return () => watch({ ...options });
}

/**
 * Главная сага-наблюдатель приложения.
 * @param {Object} options Опции для передачи в саги.
 * @generator
 */
export default function* watch (options = {}) {
  yield all([
    takeLatest(OrderType.REQUEST, OrderSagas.request, options),
  ]);
}
