import React from "react";

const Pending = () => {
  return (
    <React.Fragment>
      <div className="assigntable">
        <table className="table">
          <thead>
            <tr className="assigntable__tr">
              <th className="assigntable__th">ID</th>
              <th className="assigntable__th">Student</th>
              <th className="assigntable__th">Title</th>
              <th className="assigntable__th">Date</th>
              <th className="assigntable__th">Assignment</th>
              <th className="assigntable__th">Grade</th>
              <th className="assigntable__th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Menna Omar</td>
              <td>Lab1</td>
              <td>15/10/2021</td>
              <td>
                <a
                  href="http://www.drive.com"
                  target="_blank"
                  rel="noreferrer"
                  className="lectures__data"
                >
                  http://www.drive.com
                </a>
              </td>
              <td>
                <input type="text" className="assigntable__input" />
              </td>
              <td>
                <i className="fas fa-check assigntable__accept"></i>
                <i className="fas fa-times assigntable__reject"></i>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Pending;
