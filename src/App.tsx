import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const value = Array.from({ length: 50 }).map((item) => {
        return { email: "user01@user.com", password: "123456789" };
      });
      const startedDate = new Date();
      const data = await Promise.all(
        value.map((item) =>
          axios.post(
            "https://geteway.iccdiscipolat.com/api/en/v1/auth/login",
            item
          )
        )
      );
      const endedDate = new Date();
      console.log(data);
      console.log(
        "le time mis:",
        (endedDate.getTime() - startedDate.getTime()) / 1000,
        " s"
      );
    })();
  }, [count]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
