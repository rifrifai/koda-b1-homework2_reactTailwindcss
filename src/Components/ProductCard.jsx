export default function ProductCard({ name, price, description, image }) {
	const formattedPrice = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
	}).format(price);

	// Jika gambar gagal dimuat, tampilkan placeholder
	function handleImageError(e) {
		e.target.onerror = null;
		e.target.src = `https://placehold.co/400x300/dcfce7/166534?text=${encodeURIComponent(name)}`;
	}

	return (
		<article className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col">
			<img
				src={image}
				alt={name}
				onError={handleImageError}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4 flex flex-col gap-2 grow">
				<h3 className="text-xl font-bold">{name}</h3>
				<p className="text-gray-600 grow">{description}</p>
				<p className="text-lg font-semibold">{formattedPrice}</p>
			</div>
		</article>
	);
}