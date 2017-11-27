import React, { Component } from "react";

import UserProfile from "./UserProfile";

import Logic from "../logic/Logic";
const logic = new Logic();

class QuizList extends Component {
  constructor() {
    super();

    this.state = {
      quizs: []
    };
  }

  componentDidMount() {
    logic
      .listQuizsByUser()
      .then(quizs => {
        this.setState({ quizs });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <UserProfile />
            <div className="col-sm-10">
              <section className="text-center panel panel-default">
                <div className="text-left panel-heading  custom-logo">
                  <div className="">
                    <h2>
                      Your tests
                      <a href="#">
                        <button
                          type="button"
                          className="btn btn-primary pull-right"
                        >
                          Create a new test!
                        </button>
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    {this.state.quizs.map((quiz, index) => {
                      return (
                        <div key={index} className="col-sm-4 user-tests-box">
                          <h4>{quiz.title}</h4>
                          <p>{quiz.description}</p>
                          <br />
                          <button
                            type="button"
                            className="btn btn-space btn-primary"
                          >
                            Results
                          </button>
                          <button
                            type="button"
                            className="btn btn-space btn-success"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-space btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizList;
