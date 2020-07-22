import React from "react";
import Proptypes from "prop-types";

function History({ count, minute, second, millisecond }) {
  return (
    <section>
      <span className="history_count">{count}.</span>
      <span>{minute} : </span>
      <span>{second} : </span>
      <span>{millisecond}</span>
      <br />
    </section>
  );
}

History.propTypes = {
  count: Proptypes.number,
  minute: Proptypes.number.isRequired,
  second: Proptypes.number.isRequired,
  millisecond: Proptypes.number.isRequired,
};

export default History;
