export default function InfoPage() {
  return (
    <div className="site-bg min-h-[60vh] py-12">
      <div className="container-center">
        <div className="card">
          <div className="card-body">
            <h1 className="text-2xl card-title">More Info</h1>
            <p className="muted text-sm mt-2">Informasi tambahan tentang project akan ditampilkan di sini.</p>

            <section className="mt-6">
              <h2 className="card-title">Tentang JerseyRetroBola</h2>
              <p className="muted mt-2 text-sm">Proyek ini dibuat untuk menampilkan koleksi jersey retro dengan antarmuka sederhana. Backend untuk login/register dan data produk akan dihubungkan nanti.</p>
            </section>

            <section className="mt-6">
              <h2 className="card-title">Kontak</h2>
              <p className="muted mt-2 text-sm">Untuk pertanyaan: support@jerseyretrobola.example</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
