import { useState } from "react";
import CardList from "../src/components/Card_list";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="temp-text">
        <h1> mca js final projects</h1>
        <CardList />
        <p>
          * uploaded by coders that want their projects displayed <br />
          only did this page so far but login/upload will b done shortly
        </p>

        <p>
          //notes <br />
          <br /> i'll add all the logins to save time over-doing auth bs, just
          need to know who wants to be able to upload.
          <br /> couldddd add headshots/pfp to the card, if aanyone has the will
          power to implement that, let me know, I'll add you a branch, same to
          anyone that wants to style this thang up a bit
          <br />
          <br />
          user/pass will be formatted: (all lowercase) <br /> username =
          firstname_lastname
          <br /> password = ascii value of the 1st and 3rd letter of your first
          name 🤠
        </p>
      </div>
    </>
  );
}

export default App;
