import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold">Sobriety</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Daily clarity cards, simple reflections, and progress tracking to help
          you quit alcohol. Start free—no account required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/app"
            className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black"
          >
            Start free
          </Link>
          <Link
            href="/community"
            className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600"
          >
            View community
          </Link>
        </div>
      </div>
    </main>
  );
}
