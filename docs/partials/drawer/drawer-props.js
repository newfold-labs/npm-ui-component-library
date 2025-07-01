const drawerProps = {
    isOpen: {
        type: "boolean",
        description: "Whether the drawer is open or not.",
        isRequired: true,
    },
    onClose: {
        type: "function",
        description: "Callback function to be called when the drawer is closed.",
        isRequired: true,
    },
    variant: {
        type: ["classic", "offset"],
        description: "The variant of the drawer.",
        defaultValue: "classic",
    },
    position: {
        type: ["left", "right"],
        description: "The position of the drawer.",
        defaultValue: "right",
    },
    overlay: {
        type: "boolean",
        description: "Whether the drawer has an overlay or not.",
        defaultValue: 'true',
    },
    className: {
        type: "string",
        description: "The class name of the drawer.",
    },
    children: {
        type: "<Drawer.Panel>",
        description: "The content of the drawer.",
        isRequired: true,
    },
};

export default drawerProps;
