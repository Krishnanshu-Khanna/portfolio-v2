import { Briefcase, Folder, Home, SquarePen, Wrench } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className='fixed top-10 left-1/2 z-50 mb-30 transform -translate-x-1/2 -translate-y-1/2 bg-[#1C1A19] h-12 text-white w-[350px] rounded-full shadow-lg flex justify-evenly items-center'>
			<Link href='/'>
				<Home size={24} />
			</Link>
			<Link href=''>
				<Folder size={24} />
			</Link>
			<Link href=''>
				<Briefcase size={24} />
			</Link>
			<Link href=''>
				<Wrench size={24} />
			</Link>
			<Link href=''>
				<SquarePen size={24} />
			</Link>
		</div>
	);
};
export default Navbar;