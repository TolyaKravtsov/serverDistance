import ReactDOM from "react-dom/client";

const App = () => (
    <h1>first component</h1>
);

const container = document.getElementById('root') as HTMLHtmlElement;

const root = ReactDOM.createRoot(container);

root.render(<App />);