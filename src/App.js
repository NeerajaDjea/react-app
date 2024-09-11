import './App.css';
import Navbar from './navbar'

function App() {
    const title = 'Welcome to my App !'
    const likes = 50;
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "content" >
        <
        h1 > { title } < /h1> <
        p > Liked: { Math.floor(Math.random() * likes) } < /p> <
        a href = "https://www.google.com/" > Google site < /a>

        <
        /div> < /
        div >
    );
}

export default App;