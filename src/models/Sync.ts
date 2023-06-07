import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rooUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rooUrl}/${id}`);
  }
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      //put
      return axios.put(`${this.rooUrl}/${id}}`, data);
    } else {
      //post
      return axios.post(`${this.rooUrl}`, data);
    }
  }
}
