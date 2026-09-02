import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl text-teal">
        That path is not on the map.
      </h1>
      <p className="mt-4 text-muted">
        The page you wanted is not here. Head home or send Milo an inquiry.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-cream"
        >
          Home
        </Link>
        <Link
          href="/plan"
          className="rounded-full border border-teal/20 px-5 py-2.5 text-sm font-semibold text-teal"
        >
          Plan your adventure
        </Link>
      </div>
    </main>
  );
}
