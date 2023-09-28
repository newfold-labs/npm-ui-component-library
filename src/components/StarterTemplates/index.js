import React from 'react';
import './starter-templates.css';

const StarterTemplates = () => {
    const templates = [
        {
            name: 'WordPress Plugin',
            description: 'A WordPress plugin with React and WP Scripts.',
            Icon: require('@site/static/img/wordpress-icon.svg').default,
            url: 'https://github.com/newfold-labs/npm-ui-component-library/tree/starter/wp',
        },
        {
            name: 'Vite.js',
            description: 'Vite.js scaffold with React and Tailwindcss.',
            Icon: require('@site/static/img/vitejs-icon.svg').default,
            url: 'https://github.com/newfold-labs/npm-ui-component-library/tree/starter/vitejs',
        },
    ];
    return ( 
        <div className="starter-templates">
            {templates.map((template, index) => {
                const { name, description, Icon, url } = template;
                return (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="starter-template"
                    >
                        <div className="starter-template__icon">
                            <Icon />
                        </div>
                        <div className="starter-template__content">
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                    </a>
                );
            })}
        </div>
     );
}
 
export default StarterTemplates;
