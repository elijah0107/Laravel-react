import apisauce from 'apisauce';
import { SIMALAND_URI } from './constants';

/**
 * Возвращает новый экземпляр API.
 * @return {Object} Экземпляр API.
 */
export const createAPI = () => {
  const api = apisauce.create({
    baseURL: `https://${SIMALAND_URI}/api`,
    timeout: 20000,
    withCredentials: true,
  });

  return {
    getOrder: ({ id }) => api.get(`/v3/order/${id}`),
  };
};
