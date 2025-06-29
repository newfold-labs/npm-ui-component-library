import React, { useState } from "react";
import { Button, Drawer } from "@newfold/ui-component-library";

const DrawerDemo = ( {
	variant = "classic",
	position = "right",
	overlay = true,
	buttonText = "Open Drawer",
} ) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
		<Button onClick={ () => setIsOpen(true) }>{ buttonText }</Button>
		<Drawer isOpen={ isOpen } onClose={ () => setIsOpen(false) } variant={ variant } position={ position } overlay={ overlay }>
			<Drawer.Panel style={ {
				marginTop: "60px",
				height: "calc(100% - 60px)",
			} }>
				<Drawer.Header
					title="Menu"
					hasCloseButton={ true }
				/>
				<div className="nfd-flex nfd-flex-col nfd-gap-4 nfd-min-w-56 nfd-pt-4">
					<a>Home</a>
					<a>About</a>
					<a>Services</a>
					<a>Blog</a>
					<a>Contact</a>
				</div>
			</Drawer.Panel>
		</Drawer>
		</>
	);
}

export default DrawerDemo;
