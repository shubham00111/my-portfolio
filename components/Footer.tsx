import { user } from "@/app/data/user";

const Footer = () => {
  return (
    <footer className="border-t-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-black text-2xl tracking-tighter select-none">
          S<span className="text-[#ff90e8]">R</span>
        </div>

        <p className="text-sm text-muted-foreground font-medium text-center">
          © 2025 Shubham Rawat · Built with Next.js & React
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
