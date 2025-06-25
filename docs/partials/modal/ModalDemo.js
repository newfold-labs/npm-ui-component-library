import React from 'react';
import { useState } from "react";
import { Button, Modal } from "@newfold/ui-component-library";

const ModalDemo = ({ withProviders = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Modal.Panel>
                    {withProviders ? 
                        <>
                            <Modal.Title className="nfd-mb-3">Title Using Modal.Title</Modal.Title>
                            <Modal.Description className="nfd-text-sm nfd-text-slate-600">
                                Modal description using Modal.Description sub-component.
                            </Modal.Description>
                        </> : 
                        <>
                            Modal component using Modal.Panel sub-component.
                        </>
                    }
                </Modal.Panel>
            </Modal>
        </>
     );
}
 
export default ModalDemo;
