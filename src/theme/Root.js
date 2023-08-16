import React from 'react';
import { Root as NewfoldRoot, Button } from "@newfold/ui-component-library";


// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
        {children}
            <NewfoldRoot>
                <p className='nfd-hidden'>Hello From Root</p>
            </NewfoldRoot>
        </>
    );
}