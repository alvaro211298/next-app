"use client";
import React from "react";
import MeasuresDropdownMenu from "./MeasureList";


interface Measure {
  id: number;
  name: string;
  followUpInCharge: string;
  responsiblePerson: string;
  followUps: FollowUp[];
}

interface FollowUp {
  id: number;
  date: string;
  description: string;
}

const measures: Measure[] = [
  {
    id: 1,
    name: "Measure 1",
    followUpInCharge: "John Doe",
    responsiblePerson: "Jane Smith",
    followUps: [
      { id: 1, date: "2023-01-01", description: "Follow-Up A - Description" },
      { id: 2, date: "2023-01-02", description: "Follow-Up B - Description" },
    ],
  },
  {
    id: 2,
    name: "Measure 2",
    followUpInCharge: "Alice Johnson",
    responsiblePerson: "Bob Brown",
    followUps: [
      { id: 3, date: "2023-01-03", description: "Follow-Up C - Description" },
      { id: 4, date: "2023-01-04", description: "Follow-Up D - Description" },
    ],
  },
  // Add more measures and follow-ups as needed
];
const HomePage = () => {
  return (
    <div>
      <MeasuresDropdownMenu measures={measures} />
    </div>
  );
};

export default HomePage;
