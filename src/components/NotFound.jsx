import React from "react";
import img from "../assets/images/page-not-found.webp";
import "./NotFound.css";

export default function NotFound() {
  return <img className="not-found" src={img} alt="page-not-found-img" />;
}
