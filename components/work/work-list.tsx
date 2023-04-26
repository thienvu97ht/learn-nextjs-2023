import { Work } from "@/models"
import { Box, Divider, Typography } from "@mui/material"
import React, { Fragment } from "react"
import { WordCard } from "./work-card"
import Image from "next/image"

export interface WorkListProps {
	workList: Work[]
}

export function WorkList({ workList }: WorkListProps) {
	if (workList.length === 0)
		return (
			<Box textAlign="center">
				<Image
					src="https://res.cloudinary.com/kimwy/image/upload/v1680947456/learn-nextjs/no-data_liu3mu.svg"
					width={150}
					height={150}
					alt="no data"
				/>
				<Typography>No data</Typography>
			</Box>
		)

	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<WordCard work={work} />
					<Divider sx={{ my: 3 }} />
				</Fragment>
			))}
		</Box>
	)
}
