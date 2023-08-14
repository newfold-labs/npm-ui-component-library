import React from "react";

import "./home-features.css";

const FeatureList = [
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/react-icon.svg').default,
        description: (
            <>
                Driven by React's dynamic capabilities, all components are
                finely tuned to deliver fluid interactivity and exceptional user experiences.
            </>
        ),
    },
    {
        title: 'Built with TailwindCSS',
        Svg: require('@site/static/img/tailwindcss-icon.svg').default,
        description: (
            <>
                Newfold UI brings a harmonious blend of utility and design to your projects.
                All components are thoughtfully crafted using TailwindCSS.
            </>
        ),
    },
    {
        title: 'WordPress Support',
        Svg: require('@site/static/img/wordpress-icon.svg').default,
        description: (
            <>
                Building a WordPress plugin with React? Enjoy a smooth, integrated experience
                that adds a touch of refinement to your admin pages.
            </>
        ),
    },
];

const HomeFeatures = () => {
    return (
        <section id="home-features">
            <div className="container">
                <div id="home-features-content">

                    {FeatureList.map((feature, idx) => (
                        <div key={idx} className="home-features-col">
                            <div className="home-features-title">
                                <div className="home-features-icon">
                                    <feature.Svg className="home-features-svg" role="img" />
                                </div>
                                <h3>{feature.title}</h3>
                            </div>
                            <p>{feature.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default HomeFeatures;