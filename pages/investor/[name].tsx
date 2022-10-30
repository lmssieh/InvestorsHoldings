import type { NextPage } from "next";
import Head from "next/head";
import InvestorInfo from "../../components/investors/InvestorInfo";
import Portfolio from "../../components/portfolio/portfolio";
import { useRouter } from "next/router";
import useFetchSupabase from "../../hooks/useFetchSupabase";
import Router from "next/router";
import supabase from "../../config/supabaseClient";

const InvestorPage: NextPage = ({ data }) => {
	const [info] = data;

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

	return (
		<div>
			<div className="py-4">
				<InvestorInfo info={info} />
			</div>
			<div>
				<Portfolio holdings={o} />
			</div>
		</div>
	);
};

export async function getStaticPaths(context) {
	const { data } = await supabase.from("investors").select();

	const paths = data?.map((investor) => {
		const name = investor.name?.replaceAll(" ", "_");
		return `/investor/${name}`;
	});

	console.log(paths);
	return {
		paths,
		fallback: true,
	};
}
export async function getStaticProps(context) {
	const { name } = context.params;
	const formatedName: string = name?.replaceAll("_", " ");
	const { data, error } = await supabase
		.from("investors")
		.select()
		.eq("name", formatedName);

	return {
		props: { data },
	};
}

export default InvestorPage;
