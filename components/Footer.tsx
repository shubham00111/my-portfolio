import VisitorCount from "@/components/VisitorCount";

const Footer = () => {
  return (
    <footer className="screen-line-top">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-8">
        <p className="text-sm text-muted-foreground">
          © 2026 Shubham Rawat. All rights reserved.
        </p>
        <VisitorCount />
      </div>
    </footer>
  );
};

export default Footer;
