import React from "react";

export default function Result({ property }) {
    return (
        <section>
            <ol>
                {
                    property.products.map(el => (
                        <li key={el.id}>
                            <img src={el.thumbnail} alt={el.description} />
                            <div className="content">
                                <h1>
                                    {el.title}
                                </h1>
                                <p>
                                    {el.description}
                                </p>
                                <span className="price">
                                    <strong>{el.price}</strong>
                                $</span>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}
