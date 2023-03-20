import React from "react";
export default function Accordian() {
  return (
    <section className="w-100% height-100vh bg-accordian-bg flex align-center justify-center pt-5 pb-20 z-0">
      <div className="container width-100 max-width-80rem margin-0 auto p-0 1.5rem">
        <div className="accordion">
          <div className="bg-accordian-bg rounded-lg" id="question1">
            <a
              className=" text-md text-accordian-link-bg bg-accordian-bg w-100% flex align-center justify-between p-5"
              href="#question1"
            >
              <div className="flex">
                <h3>BRANDING</h3>
              </div>
              <i className="icon ion-md-arrow-forward"></i>
              <i className="icon ion-md-arrow-down"></i>
            </a>
            <div className="truncate relative bg-accordian-answer-color z-0">
              <p className="text-white text-sm p-8">
                We believe in the greater good, we strive to do something for
                people, we aim to make their lives easier and more enjoyable, we
                love businesses that keep this
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question2">
            <a
              className=" text-md text-accordian-link-bg bg-accordian-bg w-100% flex align-center justify-between p-5"
              href="#question2"
            >
              <div className="flex">
                <h3>UX/UI DESIGN</h3>
              </div>
              <i className="icon ion-md-arrow-forward"></i>
              <i className="icon ion-md-arrow-down"></i>
            </a>
            <div className="truncate relative bg-accordian-answer-color z-0">
              <p className="text-white text-sm p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question3">
            <a
              className=" text-md text-accordian-link-bg bg-accordian-bg w-100% flex align-center justify-between p-5"
              href="#question3"
            >
              <div className="flex">
                <h3>FRONTEND DEVELOPMENT</h3>
              </div>
              <i className="icon ion-md-arrow-forward"></i>
              <i className="icon ion-md-arrow-down"></i>
            </a>
            <div className="truncate relative bg-accordian-answer-color z-0">
              <p className="text-white text-sm p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question4">
            <a
              className=" text-md text-accordian-link-bg bg-accordian-bg w-100% flex align-center justify-between p-5"
              href="#question4"
            >
              <div>
                <h3>BACKEND DEVELOPMENT</h3>
              </div>
              <i className="icon ion-md-arrow-forward "></i>
              <i className="icon ion-md-arrow-down"></i>
            </a>
            <div className="truncate relative bg-accordian-answer-color z-0">
              <p className="text-white text-sm p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}
