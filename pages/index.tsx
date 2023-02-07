import { Seo } from "@/components/common"
import { FeaturedWorks, HeroSection, RecentPosts } from "@/components/home"
import { MainLayout } from "@/components/layout"
import { NextPageWithLayout } from "@/models"
import { Box } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext } from "next"

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo
				data={{
					title: "NextJS Tutorials | Easy Frontend",
					description:
						"Step by step tutorials to build a full CRUD website using NextJS for beginners",
					url: "https://learn-nextjs-2023.vercel.app",
					thumbnailUrl:
						"https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
				}}
			/>

			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	// server-side
	// build-time

	return {
		props: {},
	}
}

export default Home
