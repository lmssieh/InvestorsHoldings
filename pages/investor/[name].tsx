import type { NextPage } from "next";
import Head from "next/head";
import InvestorInfo from "../../components/investors/InvestorInfo";
import Portfolio from "../../components/portfolio/portfolio";
import { useRouter } from "next/router";

const InvestorPage: NextPage = () => {
	const { name } = useRouter().query;
	const formatedName: string = name?.replaceAll("_", " ");

	const o = [
		["AAPL", "APPLE INC", "COM", "037833100", 122337373, 40.8],
		["BAC", "BANK AMER CORP", "COM", "060505104", 31444432, 10.5],
		["KO", "COCA COLA CO", "COM", "191216100", 25164000, 8.4],
		["CVX", "CHEVRON CORP NEW", "COM", "166764100", 23373304, 7.8],
		["AXP", "AMERICAN EXPRESS CO", "COM", "025816109", 21016276, 7],
		["KHC", "KRAFT HEINZ CO", "COM", "500754106", 12419712, 4.1],
		["OXY", "OCCIDENTAL PETE CORP", "COM", "674599105", 9335408, 3.1],
		["MCO", "MOODYS CORP", "COM", "615369105", 6709439, 2.2],
		["USB", "US BANCORP DEL", "COM NEW", "902973304", 5513432, 1.8],
		["ATVI", "ACTIVISION BLIZZARD INC", "COM", "00507V109", 5325713, 1.8],
		["HPQ", "HP INC", "COM", "40434L105", 3424725, 1.1, 104476035, null, null],
		["BK", "BANK OF NEW YORK MELLON CORP", "COM", "064058100", 3018027, 1],
		["DVA", "DAVITA INC", "COM", "23918K108", 2886202, 1, 36095570, null, null],
		["C", "CITIGROUP INC", "COM NEW", "172967424", 2536616, 0.8],
		["KR", "KROGER CO", "COM", "501044101", 2481858, 0.8, 52437295, null, null],
		["VRSN", "VERISIGN INC", "COM", "92343E102", 2144436, 0.7],
		["VIAC", "PARAMOUNT GLOBAL", "CLASS B COM", "92556H206", 1935448, 0.6],
		["CHTR", "CHARTER COMMUNICATIONS INC N", "CL A", "16119P108", 1793974, 0.6],
		["GM", "GENERAL MTRS CO", "COM", "37045V100", 1679385, 0.6],
		["V", "VISA INC", "COM CL A", "92826C839", 1633687, 0.5],
	];

	const info = {
		"Warren Buffet": {
			name: "Warren Buffet",
			company: "Berkshire Hathaway",
			cik: "0001336528",
			personInfo: {
				description:
					"Warren Edward Buffett is an American business magnate, investor, and philanthropist. He is currently the chairman and CEO of Berkshire Hathaway. He is one of the most successful investors in the world and has a net worth of over $95 billion as of October 2022.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/5babb7f1a7ea4342a948b79a/0x0.jpg?format=jpg&crop=2327,2329,x748,y1753,safe&height=416&width=416&fit=bounds",
			},
		},
		"Peter Thiel": {
			name: "Peter Thiel",
			company: "Founders Fund",
			cik: "0001336528",
			personInfo: {
				image:
					"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQwRzEJ-OTxtFAfQ9PQ6QEZnyUZOJrTC2Czb7Hz6Bc8DRK7AXGyJiABq2eqAA2DGQB8",
			},
		},
		"George Soros": {
			name: "George Soros",
			company: "Soros Fund Management LLC",
			cik: "0001336528",
			personInfo: {
				description:
					"George Soros is a Hungarian-born American businessman and philanthropist. As of March 2021, he had a net worth of US$8.6 billion, having donated more than $32 billion to the Open Society Foundations, of which $15 billion has already been distributed, representing 64% of his original fortune.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/5f4e72bdd82a882a3012a595/0x0.jpg?format=jpg&crop=2149,2149,x886,y515,safe&height=416&width=416&fit=bounds",
			},
		},
		"Jim Simons": {
			name: "Jim Simons",
			company: "Renaissance Technologies Corp.",
			cik: "0001336528",
			personInfo: {
				description:
					"James Harris Simons is an American mathematician, billionaire hedge fund manager, and philanthropist. He is the founder of Renaissance Technologies, a quantitative hedge fund based in East Setauket, New York. He and his fund are known to be quantitative investors, using mathematical models and algorithms to make investment gains from market inefficiencies.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/5d8bd8326de3150009a51efb/0x0.jpg?format=jpg&crop=1209,1208,x1332,y0,safe&height=416&width=416&fit=bounds",
			},
		},
		"Bill Ackman": {
			name: "Bill Ackman",
			company: "Pershing Square Capital Management",
			cik: "0001336528",
			personInfo: {
				description:
					"William Albert Ackman is an American billionaire investor and hedge fund manager. He is the founder and CEO of Pershing Square Capital Management, a hedge fund management company. His investment approach makes him an activist investor. As of 2022, Ackman's net worth was estimated at $2.8 billion by Forbes.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/5e88e40d9d77ca0007ba9dcd/0x0.jpg?format=jpg&crop=2373,2371,x1451,y404,safe&height=416&width=416&fit=bounds",
			},
		},
		"Ray Dalio": {
			name: "Ray Dalio",
			company: "Bridgewater Associates",
			cik: "0001336528",
			personInfo: {
				description:
					"Raymond Thomas Daliois an American billionaire investor and hedge fund manager, who has served as co-chief investment officer of the world's largest hedge fund, Bridgewater Associates, since 1985. He founded Bridgewater in 1975 in New York. A $5 million investment from the World Bank's retirement fund was made within five years. His innovations are regarded as some of the best in the industry, having popularized many commonly used practices, such as risk parity, currency overlay, portable alpha and global inflation-indexed bond management.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/5ac959f74bbe6f2310f1e05c/0x0.jpg?format=jpg&crop=2549,2547,x657,y80,safe&height=416&width=416&fit=bounds",
			},
		},
		"Cathie Wood": {
			name: "Cathie Wood",
			company: "Ark Invest",
			cik: "0001336528",
			personInfo: {
				description:
					"Catherine Duddy Wood is an American investor and the founder, CEO and CIO of Ark Invest, an investment management firm.",
				image:
					"https://imageio.forbes.com/specials-images/imageserve/60aed26e000f48e9d5646d4d/0x0.jpg?format=jpg&crop=1078,1078,x2,y0,safe&height=416&width=416&fit=bounds",
			},
		},
	};

	return (
		<>
			{formatedName && (
				<div>
					<div className="py-4">
						<InvestorInfo {...info[formatedName]} />
					</div>
					<div>
						<Portfolio holdings={o} />
					</div>
				</div>
			)}
		</>
	);
};

export default InvestorPage;
