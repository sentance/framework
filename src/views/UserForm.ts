import { User, UserProps } from "../models/User";
import { View } from "../views/View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#setName": this.onSetName,
      "click:#set-age": this.onRandomButtonClick,
      "click:#save-model": this.onSaveClick,
    };
  }

  onSetName = (): void => {
    this.model.setName(this.parent.querySelector("input").value);
  };
  onRandomButtonClick = (): void => {
    this.model.setRandomAge();
  };
  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
        <div>
         <h1>User Form</h1>
         <input placeholder=${this.model.get("name")} />
         <button id="setName">Change name</button>
         <button id="set-age">Set random age</button>
         <button id="save-model">Save user</button>
        </div>
        `;
  }
}
