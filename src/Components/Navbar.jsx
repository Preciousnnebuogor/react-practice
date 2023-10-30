import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h1>PRESH</h1>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>REGISTER</li>
        <li>CONTENT</li>
      </ul>
    </nav>
  );
}
