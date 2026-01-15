export default function ProductsPage() {
  const products = [
    { id: 1, name: "Jersey Retro A", price: "Rp 250.000", size: "M" },
    { id: 2, name: "Jersey Retro B", price: "Rp 300.000", size: "L" },
    { id: 3, name: "Jersey Retro C", price: "Rp 200.000", size: "S" },
    { id: 4, name: "Jersey Retro D", price: "Rp 280.000", size: "L" },
  ];

  return (
    <div className="site-bg min-h-[70vh] py-12">
      <div className="container-center">
        <div className="card">
          <div className="card-body">
            <h1 className="text-2xl card-title">Produk</h1>
            <p className="muted text-sm mt-2">Koleksi jersey retro kami — klik item untuk detail.</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article key={p.id} className="rounded card overflow-hidden">
                  <div className="h-40 w-full bg-zinc-100" />
                  <div className="card-body">
                    <h3 className="card-title">{p.name}</h3>
                    <p className="muted text-sm">Size: {p.size}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="font-semibold">{p.price}</div>
                      <button className="btn-outline">Detail</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
