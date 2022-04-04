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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              2017-18
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2018-19</Dropdown.Item>
              <Dropdown.Item href="#/action-1">2019-20</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2020-21</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2021-22</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div label="Sports & Games">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              2017-18
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2018-19</Dropdown.Item>
              <Dropdown.Item href="#/action-1">2019-20</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2020-21</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2021-22</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div label="Technolgy">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              2017-18
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2018-19</Dropdown.Item>
              <Dropdown.Item href="#/action-1">2019-20</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2020-21</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2021-22</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Tabs>
    </div>
  );
}

export default AchievComp;
