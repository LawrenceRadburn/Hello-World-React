import React from "react";

export function ExampleComponent() {
    return <p><strong>This was generated using a function.</strong></p>;
}

export function ExampleProp(props) {
    return (
        <>
            <p><strong>This is a sample prop made by { props.name }</strong></p>
        </>
    )
}