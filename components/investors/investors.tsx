import Link from "next/link";
import Investor from "./investor";
import { type investorInfo } from "../../types/investorInfo";

interface Props {
	people: investorInfo[];
}

function investors({ people }: Props) {
	return (
		<div className="flex flex-wrap gap-4 ">
			{people.map((person) => (
				<Investor key={person.name}>
					<div className="cursor-pointer hover:(text-red-400) ">
						<div className="h-[305px] w-[208px] m-auto rounded-md overflow-hidden">
							<img
								src={person.personInfo.image}
								alt={`${person.name} image`}
								className="inline-block w-full h-full object-cover object-center"
							/>
						</div>
						<Link href={`/investor/${person.name.replaceAll(" ", "_")}`}>
							<a className="inline-block py-1 font-bold text-md ">
								{person.name}
							</a>
						</Link>
						{/* <p>{person.company}</p> */}
					</div>
				</Investor>
			))}
		</div>
	);
}

export default investors;
