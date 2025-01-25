const CatToys = () => {
	const toys = [
		{
			name: "Ball with feathers.",
			description: "Soft ball with feathers for games and hunting.",
			price: "5$",
			image:
				"https://b.428.ua/img/754981/3000/2000/igrushka_dlya_kotov_priroda_myachik_mehovoy_s_peryami_pr240371~650~759.jpg",
		},
		{
			name: "Laser pointer.",
			description: "A favorite toy for energetic cats.",
			price: "7$",
			image:
				"https://cdn.27.ua/sc--media--prod/default/13/3e/cd/133ecdfb-1553-4095-94f6-973ebcea7935.jpg",
		},
		{
			name: "Toy mouse.",
			description: "Soft mouse for training hunting skills.",
			price: "6$",
			image: "https://images.prom.ua/4113622561_trixie-tx-45735-igrushka.jpg",
		},
		{
			name: "Wooden stick with ribbons",
			description: "An exciting toy for active games with the owner.",
			price: "3$",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ-5zrHb5mbObFYvln8hJ6Cq5a5NXigg-nw&s",
		},
		{
			name: "Scratching post with a ball",
			description: "A toy that entertains the cat and helps sharpen its claws.",
			price: "8$",
			image:
				"https://zoodom.ua/media/cache/sylius_shop_product_max_thumbnail/0b/a8/7d9462a3a2083245468587b49517.jpeg",
		},
		{
			name: "Soft tunnel",
			description: "A great place for hide and seek and active games.",
			price: "10$",
			image: "https://images.prom.ua/381100297_w600_h600_381100297.jpg",
		},
	];

	return (
		<div className="min-h-screen p-6">
			<header className="text-center mb-6 bg-gray-50  rounded-lg">
				<h1 className="text-4xl font-bold text-gray-800">Cats Toys</h1>
				<p className=" mt-2 text-gray-800">Choose a toy for yourself!</p>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{toys.map((toy, index) => (
					<div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
						<img src={toy.image} alt={toy.name} className="w-full h-48 object-contain" />
						<div className="p-4">
							<h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
							<p className="text-gray-600 mt-2">{toy.description}</p>
							<p className="text-gray-800 font-bold mt-4">Price: {toy.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CatToys;
