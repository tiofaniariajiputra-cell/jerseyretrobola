import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold">JerseyRetroBola</h1>
        <p className="mt-4 max-w-xl text-center text-zinc-600">Selamat datang di JerseyRetroBola — tempat koleksi jersey retro terbaik.</p>

        <div className="mt-8 flex gap-3">
          <Link href="/products" className="rounded bg-black px-4 py-2 text-white">
            Lihat Produk
          </Link>
          <Link href="/info" className="rounded border px-4 py-2">
            More Info
          </Link>
          <Link href="/login" className="rounded px-4 py-2">
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
