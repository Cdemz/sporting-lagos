import Image from "next/image";
import Loader from "./components/loader";

export default function Home() {
  return (
    <main className="bg-black">
      <Loader/>
      <h1 className='text-red-500 text-2xl grate'>PLAYERS</h1>
      <Image
      src="./assets/sporting-logo_biealj.svg"
      alt="logp"
      width={300}
      height={300}/>
    </main>
  );
}
