import { useState } from "react";
import { Link, Routes, Route } from "react-router";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact"

const links = [
	{ to: "/", label: "Home" },
	{ to: "/menu", label: "Menu" },
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 bg-white text-green-800 p-3 flex flex-wrap justify-between items-center z-9999 shadow-md border">
				<h1 className="text-4xl font-extrabold p-4 m-2 text-center">Bangor Burger</h1>

				{/* Tombol hamburger (hanya tampil di layar kecil) */}
				<button
					className="md:hidden border border-green-800 rounded px-3 py-1 mr-2 font-bold"
					onClick={() => setOpen((prev) => !prev)}
					aria-label="Buka menu navigasi"
					aria-expanded={open}
				>
					{open ? "Tutup" : "Menu"}
				</button>

				<nav className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}>
					<ul className="flex flex-col md:flex-row list-none gap-4 md:gap-8 font-bold py-2 md:py-0">
						{links.map((link) => (
							<li key={link.to}>
								<Link
									to={link.to}
									onClick={() => setOpen(false)}
									className="hover:text-green-300 block md:inline"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}