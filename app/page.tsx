import Link from "next/link";

export default function Home() {
  return (
    <div className="site-bg min-h-screen">
      <div className="container-center py-12">
        <div className="card card-body">
          <div className="text-center">
            <h1 className="text-4xl font-bold">JerseyRetroBola</h1>
            <p className="mt-2 muted">Koleksi jersey retro pilihan — kualitas dan nostalgia dalam satu paket.</p>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl card-title">Featured</h2>
            <p className="mt-2 muted">Beberapa item unggulan dari koleksi kami.</p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="rounded card">
                <div className="h-36 w-full bg-zinc-100" />
                <div className="card-body">
                  <h3 className="card-title">Jersey Retro A</h3>
                  <p className="muted text-sm">Ukuran: M • Kondisi: Like New</p>
                </div>
              </article>

              <article className="rounded card">
                <div className="h-36 w-full bg-zinc-100" />
                <div className="card-body">
                  <h3 className="card-title">Jersey Retro B</h3>
                  <p className="muted text-sm">Ukuran: L • Kondisi: Good</p>
                </div>
              </article>
            </div>

            <div className="mt-6">
              <Link href="/products" className="btn-primary">
                Jelajahi Semua Produk
              </Link>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl card-title">Kenapa memilih kami</h2>
            <ul className="mt-3 list-disc pl-5 muted text-sm">
              <li>Kurasi jersey berkualitas</li>
              <li>Pengiriman cepat dan aman</li>
              <li>Layanan pelanggan responsif</li>
            </ul>
          </section>

          <footer className="mt-8 text-center muted text-sm">
            © {new Date().getFullYear()} JerseyRetroBola — All rights reserved
          </footer>
        </div>
      </div>
    </div>
  );
}
