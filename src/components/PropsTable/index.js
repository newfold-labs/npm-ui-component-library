import React from 'react';
import './props-table.css';

const PropsTable = {};

/**
 * Renders a table of component props.
 * @param {JSX.Element[]} children - The child elements representing the rows of the table.
 * @param {object} docs - The object containing the props API documentation.
 * 
 * @returns {JSX.Element} - The rendered table.
 */
PropsTable.Table = ({ children, docs }) => {
    const rows = [];

    const isValidDocs = () => {
        if (docs && typeof docs === 'object' && Object.keys(docs).length > 0) {
            return true;
        }

        return false;
    };

    const renderRows = () => {
        if (isValidDocs()) {
            for (const key in docs) {
                if (docs.hasOwnProperty(key)) {
                    const prop = docs[key];
                    prop.name = key;

                    if (undefined === prop.type) {
                        prop.type = [];
                    }

                    if (undefined === prop.description) {
                        prop.description = '';
                    }

                    if (undefined === prop.defaultValue) {
                        prop.defaultValue = '';
                    }

                    if (undefined === prop.isRequired) {
                        prop.isRequired = false;
                    }

                    rows.push(
                        <PropsTable.Row
                            key={prop.name}
                            name={prop.name}
                            type={prop.type}
                            description={prop.description}
                            defaultValue={prop.defaultValue}
                            isRequired={prop.isRequired}
                        />
                    );
                }
            }
        }

        return rows;
    };

    return (
        <div className="props-table">
            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>

                <tbody>
                    {(!children && !isValidDocs()) &&
                        <div className="empty-props">This component has no props.</div>
                    }
                    {renderRows()}
                    {children}
                </tbody>
            </table>
        </div>
    );
}

/**
 * Renders a row in a table of component props.
 * @param {string} name - *The name of the prop.
 * @param {array} types - An array of types or options.
 * @param {string} [description	='-'] - The description of the prop.
 * @param {any} [defaultValue='-'] - The default value of the prop.
 * @param {boolean} isRequired - Whether prop is required.
 * 
 * @returns {JSX.Element} - The rendered row.
 */
PropsTable.Row = ({
    name,
    type = [],
    description = '-',
    defaultValue = '-',
    isRequired = false
}) => {

    const renderName = () => {
        if (typeof isRequired === 'boolean' && isRequired) {
            return (
                <span className="required-prop">{name}<sup>*</sup></span>
            );
        }

        return (
            <span>{name}</span>
        );
    };

    const renderType = () => {
        let types = type;

        if (typeof types === 'string') {
            types = [types];
        }

        if (types.length > 0) {
            return (
                <>
                    {types.map((type, index) => {
                        return (
                            <React.Fragment key={index}>
                                <code>{type}</code>
                                <span> | </span>
                            </React.Fragment>

                        );
                    })}
                </>
            );
        }

        return (
            <span>-</span>
        );
    };

    const renderDescription = () => {
        if (!description || typeof description !== 'string' || description === '') {
            return (
                <span>-</span>
            );
        }

        return (
            <span>{description}</span>
        );
    };

    const renderDefaultValue = () => {
        if (!defaultValue || typeof defaultValue !== 'string' || defaultValue === '' || defaultValue === '-') {
            return (
                <span>-</span>
            );
        }

        return (
            <code>{defaultValue}</code>
        );
    };

    if (name && typeof name === 'string') {
        return (
            <tr>
                <td className="props-table-name-col">
                    {renderName()}
                </td>
                <td className="props-table-types-col">
                    {renderType()}
                </td>
                <td className="props-table-description-col">
                    {renderDescription()}
                </td>
                <td className="props-table-default-col">
                    {renderDefaultValue()}
                </td>
            </tr>
        );
    }

    console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name.")
    return null;
}

export default PropsTable;