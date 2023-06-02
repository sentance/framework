import axios from "axios";
import { User } from "./models/User";

const newUser = new User({ name: "Serget", age: 51 });

newUser.save();
// axios.get("http://localhost:3000/users/3").then((data) => {
//   Object.values(data.data).map((item) => {
//     if (item.name != undefined) {
//       console.log(item.name);
//     }
//   });
// });
setTimeout(() => {
  console.log(newUser);
}, 4000);
