export function PageHeroGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-x-0 top-0 h-px w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent, var(--border), transparent)",
        }}
      />
    </div>
  );
}
