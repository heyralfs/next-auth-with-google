import type { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";

interface ProtectedPageProps {
	user: {
		name: string;
		image: string;
	};
}

const Protected = ({ user }: ProtectedPageProps) => {
	return (
		<div className="container">
			<img src={user.image} alt="User profile picture" />
			<h1>Hey, {user.name}!</h1>
			<p>
				This is protected content. You can access this content because
				you are signed in.
			</p>
			<p>How amazing is that? 😁</p>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	);
};

export default Protected;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req });
	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {
			user: session.user,
		},
	};
};
