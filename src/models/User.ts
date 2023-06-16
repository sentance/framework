import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Events } from "./Events";
import { Collection } from "./Collection";
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

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>("http://localhost:3000/users", (json: UserProps) => User.buildUser(json));
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
  setName(name: string): void {
    this.set({ name });
  }
}
