import React from 'react';
import useActive from '../../hooks/useActive';


const ProductSummary = (props) => {

    const { brand, title, info, category } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Overview
                            </li>
                        </ul>
                    </div>

                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Brand</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Model</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Generic Name</span>
                                            <span>{category}</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span> {info} provides with fabulous sound quality</h3>
                                    <ul>
                                        <li>Sound Tuned to Perfection</li>
                                        <li>Comfortable to Wear</li>
                                        <li>Long Hours Playback Time</li>
                                    </ul>
                                    <p>Buy the <b>{title} {info}</b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these {category} giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">

                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;