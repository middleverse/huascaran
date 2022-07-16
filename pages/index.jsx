import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <div>Hello world 👋</div>;

  // return (
  //   <div>
  //     <h1>First. Automated. Deploy.</h1>

  //     <header title="Develop. Preview. Ship. 🚀" />
  //     <ul>
  //       {names.map((name) => (
  //         <li key="{name}">{name}</li>
  //       ))}
  //     </ul>

  //     <button onClick="{handleClick}">Like ({likes})</button>
  //   </div>
  // );
}
