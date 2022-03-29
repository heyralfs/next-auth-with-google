import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="container">
			<h1>Welcome!</h1>
			<p>Please, sign in to continue</p>
			<button>Sign in with Google</button>
		</div>
	);
};

export default Home;
