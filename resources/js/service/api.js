import apisauce from 'apisauce';

/**
 * Возвращает новый экземпляр API.
 * @return {Object} Экземпляр API.
 */
export const createAPI = () => {
  const api = apisauce.create({
    timeout: 20000,
    withCredentials: true,
  });

  return {
    getNotice: ({ email, name }) => {
      return api.post('/api/notice/', {
        email,
        name,
      });
    },
  };
};
