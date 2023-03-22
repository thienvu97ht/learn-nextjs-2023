import { useTheme } from "next-themes"

export default function DarkMode() {
	const { theme, setTheme } = useTheme()

	const handleToggleDarkMode = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<>
			<label className="fixed bottom-5 right-5 z-50 cursor-pointer">
				<input type="checkbox" value="" className="peer sr-only" onChange={handleToggleDarkMode} />
				<div className="peer h-[40px] w-[100px] rounded-full bg-gray-200 after:absolute after:top-[5px] after:left-[5px] after:h-7 after:w-7 after:rounded-full after:border after:border-[#ccc] after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-[60px]"></div>
			</label>

			<div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-x-5 p-5">
				<div className="rounded-lg border border-[#eee] bg-white px-5 py-8 text-center dark:bg-[#0F0D58]">
					<img
						className="mx-auto mb-5 max-w-[100px]"
						src=" https://free3dicon.com/wp-content/uploads/2022/07/perspective_matte-145-264x264.png"
						alt=""
					/>
					<h3 className="text=[#0F0D58] mb-6 text-lg font-semibold dark:text-white">
						Recommendation
					</h3>
					<div className="text=[#9191B4] text-sm font-normal leading-loose dark:text-white">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolorem mollitia
						illo exercitationem itaque suscipit asperiores est, illum labore ducimus ullam tempore,
						rem deleniti pariatur odio cumque delectus sapiente. Ab.
					</div>
				</div>
			</div>
		</>
	)
}
