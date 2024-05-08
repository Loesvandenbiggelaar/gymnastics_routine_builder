export type Route = {
	name: string;
	title?: string; // Use empty string '' for no title
	href: string;
	icon: string;
	display?: boolean;
};

export const routes = [
	{ name: 'Home', title: '', href: '/', icon: 'mdi:home', display: true },
	{
		name: 'Builder',
		title: 'Routine Builder',
		href: '/builder',
		icon: 'mdi:clipboard-list-outline',
		display: true
	},
	{
		name: 'Elements',
		title: 'Elements Table',
		href: '/elements',
		icon: 'mdi:format-list-bulleted-type',
		display: true
	},
	{
		name: 'About',
		title: 'About Us',
		href: '/about',
		icon: 'mdi:information-outline',
		display: true
	}
];
