import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Home: NextPage = () => {
	const session = useSession();

	return session.status === "authenticated" ? (
		<div className="container">
			<h1>Welcome, {session.data.user?.name}</h1>
			<Link href="/me">
				<a>Go to user page</a>
			</Link>
		</div>
	) : (
		<div className="container">
			<h1>Welcome!</h1>
			<p>Please, sign in to continue</p>
			<button onClick={() => signIn("google")}>
				Sign in with Google
			</button>
		</div>
	);
};

export default Home;
