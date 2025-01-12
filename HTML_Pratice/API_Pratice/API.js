const URL = "";
const body = {
  title: "this",
};

fetch(URL);

try {
  const getAPI = async () => {
    const res = fetch(URL, {
      method: "GET",
      body: JSON.stringify(body),
      headers: {},
    });
    if (!res.ok) {
      console.error(`HTTP error! Status code: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  };
} catch (error) {
  console.log("There was error sending data:", error);
}
