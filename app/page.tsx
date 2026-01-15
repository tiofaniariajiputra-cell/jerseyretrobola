import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="text-4xl font-bold">JerseyRetroBola</h1>
        <p className="mt-2 text-zinc-600">Koleksi jersey retro pilihan — kualitas dan nostalgia dalam satu paket.</p>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-20">
        <section className="rounded border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <p className="mt-2 text-sm text-zinc-600">Beberapa item unggulan dari koleksi kami.</p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded border p-4">
              <div className="h-36 w-full bg-zinc-100" />
              <h3 className="mt-3 font-medium">Jersey Retro A</h3>
              <p className="text-sm text-zinc-600">Ukuran: M • Kondisi: Like New</p>
            </article>

            <article className="rounded border p-4">
              <div className="h-36 w-full bg-zinc-100" />
              <h3 className="mt-3 font-medium">Jersey Retro B</h3>
              <p className="text-sm text-zinc-600">Ukuran: L • Kondisi: Good</p>
            </article>
          </div>

          <div className="mt-6">
            <Link href="/products" className="rounded bg-black px-4 py-2 text-white">
              Jelajahi Semua Produk
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Kenapa memilih kami</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-600">
            <li>Kurasi jersey berkualitas</li>
            <li>Pengiriman cepat dan aman</li>
            <li>Layanan pelanggan responsif</li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 border-t py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} JerseyRetroBola — All rights reserved
      </footer>
    </div>
  );
}
