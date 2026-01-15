import Link from "next/link";

export default function Home() {
  return (
    <div className="site-bg min-h-screen flex items-start justify-center">
      <div className="container-center py-12">
        <section className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold">JerseyRetroBola</h1>
          <p className="mt-3 muted">Koleksi jersey retro pilihan — kualitas dan nostalgia dalam satu paket.</p>
          <div className="mt-6">
            <Link href="/products" className="btn-primary">Lihat Koleksi</Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card rounded-lg">
            <div className="card-body">
              <h2 className="text-2xl card-title">Featured</h2>
              <p className="mt-2 muted">Beberapa item unggulan dari koleksi kami.</p>

              <div className="mt-4 space-y-4">
                <article className="rounded card overflow-hidden">
                  <div className="h-40 w-full bg-zinc-100" />
                  <div className="card-body">
                    <h3 className="card-title">Jersey Retro A</h3>
                    <p className="muted text-sm">Ukuran: M • Kondisi: Like New</p>
                  </div>
                </article>

                <article className="rounded card overflow-hidden">
                  <div className="h-40 w-full bg-zinc-100" />
                  <div className="card-body">
                    <h3 className="card-title">Jersey Retro B</h3>
                    <p className="muted text-sm">Ukuran: L • Kondisi: Good</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <aside className="card rounded-lg">
            <div className="card-body">
              <h3 className="card-title">Kenapa memilih kami</h3>
              <ul className="mt-3 list-disc pl-5 muted text-sm">
                <li>Kurasi jersey berkualitas</li>
                <li>Pengiriman cepat dan aman</li>
                <li>Layanan pelanggan responsif</li>
              </ul>
              <div className="mt-6">
                <Link href="/info" className="btn-outline">Pelajari lebih lanjut</Link>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-10 text-center site-footer">
          © {new Date().getFullYear()} JerseyRetroBola — All rights reserved
        </footer>
      </div>
    </div>
  );
}
