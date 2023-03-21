import Image from "next/image"

export default function Example1() {
	return (
		<div className="pt-12">
			<h1 className="mb-5 text-center text-lg font-semibold text-[#ffa400] sm:text-2xl md:text-3xl lg:text-4xl">
				Live anywhere
			</h1>
			<h2 className="mb-35 text-center text-xl font-light text-[#07a787]">
				Keep calm && travel on
			</h2>

			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-[37px] gap-y-7 px-[15px] lg:grid-cols-3 lg:gap-y-0">
				{Array(3)
					.fill(0)
					.map((_, i) => (
						<div key={i}>
							<div className="mb-5 h-96">
								<Image
									src="https://images.unsplash.com/photo-1679176031740-c2d24bbea935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt=""
									width="0"
									height="0"
									sizes="100vw"
									className="h-full w-full rounded-lg object-cover"
								/>
							</div>
							<h3 className="mb-3 text-center text-lg font-medium">Enjoy the great cold</h3>
							<span className="block text-center text-sm text-gray-400">6,789 properties</span>
						</div>
					))}
			</div>
		</div>
	)
}
