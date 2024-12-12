import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);

  // const handleToggle = () => {
  //   setShowPassword((prev) => !prev);
  // };
  // const increaseCount = () => {
  //   setCount(count + 1);
  // };
  // const API = async () => {
  //   try {
  //     const url = "https://www.example.com";
  //     const res = await fetch(url, {
  //       method: "Post",
  //       body: JSON.stringify({
  //         username: "example",
  //         password: { password },
  //       }),
  //     });
  //     setData(res.data);
  //   } catch (err) {
  //     console.error("Fetching Problem", err.message);
  //   }
  // };
  // useEffect(() => {
  //   API();
  // }, []);

  const inputRef = useRef(null);
  const focusInputBox = () => {
    inputRef.current.focus(); // Focus on the input box.
  };

  return (
    <>
      <div>
        <button onClick={focusInputBox}>count : {count} </button>
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your Password"
          value={password}
        />
        {/* <span
          onClick={handleToggle}
          style={{
            cursor: "pointer",
          }}
        >
          {showPassword ? "🙈" : "👁️"}
        </span> */}
        {/* <p>Here's the fetched information : {data}</p> */}
      </div>
    </>
  );
}

export default App;
