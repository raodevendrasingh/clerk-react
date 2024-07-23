import { useState } from "react";
import { UserProfile } from "@clerk/clerk-react";
import { UserProfilePage } from "./UserProfilePage";
import { useUser, useAuth } from "@clerk/clerk-react";

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

const HomePage = () => {
	const [showModal, setShowModal] = useState(false);
	const { isSignedIn, user } = useUser();
	const { getToken } = useAuth();

	const fetchDataFromExternalResource = async () => {
		const token = await getToken();
		console.log(token);
	};

	if (isSignedIn) {
		return (
			<div className="flex flex-col ">
				<div className="flex flex-col">
					<img
						src={user.imageUrl}
						alt="User profile"
						className="size-10 object-cover rounded-full"
					/>

					<span> username: {user.username}</span>
					<span> firstname: {user.firstName}</span>
					<span> lastname: {user.lastName}</span>
					<span> userID: {user.id}</span>
					<span>
						userEmail:{" "}
						{user.emailAddresses.map((email, index) => (
							<div key={index}>{email.emailAddress}</div>
						))}
					</span>
					<span>
						{" "}
						user created at:{" "}
						{user.createdAt ? user.createdAt.toLocaleDateString() : "N/A"}
					</span>
				</div>
				<div className="flex gap-2 items-center">
					<button
						onClick={fetchDataFromExternalResource}
						className="px-2 py-1 bg-green-500 w-24 h-10 text-center text-white rounded-xl cursor-pointer"
					>
						getToken
					</button>
					<button
						className="w-44 h-12 bg-gray-800 text-white active:bg-gray-900 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
						onClick={() => setShowModal(true)}
					>
						Account Settings
					</button>
				</div>

				{showModal ? (
					<>
						<div className=" mt-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto my-6 mx-auto max-w-6xl">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									{/*header*/}
									<button
										className="z-50 absolute top-2 right-5 text-sm px-2 py-1 font-medium text-white bg-gray-900 rounded-lg"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									{/*body*/}
									<div className="relative flex-auto">
										<UserProfile
											appearance={{
												elements: {
													cardBox: "rounded-xl shadow-none",
													scrollBox: "rounded-none",
												},
											}}
										>
											<UserProfile.Page
												label="Custom Page"
												url="custom"
												labelIcon={<DotIcon />}
											>
												<UserProfilePage />
											</UserProfile.Page>
										</UserProfile>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}
			</div>
		);
	}
};

export default HomePage;
