import { Box } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"
import { InputField } from "../form"

export function LoginForm() {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
	})

	function handleLoginSubmit(value: any) {
		console.log("🏆 ~ handleLoginSubmit ~ value", value)
	}

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
			<InputField name="username" control={control} />
			<InputField name="password" control={control} />
		</Box>
	)
}
