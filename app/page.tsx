import Header from "@/components/Header";
import headerLogo from "@/app/assets/header-logo-light.svg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] border-b-1">
      <div />
      <section className="flex justify-center p-10 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center border-x-1 border-x-[var(--border) bg-size-[10px_10px] ">
        <Image src={headerLogo} alt="" width={200} className="rounded-full" />
      </section>
      <div />
    </div>
  );
}
