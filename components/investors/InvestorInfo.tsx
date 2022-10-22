import { type investorInfo } from "../../types/investorInfo";

function InvestorInfo({
	name,
	company,
	cik,
	personInfo: { image, description },
}: investorInfo) {
	return (
		<div className="">
			<div className="inline-flex flex-wrap gap-8">
				<div className="h-[400px] w-[250px] hover:(drop-shadow-lg drop-shadow shadow-black)">
					<img
						className="w-full h-full object-center object-cover rounded-md overflow-hidden"
						src={image}
						alt={name}
					/>
				</div>
				<div className="flex-1 min-w-[200px]">
					<div className="pb-8">
						<h1 className="text-xl font-bold">{company}</h1>
						<span className="text-gray-300">{name} </span>
					</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default InvestorInfo;
