import Image from "next/image";
import Navigation from "./Navigation";
import { logo } from "@/utils/constants";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="bg-black p-6 text-white flex justify-between items-center">
      <Link href={"/"}>
        <Image alt="Logo" src={logo} width={45} height={45}></Image>
      </Link>
      <SearchBar></SearchBar>

      <Navigation></Navigation>
    </header>
  );
}
