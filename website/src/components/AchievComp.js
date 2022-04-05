import React from "react";
import NavbarComp from "./NavbarComp";
import Tabs from "./Tabs";
import "./AchievComp.css";
import { Dropdown } from "react-bootstrap";

function AchievComp() {
  return (
    <div>
      <NavbarComp />
      <center>
        <h1>Achievements</h1>
      </center>
      <Tabs>
        <div label="Social & Culture">
          <Tabs>
            <div label="2017-18">
              <p>Hello!</p>
            </div>
            <div label="2018-19"></div>
            <div label="2019-20"></div>
            <div label="2020-21"></div>
            <div label="2021-22"></div>
          </Tabs>
        </div>
        <div label="Sports & Games">
          <Tabs>
            <div label="2017-18"></div>
            <div label="2018-19"></div>
            <div label="2019-20"></div>
            <div label="2020-21"></div>
            <div label="2021-22"></div>
          </Tabs>
        </div>
        <div label="Technolgy">
          <Tabs>
            <div label="2017-18"></div>
            <div label="2018-19"></div>
            <div label="2019-20"></div>
            <div label="2020-21"></div>
            <div label="2021-22"></div>
          </Tabs>
        </div>
      </Tabs>
    </div>
  );
}

export default AchievComp;
