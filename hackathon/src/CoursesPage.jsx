import React from "react";
import { Link } from "react-router-dom";
import comp1010Image from "./img/comp1010.jpeg";
import comp1020Image from "./img/comp1020.jpeg";
import comp2080Image from "./img/comp2080.jpeg";
import comp2140Image from "./img/comp2140.png";
import comp2150Image from "./img/comp2150.png";
import comp2160Image from "./img/comp2160.jpeg";
import { useContext } from "react";
import { CourseContext } from "./courseContext";
const CoursesPage = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const handleAdd = (courseName) => {
    let selectedItems = [...courses];
    //check if the item is already in the selected list if it is remove it from the list if not add it to the list
    if (courses.includes(courseName)) {
      const removedItems = courses.filter((item) => item !== courseName);
      selectedItems = removedItems;
    } else {
      selectedItems = [...courses, courseName];
    }
    setCourses(selectedItems);
  };
  return (
    <div class="bg-dark" style={{ height: "100vh" }}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Easycourses
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  Main
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/courses">
                  Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="bg-cd bg-dark crs-div">
        <div
          id="course-list"
          class="row row-cols-3 row-cols-md-3 g-4 mb-5"
          style={{ marginLeft: "200px" }}
        >
          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp1010Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 1010</h5>
                <h5 class="card-title">Intro Computer Science 1</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 1010");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 1010")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>

          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp1020Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 1020</h5>
                <h5 class="card-title">Intro Computer Science 2</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 1020");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 1020")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>

          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp2080Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 2080</h5>
                <h5 class="card-title">Analysis of Algorithms</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 2080");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 2080")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>

          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp2140Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 2140</h5>
                <h5 class="card-title">Data Structures and Algorithms</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 2140");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 2140")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>

          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp2150Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 2150</h5>
                <h5 class="card-title">Object Orientation</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 2150");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 2150")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>

          <div class="col" style={{ right: "90px" }}>
            <div class="card" style={{ width: "20rem", height: "32rem" }}>
              <img
                class="card-img-top"
                style={{ width: "100%", height: "320px" }}
                src={comp2160Image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COMP 2160</h5>
                <h5 class="card-title">Programming Practices</h5>
                <p class="card-text">Credits: 3</p>
                <button
                  onClick={() => {
                    handleAdd("COMP 2160");
                  }}
                  to="#"
                  class={`${
                    courses.includes("COMP 2160")
                      ? "btn btn-primary"
                      : "btn btn-disabled"
                  }`}
                >
                  Add course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
