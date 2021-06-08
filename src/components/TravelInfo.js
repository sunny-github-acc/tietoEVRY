import { useState } from "react";
import Input from "./Input";

const Info = () => {
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");

  return (
    <>
      <Input placeholder={"Start"} setInput={setStart} />
      {start}
      {finish}
      <Input placeholder={"Finish"} setInput={setFinish} />
    </>
  );
};

export default Info;
