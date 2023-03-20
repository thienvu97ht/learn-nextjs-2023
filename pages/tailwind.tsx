import Image from "next/image"

export interface TailwindProps {}

export default function Tailwind(props: TailwindProps) {
	return (
		<div className="pt-12">
			<h1 className="text-center text-black text-4xl font-semibold mb-5">Live anywhere</h1>
			<h2 className="text-center font-light text-xl text-gray33 mb-35">Keep calm && travel on</h2>

			<div className="grid grid-cols-3 gap-x-35 max-w-6xl mx-auto">
				{Array(3)
					.fill(0)
					.map((_, i) => (
						<div key={i}>
							<div className="h-96 mb-5">
								<Image
									src="https://images.unsplash.com/photo-1679176031740-c2d24bbea935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt=""
									width="0"
									height="0"
									sizes="100vw"
									className="w-full h-full rounded-lg object-cover"
								/>
							</div>
							<h3 className="text-center font-medium text-lg mb-3">Enjoy the great cold</h3>
							<span className="block text-center text-gray-400 text-sm">6,789 properties</span>
						</div>
					))}
			</div>
		</div>
	)
}
