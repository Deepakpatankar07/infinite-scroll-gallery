"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPage } from "@/store/reducers/searchReducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [slug, setSlug] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${slug}`);
    dispatch(setPage(1));
    setSlug("");
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navLogo}>
        <h1>©</h1>
        <h2>
          Code By Deepak <span>Patankar</span>
        </h2>
      </div>
      <div className={styles.searchContainer}>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSlug(e.target.value)}
            value={slug}
          />
          <button>🔍</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
