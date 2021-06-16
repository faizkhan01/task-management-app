import React from "react";
import PieChart from "./PieChart";
import XYChart from "./XYChart";
import { Button } from "antd";
import { Link } from "react-router-dom";

const TaskAnalytics = () => {
  return (
    <div>
      <XYChart />
      <PieChart />

      <Button type="primary">
        <Link to="/todoList">Task List</Link>
      </Button>
    </div>
  );
};

export default TaskAnalytics;
