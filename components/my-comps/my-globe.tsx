import Globe from "@/components/ui/globe";
import { ThemeModeToggle } from "../theme-toggle";

export function GlobeDemo() {
  return (
    <div className="relative min-h-[98vh] flex flex-col size-full max-w-full items-center justify-start overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <div className="absolute right-2 sm:right-4 top-2 sm:top-4">
        <div className="relative">
          <ThemeModeToggle />
        </div>
      </div>
      <span className="mt-20 pointer-events-none whitespace-pre-wrap bg-gradient-to-b dark:bg-gradient-to-t from-black dark:from-25% to-to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>

      <Globe className="top-48 sm:top-40 max-w-full" />
      <div
        className={`pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]`}
      />
    </div>
  );
}
