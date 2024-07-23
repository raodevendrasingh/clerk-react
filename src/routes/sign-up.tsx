import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
	return (
		<div className="flex justify-center items-center h-screen">
			<SignUp
				path="/sign-up"
				appearance={{
					elements: {
						signInStart: "rounded-4xl",
						socialButtons: "rounded-xl hidden",
						dividerRow: "hidden",
						formFieldInput: "rounded-xl p-2",
						formButtonPrimary: "text-base rounded-xl",
						cardBox: "rounded-xl",
						footer: "",
                        
					},
				}}
                initialValues={{
                    username: undefined,    //pass as props from the landing page
                }}
                signInUrl="/sign-in"
                forceRedirectUrl="/"

			/>
		</div>
	);
}
