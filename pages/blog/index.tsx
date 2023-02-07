import { getPostList } from "@/utils"
import { GetStaticProps } from "next"
import Link from "next/link"

export interface PostListPageProps {
	posts: any[]
}

export default function BLogListPage({ posts }: PostListPageProps) {
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

export const getStaticProps: GetStaticProps<PostListPageProps> = async () => {
	// convert markdown files into list of javascript objects
	const data = await getPostList()

	return {
		props: {
			posts: data.map((x: any) => ({ id: x.id, title: x.title })),
		},
	}
}
