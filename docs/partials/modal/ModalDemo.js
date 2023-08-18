import React from "react";
import { useState } from "@wordpress/element";
import { Root as NewfoldRoot, Modal, Button } from "@newfold/ui-component-library";


const ModalDemo = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    const modalChildren = <Modal.Panel>
    <Modal.Title>Modal Title</Modal.Title>
    <Modal.Description>Modal description</Modal.Description>
    <Button
        variant="primary"
        onClick={ () => { 
            setModalOpen(false);
        }}
        >OK
    </Button>
    </Modal.Panel>


    const modalClose = () => {
        setModalOpen(false);
    }


    return (
        <NewfoldRoot>
            <Button onClick={ () => { setModalOpen(true); }}>Open Modal</Button>
            <Modal
                isOpen={ modalOpen }
                onClose={ modalClose }
                children={ modalChildren }
            />
        </NewfoldRoot>
    );
}

export default ModalDemo;
