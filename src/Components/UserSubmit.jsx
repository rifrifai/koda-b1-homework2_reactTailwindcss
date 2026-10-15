import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

export default function UserSubmit() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		messages: "",
	});

	const [message, setMessage] = useState(() => {
		try {
			const saved = localStorage.getItem("contactMessages");
			const data = saved ? JSON.parse(saved) : [];
			return Array.isArray(data) ? data : [];
		} catch (error) {
			console.error(error);
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem("contactMessages", JSON.stringify(message));
	}, [message]);

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev, [name]: value,
		}))
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (!form.name.trim() || !form.email.trim() || !form.messages.trim()) {
			alert("Tidak boleh ada yang kosong!");
			return;
		}

		const newMessage = {
			id: crypto.randomUUID(),
			name: form.name.trim(),
			email: form.email.trim(),
			messages: form.messages.trim(),
		}

		setMessage((prev) => [newMessage, ...prev]);
		setForm({
			name: "",
			email: "",
			messages: "",
		});
	}

	const inputClass = "w-full border border-green-800 rounded-lg px-4 py-2 bg-white text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Kirim Pesan</h2>

				<label className="flex flex-col gap-2 font-semibold">
					Nama
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Nama lengkap"
						className={inputClass}
					/>
				</label>

				<label className="flex flex-col gap-1 font-semibold">
					Email
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="nama@email.com"
						className={inputClass}
					/>
				</label>

				<label className="flex flex-col gap-1 font-semibold">
					Pesan
					<textarea
						name="messages"
						value={form.messages}
						onChange={handleChange}
						rows={5}
						placeholder="Tulis pesan kamu di sini"
						className={inputClass}
					/>
				</label>

				<button
					type="submit"
					className="bg-green-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700"
				>
					Kirim pesan
				</button>
			</form>

			<div>
				<h2 className="text-2xl font-bold mb-4">Pesan Terkirim ({message.length})</h2>
				{message.length === 0 ? (
					<p className="text-gray-600">Belum ada pesan. Pesan yang kamu kirim akan muncul di sini.</p>
				) : (
					<ul className="flex flex-col gap-3 max-h-125 overflow-y-auto pr-1">
						{message.map((item) => (
							<MessageItem key={item.id} {...item} />
						))}
					</ul>
				)}
			</div>
		</div>
	)
}