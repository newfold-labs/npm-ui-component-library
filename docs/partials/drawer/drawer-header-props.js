const drawerHeaderProps = {
    title: {
        type: "string",
        description: "The title of the drawer header.",
    },
    titleAs: {
        type: "string",
        description: "The HTML tag to use for the title.",
        defaultValue: "h2",
    },
    titleSize: {
        type: "string",
        description: "The size of the title.",
        defaultValue: "4",
    },
    hasCloseButton: {
        type: "boolean",
        description: "Whether the drawer header has a close button or not.",
        defaultValue: 'true',
    },
    closeButtonScreenReaderText: {
        type: "string",
        description: "The screen reader text for the close button.",
        defaultValue: "Close",
    },
    className: {
        type: "string",
        description: "The class name of the drawer header.",
    },
};

export default drawerHeaderProps;