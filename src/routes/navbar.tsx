import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { UserProfilePage } from "./UserProfilePage";

const links = [
	{ title: "Sign Up", path: "/sign-up" },
	{ title: "Sign In", path: "/sign-in" },
	{ title: "Contact", path: "/contact" },
];

const DotIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
		>
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
		</svg>
	);
};

export const Navbar = () => {
	return (
		<div className="bg-gray-800 ">
			<div className="flex justify-between max-w-7xl mx-auto py-3">
				<Link
					to="/"
					className="text-2xl font-medium text-white border px-2 py-1 rounded"
				>
					Home
				</Link>
				<SignedOut>
					<div className="flex justify-around items-center gap-6">
						{links.map((link) => (
							<span key={link.path} className="px-2 py-1 bg-gray-100 rounded">
								<Link to={link.path}>{link.title}</Link>
							</span>
						))}
					</div>
				</SignedOut>
				<div className="flex justify-center items-center gap-2">
					<SignedIn>
						<UserButton
							appearance={{
								elements: {
									userButtonPopoverCard: "rounded-xl w-56",
									userButtonPopoverActionButton: "px-1 py-2",
								},
							}}
							userProfileMode="modal"
						>
							<UserButton.UserProfilePage
								label="Custom Page"
								url="custom"
								labelIcon={<DotIcon />}
							>
								<UserProfilePage />
							</UserButton.UserProfilePage>
						</UserButton>

						<Link to="/dashboard" className="px-2 py-1 bg-gray-100 rounded">
							Dashboard
						</Link>
					</SignedIn>
				</div>
			</div>
		</div>
	);
};
