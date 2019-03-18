import * as React from "react";
import * as styles from "./style.css";

interface ITr {
  th: string;
  td: string;
}

export interface ITable {
  items: ITr[];
  className?: string;
}

const Tr: React.SFC<ITr> = ({ th, td }) => (
  <tr>
    <th>{th}</th>
    <td>{td}</td>
  </tr>
);

const Table: React.SFC<ITable> = ({ items, className }) => (
  <table className={[styles.table, className].join(" ")}>
    {items.map(item => (
      <Tr {...item} />
    ))}
  </table>
);

export default Table;
