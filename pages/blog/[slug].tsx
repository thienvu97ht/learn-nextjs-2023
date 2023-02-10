import { Post } from "@/models"
import { getPostList } from "@/utils"
import { Container } from "@mui/material"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeDocument from "rehype-document"
import rehypeFormat from "rehype-format"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkToc from "remark-toc"
import { unified } from "unified"

export interface BlogPageProps {
	post: Post
}

export default function BlogDetailPage({ post }: BlogPageProps) {
	console.log("🏆 ~ BlogDetailPage ~ post", post)
	if (!post) return null

	return (
		<Container>
			<h1>Post Detail Page</h1>
			<p>{post.title}</p>
			<p>{post.author?.name}</p>
			<p>{post.description}</p>
			<div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const postList = await getPostList()

	return {
		paths: postList.map((post: any) => ({ params: { slug: post.slug } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
	context: GetStaticPropsContext
) => {
	const postList = await getPostList()
	const slug = context.params?.slug
	if (!slug) return { notFound: true }

	const post = postList.find((x) => x.slug === slug)
	if (!post) return { notFound: true }

	// parse md to html
	const file = await unified()
		.use(remarkParse)
		.use(remarkToc, { heading: "agenda.*" })
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, { behavior: "wrap" })
		.use(rehypeDocument, { title: "Blog detail page" })
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(post.mdContent || "")

	post.htmlContent = file.toString()

	return {
		props: {
			post,
		},
	}
}
