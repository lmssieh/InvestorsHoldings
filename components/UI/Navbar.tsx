import Link from "next/link";

function Navbar() {
	return (
		<div className="py-4">
			<nav className="flex justify-between items-center">
				<h1 className="text-xl font-bold ">
					<Link href="/">
						<a className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out">
							InvestorsHoldings
						</a>
					</Link>
				</h1>
				<ul className="flex gap-4">
					<li>
						<a
							className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
							href="#"
						>
							About
						</a>
					</li>{" "}
					<li>
						<a
							className="underline underline-red-500 hover:bg-red-500 transition-all duration-200 ease-out"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/lmssieh/InvestorsHoldings"
						>
							Github ↗︎
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
