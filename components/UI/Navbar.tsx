function Navbar() {
	return (
		<div className="py-4">
			<nav className="flex justify-between items-center">
				<h1 className="text-xl font-bold ">
					<a
						className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
						href="#"
					>
						InvestorsHoldings
					</a>
				</h1>
				<ul className="flex gap-4">
					<li>
						<a
							className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
							href="#"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
							href="#"
						>
							Github
						</a>
					</li>
					<li>
						<a
							className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
							href="#"
						>
							About
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
