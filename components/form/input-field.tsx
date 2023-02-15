import { TextField, TextFieldProps } from "@mui/material"
import { useController, Control } from "react-hook-form"

export type InputFieldProps = TextFieldProps & {
	name: string
	control: Control<any>
}

export function InputField({
	name,
	control,
	onChange: externalOnChange,
	onBlur: externalOnBlur,
	ref: externalRef,
	value: externalValue,
	...rest
}: InputFieldProps) {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController({ name, control })

	// render whatever you want: MUI, Ant Design, Bootstrap, Custom UI
	return (
		<TextField
			fullWidth
			size="small"
			name="name"
			margin="normal"
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			inputRef={ref}
			{...rest}
		/>
	)
}
