import styles from "./page.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navLogo}>
        <h1>©</h1>
        <h2>Code By Deepak <span>Patankar</span></h2>
      </div>
      <div className={styles.searchContainer}>
        <form>
            <input type="text" placeholder="Search" />
            <button>🔍</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
