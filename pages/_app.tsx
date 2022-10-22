import type { AppProps } from "next/app";
import "windi.css";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className=" bg-dark-700 text-white px-4 ">
			<div className="max-w-[1200px] font-mono flex flex-col justify-center min-h-[100vh] m-auto">
				<Navbar />
				<div className="flex-1">
					<Component {...pageProps} />
				</div>
				<div className="mt-auto">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
