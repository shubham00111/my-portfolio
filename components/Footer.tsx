import { user } from "@/app/data/user";

const Footer = () => {
  return (
    <footer className="border-foreground border-t-3">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="text-2xl font-black tracking-tighter select-none">
          S<span className="text-[#ff90e8]">R</span>
        </div>

        <p className="text-muted-foreground text-center text-sm font-medium">
          © 2026 Shubham Rawat · Built with Next.js & React
        </p>

        <a
          href={`mailto:${user.email}`}
          className="nb-btn-primary px-4 py-2 text-sm"
        >
          Get in touch →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
