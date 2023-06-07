import axios from "axios";
import { User } from "./models/User";

const user = new User({
  name: "Igor",
  age: 0,
});

console.log(user.get("name"));

user.on("change", () => console.log("user changed"));

user.set({ name: "Igos" });

console.log(user.get("name"));
