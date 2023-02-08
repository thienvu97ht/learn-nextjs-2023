import { PostItem } from "@/components/blog"
import { MainLayout } from "@/components/layout"
import { Post } from "@/models"
import { getPostList } from "@/utils"
import { Box, Container, Divider } from "@mui/material"
import { GetStaticProps } from "next"
import Link from "next/link"

export interface BlogListPageProps {
	posts: Post[]
}

export default function BLogListPage({ posts }: BlogListPageProps) {
	console.log("🏆 ~ BLogListPage ~ posts", posts)
	return (
		<Box>
			<Container>
				<h1>Blog</h1>

				<Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`/blog/${post.slug}`} passHref legacyBehavior>
								<a>
									<PostItem post={post} />
								</a>
							</Link>

							<Divider sx={{ my: 3 }} />
						</li>
					))}
				</Box>
			</Container>
		</Box>
	)
}

BLogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// convert markdown files into list of javascript objects
	const postList = await getPostList()

	return {
		props: {
			posts: postList,
		},
	}
}
