import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Events } from "./Events";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(new Attributes<UserProps>(attr), new Events(), new ApiSync<UserProps>(rootUrl));
  }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
