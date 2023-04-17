import { MainLayout } from "@/components/layout"

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	return <div>Works Page</div>
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
	console.log("get static props")
	// const workList = await workA

	return {
		props: {},
	}
}

// browser: http://localhost:3000/api/works
// Next server: /api/works --> proxy to https://js-post-api.herokuapp.com/api/works
// API server: https://js-post-api.herokuapp.com/api/works
