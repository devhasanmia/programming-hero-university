
const Dashboard = () => {
  return (
    <div>
        <main className="main-content">
            <header>
                <h1>Dashboard</h1>
            </header>
            <section className="cards">
                <div className="card">
                    <h3>Total Users</h3>
                    <p>1,234</p>
                </div>
                <div className="card">
                    <h3>New Orders</h3>
                    <p>567</p>
                </div>
                <div className="card">
                    <h3>Revenue</h3>
                    <p>$12,345</p>
                </div>
            </section>
            <section className="data-visualization">
                <h2>Revenue Chart</h2>
        
                <div className="chart"></div>
            </section>
        </main>
    </div>
  )
}

export default Dashboard