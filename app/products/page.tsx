export default function ProductsPage() {
  const products = [
    { id: 1, name: "Jersey Retro A", price: "Rp 250.000", size: "M" },
    { id: 2, name: "Jersey Retro B", price: "Rp 300.000", size: "L" },
    { id: 3, name: "Jersey Retro C", price: "Rp 200.000", size: "S" },
  ];

  return (
    <div className="min-h-[60vh] bg-zinc-50 py-8">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-semibold">Produk</h1>
        <p className="mt-2 text-sm text-zinc-600">Koleksi jersey retro kami — klik item untuk detail.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.id} className="rounded border bg-white p-4 shadow-sm">
              <div className="h-28 w-full bg-zinc-100" />
              <h3 className="mt-3 font-medium">{p.name}</h3>
              <p className="text-sm text-zinc-600">Size: {p.size} • Price: {p.price}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
