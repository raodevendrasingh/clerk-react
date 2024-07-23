import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
	return (
		<div className="flex justify-center items-center pt-20 ">
			<SignIn
				path="/sign-in"
				appearance={{
					elements: {
                        signInStart: "rounded-4xl",
                        socialButtons:"rounded-xl hidden",
                        dividerRow: "hidden",
                        formFieldInput: "rounded-xl p-2",
						formButtonPrimary: " text-base rounded-xl",
                        cardBox: "rounded-xl bg-green-200",
                        footer:"bg-red-400"
					},
				}}
                signUpUrl="/sign-up"
                forceRedirectUrl="/"
			/>
		</div>
	);
}
