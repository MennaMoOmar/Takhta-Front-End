import React from "react";

const InsStudentsTable = () => {
  return (
    <React.Fragment>
      <div className="dashboardcontent">
        <div className="assigntable">
          <table className="table">
            <thead>
              <tr className="assigntable__tr">
                <th className="assigntable__th">ID</th>
                <th className="assigntable__th">Image</th>
                <th className="assigntable__th">Student Name</th>
                <th className="assigntable__th">Phone</th>
                <th className="assigntable__th">Email</th>
                <th className="assigntable__th">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                <img
                    className="navBar__image__user"
                    src="/images/user.png"
                    alt="user"
                  ></img>
                </td>
                <td>Menna Omar</td>
                <td>01211883346</td>
                <td>menna@gmail.com</td>
                <td>Egypt, Portsaid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsStudentsTable;
