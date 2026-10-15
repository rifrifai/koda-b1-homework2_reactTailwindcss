export default function SearchBar({ value, onChange, placeholder = "Cari menu..." }) {
	return (
		<input
			type="search"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			aria-label="Cari menu"
			className="w-full max-w-md border border-green-800 rounded-lg px-4 py-2 bg-white text-green-800 placeholder:text-green-800/50 focus:outline-none focus:ring-2 focus:ring-green-600"
		/>
	);
}