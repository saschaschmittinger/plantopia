const TextButton = () => {
	const handleSubmit = () => {
		console.log('submit')
	}
	return (
		<button
			onClick={handleSubmit}
			className="flex items-center gap-2 bg-slate-950 px-8 py-2 text-slate-50 ring-slate-950 ring-offset-2 ring-offset-slate-50 transition-all hover:bg-slate-800 focus:outline-none focus-visible:ring-4"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>

			<span>Add Plant</span>
		</button>
	)
}

export default TextButton
