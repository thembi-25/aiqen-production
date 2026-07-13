export function PageHeroGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-[-16rem] left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
    </div>
  );
}
