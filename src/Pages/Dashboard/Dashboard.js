import Header from "../../components/Header/Header";
import PageRoutes from "./PageRoutes";

function Dashboard() {

    return (
        <>
            <Header/>
            <div className="App-header">
                <PageRoutes/>
            </div>

        </>
    )

}

export default Dashboard;