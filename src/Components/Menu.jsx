import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { products } from "../data/products";

export default function Menu() {
	const [search, setSearch] = useState("");

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(search.trim().toLowerCase())
	);

	return (
		<section className="py-16 px-5 min-h-4/5 border-b bg-gray-50 text-green-800">
			<h2 className="text-4xl font-bold mb-4">Menu Bangor</h2>
			<p className="text-xl mb-6">Pilih menu favoritmu hari ini.</p>

			<div className="mb-8">
				<SearchBar value={search} onChange={setSearch} />
			</div>

			{filteredProducts.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<p className="text-xl">Menu "{search}" tidak ditemukan. Coba kata kunci lain.</p>
			)}
		</section>
	);
}