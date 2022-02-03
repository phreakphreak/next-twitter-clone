import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import SideBar from "../components/SideBar";
import TweetSection from "../components/TweetSection";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 border-l-[1px] border-r-[1px] border-[#2f3336]">
        <div className="min-h-screen min-w-[600px]">
          <header></header>
          <TweetSection />
        </div>
      </div>
      <SideBar />
    </div>
  );
}
