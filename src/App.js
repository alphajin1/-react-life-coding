import logo from './logo.svg';
import './App.css';

// example Component
// The name of component must start with Capital.
function Header() {
    return <header>
        <h1><a href="/">WEB</a></h1>
    </header>
}

function Nav() {
    return <nav>
        <ol>
            <li><a href="/read/1">html</a> </li>
            <li><a href="/read/2">css</a> </li>
            <li><a href="/read/3">js</a> </li>
        </ol>
    </nav>
}

function App() {
    return (
        <div>
            <Header></Header>
            <Header></Header>
            <Header></Header>
            <Nav></Nav>
        </div>
    );
}

export default App;
