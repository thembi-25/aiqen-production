import { oauthSignInAction } from "@/app/actions/auth";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.39l4.01-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.43-1.34-1.82-1.34-1.82-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.28 1.84 1.28 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.46-2.45 1.22-3.31-.12-.31-.53-1.57.12-3.28 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.29-1.59 3.29-1.26 3.29-1.26.65 1.71.24 2.97.12 3.28.76.86 1.22 1.96 1.22 3.31 0 4.74-2.81 5.78-5.49 6.09.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .32.22.71.83.59A12.3 12.3 0 0 0 24 12.3C24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}

export function OAuthButtons({ callbackUrl }: { callbackUrl: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <form action={oauthSignInAction.bind(null, "google", callbackUrl)}>
        <button
          type="submit"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-full gap-2")}
        >
          <GoogleIcon />
          Google
        </button>
      </form>

      <form action={oauthSignInAction.bind(null, "github", callbackUrl)}>
        <button
          type="submit"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-full gap-2")}
        >
          <GitHubIcon />
          GitHub
        </button>
      </form>
    </div>
  );
}
