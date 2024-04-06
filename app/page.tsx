import Image from "next/image";
import CalcScreen from "./Screen/CalcScreen";

export default function Home() {
  return (
    <main className="w-full md:w-96 md:my-10 bg-black mx-auto h-screen">
      <CalcScreen/>
    </main>
  );
}
