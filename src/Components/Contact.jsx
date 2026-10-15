import UserSubmit from "./UserSubmit";

export default function Contact () {
	return (
		<>
			<section className="py-16 px-5 min-h-4/5 border-b bg-gray-50 text-green-800">
				<h1 className="text-4xl text-center">CONTACT US</h1>
				<p className="text-2xl text-center">Kami siap membantu Anda! Pilih layanan yang sesuai dengan kebutuhan Anda dan tim kami akan segera merespons.</p>
				<UserSubmit />
			</section>
		</>
	)
}