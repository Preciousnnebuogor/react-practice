import { useState } from "react";
//import styles from "./Form.module.css"

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)

  }
  return (
    <div>
      <h1 className={styles.words}>Kindly fill in the brackets below.Your informations are saved with us.</h1>
        {name.firstName} - {name.lastName}
      <form className={styles.form}onSubmit={handleSubmit}>
        <input
          className={styles.input}onChange={(e) => setName({...name,firstName:e.target.value})}
          type="text"
          value={name.firstName}
          placeholder="First Name"
        ></input>
        <br/>
        <input
          className={styles.input}onChange={(e) => setName({...name,lastName:e.target.value})}
          type="text"
          value={name.lastName}
          placeholder="Last Name"
        ></input>
        <br/>
         <button className={styles.submit}onClick={(e)=> handleSubmit(e)}>SUBMIT</button>
      </form>
    </div>
  );
}
