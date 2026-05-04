const GutterSeparator = ({ className }: { className?: string }) => {
  return (
    <div className="screen-line-top screen-line-bottom">
      <div
        className={[
          "relative h-8 w-full",
          "before:absolute before:inset-y-0 before:left-[-100vw] before:w-[200vw]",
          "before:bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_0,transparent_50%)]",
          "before:[background-size:10px_10px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
};

export default GutterSeparator;
