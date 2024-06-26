import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1",
//     { id: "heading" },
//     "Namaste React"
// );

// JSX (transpiled before it reaches to JS) - PARCEL usel Bebel to transpile (convert jsx to js which is understood by browser)
// const heading = (
//     <h1 className="head" tabIndex="1">
//         Namaste React using JSX
//     </h1>
// );

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render) 
// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//React Component
// Class Based Component - OLD
// Functional Component - NEW

const title = (
    <h1 className="heading" tabIndex="5">
        Namaste React Using JSX
    </h1>
);

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
