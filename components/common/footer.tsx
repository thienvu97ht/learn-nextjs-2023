import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Icon, Stack, Typography } from "@mui/material"

export interface FooterProps {}

export function Footer(props: FooterProps) {
	const socialLinks = [
		{ icon: Facebook, url: "https://google.com" },
		{ icon: Instagram, url: "https://google.com" },
		{ icon: GitHub, url: "https://google.com" },
		{ icon: LinkedIn, url: "https://google.com" },
	]

	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction="row" justifyContent="center">
				{socialLinks.map((item, idx) => (
					<Box
						key={idx}
						component="a"
						p={2}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon component={item.icon} sx={{ fontSize: 48 }} />
					</Box>
				))}
			</Stack>

			<Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
		</Box>
	)
}
