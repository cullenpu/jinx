import React from "react";
import { Col } from "reactstrap";
import { FaFile, FaEllipsisH } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

const AppliedCol = ({ companies }) => {
  return (
    <Col>
      <div className="text-center pb-3">
        <h5>
          <FaFile style={{ color: "grey", float: "left" }} /> APPLIED{" "}
          <FaEllipsisH style={{ color: "grey", float: "right" }} />
        </h5>
      </div>
      {companies &&
        companies.map((company) => {
          return (
            <CompanyCard
              company={company.company}
              title={company.title}
              date={company.date}
              color={company.color}
            />
          );
        })}
    </Col>
  );
};

export default AppliedCol;