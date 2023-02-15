import { LoginForm } from "@/components/auth"
import { useAuth } from "@/hooks"
import { LoginPayload } from "@/models"
import { useRouter } from "next/router"

export default function Login() {
	const router = useRouter()
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	})

	async function handleLoginClick() {
		try {
			await login({
				username: "test1",
				password: "123456",
			})
			console.log("redirect to dashboard")
			router.push("/about")
		} catch (error) {
			console.log("failed to login", error)
		}
	}

	async function handleLogoutClick() {
		try {
			await logout()
		} catch (error) {
			console.log("failed to logout", error)
		}
	}

	async function handleLoginSubmit(payload: LoginPayload) {
		try {
			await login(payload)
			// console.log("redirect to dashboard")
			// router.push("/about")
		} catch (error) {
			console.log("failed to login", error)
		}
	}

	return (
		<div>
			<h1>Login Page</h1>

			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

			<button onClick={handleLoginClick}>Login</button>
			{/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
			<button onClick={handleLogoutClick}>Logout</button>
			<button onClick={() => router.push("/about")}>Go to about</button>

			<LoginForm onSubmit={handleLoginSubmit} />
		</div>
	)
}
