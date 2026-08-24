export const navigation = [
	{
		title: "Home",
		url: "/"
	},
	{
		title: "About",
		url: "/about"
	},
	{
		title: "Projects",
		children: [
			{
				title: "All Projects",
				url: "/projects"
			},
			{
				title: "Unity",
				url: "/projects/unity"
			},
			{
				title: "WebGL",
				url: "/projects/webgl"
			},
			{
				title: "Art",
				url: "/projects/art"
			},
			{
				title: "Music",
				url: "/projects/music"
			}
		]
	}
];