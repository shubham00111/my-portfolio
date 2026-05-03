import { user } from "@/app/data/user";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="text-sm font-medium text-muted-foreground select-none">
          Shubham Rawat
        </div>

        <p className="text-muted-foreground text-center text-sm">
          © 2026 · Built with Next.js & React
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
