import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// Create a theme instance.
export let theme = createTheme({
	palette: {
		primary: {
			main: "#FF6464",
		},
		secondary: {
			light: "#EDF7FA",
			main: "#00A8CC",
		},
		error: {
			main: red.A400,
		},
	},
})
