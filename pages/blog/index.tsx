import { Post } from "@/models"
import { getPostList } from "@/utils"
import { GetStaticProps } from "next"
import Link from "next/link"

export interface BlogListPageProps {
	posts: Post[]
}

export default function BLogListPage({ posts }: BlogListPageProps) {
	console.log("🏆 ~ BLogListPage ~ posts", posts)
	return (
		<div>
			<h1>Blog List Page</h1>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// convert markdown files into list of javascript objects
	const postList = await getPostList()

	return {
		props: {
			posts: postList,
		},
	}
}
