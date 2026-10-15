export default function MessageItem({ name, email, messages }) {
	return (
		<li className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">
			<p className="font-bold">{name}</p>
			<p className="text-sm text-gray-500 mb-2">{email}</p>
			<p className="whitespace-pre-line wrap-break-word">{messages}</p>
		</li>
	);
}