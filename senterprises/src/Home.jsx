import Catalog from "./Catalog";
import "./Home.css";
import ResponsiveAppBar from "./NavBar/ResponsiveAppBar";
import Sale from "./Sale";
function Home() {return (
    <>
        <ResponsiveAppBar />
        <Sale />
        <Catalog />
    </>
    
)};

export default Home;