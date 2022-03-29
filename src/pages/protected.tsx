import type { NextPage } from "next";

const Protected: NextPage = () => {
	return (
		<div className="container">
			<h1>Hey, user!</h1>
			<p>
				This is protected content. You can access this content because
				you are signed in.
			</p>
			<p>How amazing is that? 😁</p>
			<button>Sign out</button>
		</div>
	);
};

export default Protected;
