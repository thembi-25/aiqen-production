type HeadingProps = {
  children: React.ReactNode;
  size?: "hero" | "section" | "subsection";
};

export function Heading({
  children,
  size = "section",
}: HeadingProps) {
  const styles = {
    hero:
      "text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-balance",

    section:
      "text-3xl md:text-4xl font-semibold tracking-tight text-balance",

    subsection:
      "text-xl md:text-2xl font-semibold tracking-tight",
  };

  return (
    <h2 className={styles[size]}>
      {children}
    </h2>
  );
}
