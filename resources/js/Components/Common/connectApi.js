import { create } from "apisauce";

const api = create({
  headers: {'Accept': 'application/vnd.github.v3+json'}
});

export const connectGet = (url) => {
  return api
    .get(url)
    .then((response) => {
      return response
    })
    .catch((err) => console.log(err))
}

export const connectPost = (url, params) => {
  return api
    .post(url, params, {headers: {'x-gigawatts': '1.21'}})
}