import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Student MS</h2>

        <ul>
          <li>Dashboard</li>
          <li>Students</li>
          <li>Teachers</li>
          <li>Courses</li>
          <li>Attendance</li>
          <li>Results</li>
          <li>Fees</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Student Management Dashboard</h1>
        </header>

        <div className="cards">
          <div className="card">
            <h3>Total Students</h3>
            <p>500</p>
          </div>

          <div className="card">
            <h3>Teachers</h3>
            <p>45</p>
          </div>

          <div className="card">
            <h3>Courses</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Attendance</h3>
            <p>95%</p>
          </div>
        </div>

        <div className="table-section">
          <h2>Recent Students</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>101</td>
                <td>Rahul</td>
                <td>CSE</td>
                <td>III</td>
              </tr>

              <tr>
                <td>102</td>
                <td>Priya</td>
                <td>ECE</td>
                <td>II</td>
              </tr>

              <tr>
                <td>103</td>
                <td>Arun</td>
                <td>IT</td>
                <td>IV</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;