import { useEffect, useState } from "react";

function BeatGen() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    try {
      const response = fetch("hello/");
      console.log("response: ", response);
      setHello(response.data);
    } catch (error) {
      console.log("ERROR\n");
      console.log(error);
      setHello("error");
    }
  }, []);

  return (
    <div>
      <h1>BeatGen</h1>
      <br />
      {hello}
    </div>
  );
}

export default BeatGen;
