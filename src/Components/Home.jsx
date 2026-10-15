import { Link } from "react-router";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Home() {
	const favorites = products.filter((product) => product.favorite);

	return (
		<>
			<section className="py-16 px-5 min-h-4/5 border-b border-gray-300 bg-gray-50 text-green-800">
				<h2 className="text-4xl font-bold mb-4">Welcome to Bangor Club</h2>
				<p className="text-2xl mb-2">Burger Bangor adalah salah satu merek gerai makanan cepat saji (fast food) lokal asal Indonesia yang berfokus pada menu burger dengan kualitas premium namun harga terjangkau dengan burger halal dengan daging sapi Australia, ayam crispy, hot dog, sampai side dish, semua ada. Tinggal pilih yang paling cocok sama mood kamu hari ini.</p>
			</section>

			<section className="py-16 px-5 border-b border-gray-300 bg-white text-green-800">
				<h2 className="text-3xl font-bold mb-6">Menu Favorit</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{favorites.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
				<Link
					to="/menu"
					className="inline-block mt-8 bg-green-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700"
				>
					Lihat semua menu
				</Link>
			</section>
		</>
	)
}

export default Home