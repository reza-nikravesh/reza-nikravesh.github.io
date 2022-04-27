import React, { useContext, useState } from "react";
import classes from "./TabView.module.scss";
import data from "../../../constants/data";
import SkillCard from "../../SkillCard/SkillCard";
import dictionary from '../../../public/dictionary.json'

type tabs = "Skills" | "Projects";
const tabsList: Array<tabs> = ["Projects", "Skills"];
const TabView = () => {
  const [active, setActive] = useState<tabs>("Skills");
  const changeActive = (tab: tabs) => {
    switch (tab) {
      case "Projects":
        setActive("Projects");
        break;
      case "Skills":
        setActive("Skills");
        break;
      default:
        break;
    }
  };
  const generateTab = () => {
    return tabsList.map((tab) => (
      <span
        className={`${active === tab ? classes.active : ""}`}
        key={tab}
        onClick={() => changeActive(tab)}
      >
        {tab}
      </span>
    ));
  };
  const generateContent = () => {
    switch (active) {
      case "Projects":
        return <h3>{dictionary.en.tabView.notFound}</h3>;
      case "Skills":
        return data.skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} range={skill.range} />
        ));

      default:
        break;
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.switch}>{generateTab()}</div>
      <div className={classes.content}>{generateContent()}</div>
    </div>
  );
};

export default TabView;
