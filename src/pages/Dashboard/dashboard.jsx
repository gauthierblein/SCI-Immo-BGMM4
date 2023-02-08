import Footer from "../../components/Footer"
import DashboardNav from "../../components/DashboardNav/dashboardNav"
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vitae eveniet sit reiciendis aliquid velit modi sed, magnam omnis nostrum, earum ratione ad maxime sequi impedit deserunt minus vero. Consequatur?</p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam nemo eligendi. Eius nulla totam, nisi beatae incidunt expedita voluptate aperiam, facilis veritatis quasi cupiditate commodi dolores inventore sit omnis?</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
