import Link from "next/link";

export default function Home() {
  return (
      <main>
        <h1>Harvard Art Gallery</h1>
        <p>Explore artworks from Harvard Art Gallery.</p>
        <Link href="/artworks">Browse artwork</Link>
      </main>
  );
}
