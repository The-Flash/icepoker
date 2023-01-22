import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-white gap-4">
      <h1 className="text-3xl font-bold">Icepoker</h1>
      <section className="w-3/6 text-center">
        <p>
          Icepoker, is a consensus-based technique for estimating,
          mostly used to estimate effort or relative size of user stories in software development.
          In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed.
          By hiding the figures in this way,
          the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.
        </p>
      </section>
      <section>
        <Link href="/new/game" className="border bg-blue-500 p-2 rounded-md cursor-pointer">Play now</Link>
      </section>
    </main>
  )
}
