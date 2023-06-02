import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    //@ts-ignore
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  save(): void {
    const id = this.get("id");

    if (this.get("id")) {
      //put
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data);
    } else {
      //post
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
