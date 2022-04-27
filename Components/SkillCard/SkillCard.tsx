import React from "react";
import classes from "./SkillCard.module.scss";

interface IProps {
  title: string;
  range: string;
}
const SkillCard = ({ title, range }: IProps) => {
  return (
    <div className={classes.container}>
      <div>
        <span>{title}</span>
        <span>{range}%</span>
      </div>
      <meter min={0} max={100} value={range} />
    </div>
  );
};

export default SkillCard;
