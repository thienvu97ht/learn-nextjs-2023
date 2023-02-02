import { Header } from "@/components/common"
import { AdminLayout } from "@/components/layout/admin"
import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import Header from "../components/common/header";

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	const router = useRouter()
	const [postList, setPostList] = useState([])

	console.log("About query: ", router.query)

	useEffect(() => {
		;(async () => {
			const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1")
			const data = await response.json()

			setPostList(data.data)
		})()
	}, [])

	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About Page
			</Typography>

			<Header />

			<ul className="post-list">
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</Box>
	)
}

AboutPage.Layout = AdminLayout

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page components as props
//   };
// }
