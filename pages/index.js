import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <h1>Hello world again</h1>
      <SideBar />
    </>
  );
}
