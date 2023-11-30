import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Sidenav from "@/components/Sidenav";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<div className="flex">
					<div className="bg-gray-200 h-screen">
						<Sidenav/>
					</div>
					<div className="w-3/4 bg-white h-screen overflow-auto">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
