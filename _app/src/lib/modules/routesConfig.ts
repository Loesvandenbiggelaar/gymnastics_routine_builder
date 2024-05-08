export type Route = {
	name: string;
	href: string;
	icon: string;
	display?: boolean;
};

export const routes = [
	{ name: 'Home', href: '/', icon: 'mdi:home', display: true },
	{ name: 'About', href: '/about', icon: 'mdi:information-outline', display: true },
	{ name: 'Builder', href: '/builder', icon: 'mdi:clipboard-list-outline', display: true }
];
