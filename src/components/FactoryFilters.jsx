import React, { useState } from "react";
import calculateRequiredFilters from "../utils/factoryFilter";
var factoryDataRegx = /^(\d+(,\d+)*)?$/;
export default function FactoryFilters({ factoryPollution }) {
  const isPatternOk = factoryDataRegx.test(factoryPollution);
  let errorMessage = "";
  if (isPatternOk) {
    if (factoryPollution === "") {
    }
  } else {
    errorMessage += "you should provide comma separated Natural Numbers only";
  }
  factoryPollution = factoryPollution.split(",").map((factoryPollution) => {
    factoryPollution = Number(factoryPollution);
    return factoryPollution;
  });
  let [filter, totalFilter] = calculateRequiredFilters(factoryPollution);
  return (
    <div>
      <h1>Filters: {filter}</h1>
      <h1>Pollution Result : {totalFilter || "Error"}</h1>

      <div>FactoryFilters</div>
      {errorMessage && (
        <div
          style={{
            marginTop: "15px",
            widows: "100%",
            padding: "4px",
            background: "#ffbdbd",
            color: "#7c0000",
          }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
