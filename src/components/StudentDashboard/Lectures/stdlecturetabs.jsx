import React from "react";
import { NavLink } from "react-router-dom";

const StdLectureTabs = () => {
  return (
    <React.Fragment>
      <div className="lecturetabs tabs is-centered is-boxed">
        <ul className="lecturetabs__ul">
          <li className="lecturetabs__li ">
          {/* lecturetabs__li--is-active */}
            <NavLink className="lecturetabs__link" activeClassName="lecturetabs__li--is-active" to={`/stddashboardlectures/${1}/lectures`}>
              <span className="lecturetabs__spanicon icon is-small">
                <i className="lecturetabs__icon fas fa-chalkboard-teacher"></i>
              </span>
              <span className="lecturetabs__span">Lecture</span>
            </NavLink>
          </li>
          <li className="lecturetabs__li">
            <NavLink className="lecturetabs__link" activeClassName="lecturetabs__li--is-active" to={`/stddashboardlectures/${1}/files`}>
              <span className="lecturetabs__spanicon icon is-small">
                <i className="lecturetabs__icon far fa-file-alt"></i>
              </span>
              <span className="lecturetabs__span">Files</span>
            </NavLink>
          </li>
          <li className="lecturetabs__li">
            <NavLink className="lecturetabs__link" activeClassName="lecturetabs__li--is-active" to={`/stddashboardlectures/${1}/assignments`}>
              <span className="lecturetabs__spanicon icon is-small">
                <i className="lecturetabs__icon fas fa-tasks"></i>
              </span>
              <span className="lecturetabs__span">Assignment</span>
            </NavLink>
          </li>
          <li className="lecturetabs__li">
            <NavLink className="lecturetabs__link" activeClassName="lecturetabs__li--is-active" to={`/stddashboardlectures/${1}/recording`}>
              <span className="lecturetabs__spanicon icon is-small">
                <i className="lecturetabs__icon fas fa-film" aria-hidden="true"></i>
              </span>
              <span className="lecturetabs__span">Recording</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default StdLectureTabs;
