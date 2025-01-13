import { useEffect, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState(null);

//   const handleToggle = () => {
//     setShowPassword((prev) => !prev);
//   };
//   const increaseCount = () => {
//     setCount(count + 1);
//   };
//   const API = async () => {
//     try {
//       const url = "https://www.example.com";
//       const res = await fetch(url, {
//         method: "Post",
//         body: JSON.stringify({
//           username: "example",
//           password: { password },
//         }),
//       });
//       setData(res.data);
//     } catch (err) {
//       console.error("Fetching Problem", err.message);
//     }
//   };
//   useEffect(() => {
//     API();
//   }, []);

//   const inputRef = useRef(null);
//   const focusInputBox = () => {
//     inputRef.current.focus(); // Focus on the input box.
//   };

//   return (
//     <>
//       <div>
//         <button onClick={focusInputBox}>count : {count} </button>
//         <input
//           ref={inputRef}
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter your Password"
//           value={password}
//         />
//         <span
//           onClick={handleToggle}
//           style={{
//             cursor: "pointer",
//           }}
//         >
//           {showPassword ? "🙈" : "👁️"}
//         </span>
//         {/* <p>Here's the fetched information : {data}</p> */}
//       </div>
//     </>
//   );
// }

// export default App;

// export default function App() {
//   const [payload, setPayload] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState({});

//   const formContent = [
//     { id: "1", label: "Email", type: "email", field: "email" },
//     { id: "2", label: "Password", type: "password", field: "password" },
//   ];
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPayload((prev) => ({ ...prev, [name]: value }));
//   };
//   const validateForm = () => {
//     let isValid = true;
//     const newError = {};

//     if (!payload.email || !/@/.test(payload.email)) {
//       isValid = false;
//       newError.email = "Please enter correct email.";
//     }
//     if (!payload.password || payload.password.length < 8) {
//       isValid = false;
//       newError.password = "Password is incorrect.";
//     }
//     setError(newError);
//     return isValid;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("form is submitted!", payload);
//       setPayload({ email: "", password: "" });
//     } else {
//       console.error("Some error occured", error);
//     }
//   };
//   return (
//     <>
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "beige",
//             padding: "1rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}
//         >
//           <h1>Form</h1>
//           <form className="form" onSubmit={handleSubmit}>
//             {formContent.map((form, id) => {
//               return (
//                 <div
//                   key={id}
//                   style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
//                 >
//                   <label>{form.label}:</label>
//                   <input
//                     required
//                     name={form.field}
//                     type={form.type}
//                     value={payload[form.field]}
//                     onChange={handleInputChange}
//                   />
//                   {error[form.field] && (
//                     <span style={{ color: "red", fontSize: "0.9rem" }}>
//                       {error[form.field]}
//                     </span>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

export default function formPratice() {
  const formData = [
    {
      id: 1,
      label: "Email",
      placeholder: "Enter you email",
      field: "email",
      type: "email",
    },
    {
      id: 2,
      label: "Password",
      placeholder: "Enter you password",
      field: "password",
      type: "password",
    },
  ];
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const valueChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const validateData = () => {
    let isValid = true;
    const newError = {};

    if (!payload.email) {
      isValid = false;
      newError.email = "Please enter valid email";
    }
    if (!payload.password || payload.password.length < 8) {
      isValid = false;
      newError.password = "Please enter correct Password.";
    }
    if (payload.email && payload.password) {
      isValid = true;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData()) {
      console.log("Form submitted", payload);
      setSuccess("Form submitted");
      setPayload({ email: "", password: "" });
    } else {
      console.error("Something is wrong with payload", error);
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ backgroundColor: "beige", padding: "1rem" }}>
          <h1>Form</h1>
          <form onSubmit={handleSubmit}>
            {formData.map((form, id) => {
              return (
                <div
                  className="formData"
                  key={id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label name="label" style={{ marginTop: "1rem" }}>
                    {form.label}
                  </label>
                  <input
                    required
                    type={form.type}
                    name={form.field}
                    value={payload[form.field]}
                    onChange={valueChange}
                    style={{ padding: "8px" }}
                  />

                  {error[form.field] && (
                    <span style={{ color: "red", fontSize: "0.9rem" }}>
                      {error[form.field]}
                    </span>
                  )}
                </div>
              );
            })}
            {success && (
              <span style={{ color: "green", fontSize: "0.9rem" }}>
                {success}
              </span>
            )}

            <button type="submit" style={{ marginTop: "1rem", padding: "8px" }}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
