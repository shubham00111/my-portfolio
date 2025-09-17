import Header from "@/components/Header";
import headerLogo from "@/app/assets/header-logo-light.svg";
import profileImage from "@/app/assets/profile_pic.png";
import Image from "next/image";
export default function Portfolio() {
  return (
    <div className="max-w-screen border-1-[transparent] screen-line-after ">
      <div className="max-w-3xl mx-auto pattern-bg  border-x-1 border-x-[var(--border)">
        <div className="mx-auto w-20 md:w-45">
          <Image src={headerLogo} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto screen-line-before border-x-1 border-x-[var(--border)]">
        <div className="md:w-45">
          <Image
            src={profileImage}
            alt="profile_pic"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
