import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    mesage: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>
        CONTACT <span>HERE</span>
      </h1>
      <input
        type="text"
        name="name"
        id=""
        onChange={handleChange}
        value={data.name}
        placeholder="Enter Name"
      />
      <input
        type="email"
        name="email"
        id=""
        onChange={handleChange}
        value={data.email}
        placeholder="Enter Email"
      />
      <input
        type="phone"
        name="phone"
        id=""
        onChange={handleChange}
        value={data.phone}
        placeholder="Enter Phone"
      />
      <textarea
        type="message"
        id=""
        onChange={handleChange}
        value={data.message}
        cols="30"
        rows="10"
        placeholder="Type Here...."
      />
      <button type="submit">Send</button>
      <p>
        {data.name},{data.email},{data.phone},{data.message}
      </p>
    </form>
  );
}
