import React from "react";
import electric from "../assets/electric.png";
import fire from "../assets/fire.png";
import personal from "../assets/personal.png";
import water from "../assets/water.png";
import road from "../assets/road.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: electric,
    desc: "Electric Problem",
  },
  {
    id: 2,
    img: fire,
    desc: "Fire Problem",
  },
  {
    id: 3,
    img: personal,
    desc: "Personal Problem",
  },
  {
    id: 4,
    img: water,
    desc: "Water Problem",
  },
  {
    id: 5,
    img: road,
    desc: "Road Problem",
  },
];

const Comp = ({ img, desc, id }) => (
  <div key={id}>
    <Link to="complain">
      <img className="w-40" src={img} />
      <p className="mt-6">{desc}</p>
    </Link>
  </div>
);

const Complaint = () => (
  <div className="flex text-center justify-evenly py-10">
    {data.map((problem) => (
      <Comp key={problem.id} {...problem} />
    ))}
  </div>
);

export default Complaint;
