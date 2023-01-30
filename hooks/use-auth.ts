import { authApi } from "@/api"
import { LoginPayload } from "@/models"
import useSWR from "swr"
import { PublicConfiguration } from "swr/_internal"

// Auth --> Protected Pages
// <Auth>{children}</Auth>
interface UseAuthProps {
	profile: any
	error: any
	login: (payload: LoginPayload) => Promise<void>
	logout: () => Promise<void>
	firstLoading: boolean
}

export function useAuth(options?: Partial<PublicConfiguration>): UseAuthProps {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR("/profile", {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	async function login(payload: LoginPayload) {
		await authApi.login(payload)

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
