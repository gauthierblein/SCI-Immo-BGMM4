import DashboardNav from "../../components/DashboardNav/dashboardNav"
import MyPosts from "../../components/MyPosts/myPosts"
import './dashboard.css'


function Dashboard () {

    return (
    <div>
      <DashboardNav/>
      
      <div className="dashboard-container">
        <div className="left-container">
            <p>Menu1</p>
            <p>Menu2</p>
            <p>Menu3</p>
            <p>Menu4</p>
            <p>Menu5</p>
        </div>

        <div className="right-container">
            <h2>Mes annonces</h2>
            <MyPosts/> 
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
