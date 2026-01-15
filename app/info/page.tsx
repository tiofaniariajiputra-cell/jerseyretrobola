export default function InfoPage() {
  return (
    <div className="min-h-[60vh] bg-zinc-50 py-8">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-semibold">More Info</h1>
        <p className="mt-2 text-sm text-zinc-600">Informasi tambahan tentang project akan ditampilkan di sini.</p>

        <section className="mt-6 rounded border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-medium">Tentang JerseyRetroBola</h2>
          <p className="mt-2 text-sm text-zinc-600">Proyek ini dibuat untuk menampilkan koleksi jersey retro dengan antarmuka sederhana. Backend untuk login/register dan data produk akan dihubungkan nanti.</p>
        </section>

        <section className="mt-6 rounded border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-medium">Kontak</h2>
          <p className="mt-2 text-sm text-zinc-600">Untuk pertanyaan: support@jerseyretrobola.example</p>
        </section>
      </div>
    </div>
  );
}
