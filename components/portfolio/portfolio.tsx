import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";

function portfolio({ holdings }) {
	const colors = [
		"#58f633",
		"#91d185",
		"#2e6f97",
		"#e9b996",
		"#940dbc",
		"#9f4347",
		"#289da2",
		"#f4a7d1",
		"#af2aac",
		"#7660f3",
		"#d9d53d",
		"#b64639",
		"#58f633",
		"#91d185",
		"#2e6f97",
		"#e9b996",
		"#940dbc",
		"#9f4347",
		"#289da2",
		"#f4a7d1",
		"#af2aac",
		"#7660f3",
		"#d9d53d",
		"#b64639",
		"#58f633",
		"#91d185",
		"#2e6f97",
		"#e9b996",
		"#940dbc",
		"#9f4347",
		"#289da2",
		"#f4a7d1",
		"#af2aac",
		"#7660f3",
		"#d9d53d",
		"#b64639",
		"#58f633",
		"#91d185",
		"#2e6f97",
		"#e9b996",
		"#940dbc",
		"#9f4347",
		"#289da2",
		"#f4a7d1",
		"#af2aac",
		"#7660f3",
		"#d9d53d",
		"#b64639",
	];
	const mock = Object.values(holdings).map((h, index) => {
		const [SYM, ISSUE_NAME, CL, CUSIP, VALUE, PERCENTAGE] = h;
		return {
			title: SYM,
			type: CL,
			companyName: ISSUE_NAME,
			value: PERCENTAGE,
			color: colors[index],
		};
	});

	console.log(mock);
	return (
		<div>
			<div className=" text-white">
				<h2 className="py-4 font-bold text-xl">Holdings</h2>
				<div className="flex flex-wrap flex-col-reverse md:(flex-row flex-nowrap) children:flex-1">
					<div className="min-w-[400px] md:m-auto ">
						<div className="grid grid-cols-[.4fr,1fr,1.3fr,5fr] m-auto text-center children:py-1">
							<span></span>
							<span>SYM</span>
							<span>%</span>
							<span>NAME</span>
						</div>
						{mock.map((company) => {
							return (
								<div
									key={company.title}
									className="grid grid-cols-[.4fr,1fr,1.3fr,5fr] m-auto text-center"
								>
									<span className="bg-dark-400 flex justify-center items-center">
										<span
											className="h-3 w-3 inline-block rounded-full"
											style={{ backgroundColor: company.color }}
										></span>
									</span>
									<span className="bg-dark-300"> {company.title}</span>
									{/* <span className="bg-dark-400 whitespace-nowrap overflow-ellipsis">
										{company.type}
									</span> */}
									<span className="bg-dark-400">{company.value}%</span>
									<span className="bg-dark-300">{company.companyName}</span>
								</div>
							);
						})}
					</div>
					<div className="py-8 self-start mx-auto md:mx-0">
						<PieChart
							data={mock}
							radius={40}
							lineWidth={15}
							label={({ dataEntry, x, y, dx, dy }) =>
								dataEntry.value > 2 ? `${dataEntry.value}%` : ""
							}
							labelStyle={{
								fontSize: "5px",
								fill: "white",
								zIndex: 100,
								overflow: "auto",
							}}
							style={{ height: "300px", minWidth: "400px" }}
							labelPosition={110}
							viewBoxSize={[100, 100]}
							startAngle={0}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default portfolio;
