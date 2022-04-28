import { Route, Router } from "react-router-dom";
import Slider from "./components/main/slider/Slider";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear" >

            <Drawer />
            <Header />

            <div className="header">
                <Slider />
            </div>

            <div className="main p-50">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Новинки сезона</h1>
                    <div className="search-block ">
                        <img width={15} height={15} src="/img/search.png" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="shop d-flex">
                    <Card />
                    <Card />
                    <Card />
                    
                </div>

            </div>
        </div>
    );
}

export default App;