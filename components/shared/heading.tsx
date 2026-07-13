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
      "text-5xl md:text-7xl font-bold tracking-tight leading-tight",

    section:
      "text-4xl md:text-5xl font-bold tracking-tight",

    subsection:
      "text-2xl md:text-3xl font-semibold",
  };

  return (
    <h2 className={styles[size]}>
      {children}
    </h2>
  );
}
