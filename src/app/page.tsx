import Image from "next/image";
import Loader from "./components/loader";
import Try from "./components/try";

export default function Home() {
  return (
    <main className="bg-black">
      <Loader/>
      <h1 className='text-red-500 text-2xl grate'>PLAYERS</h1>
     <Try/>
    </main>
  );
}
