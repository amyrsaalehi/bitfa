import { PureComponent } from "react";
import Column from "react-virtualized/dist/commonjs/Table/Column";
import Table from "react-virtualized/dist/commonjs/Table/Table";
// import { Column, Table, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

const list = [
  {
    name: "بیت‌کوین",
    usdPrice: "112,030,000",
    rialPrice: "112,030,000",
    volume: "112,030,000",
    marketCap: "112,030,000",
  },
  {
    name: "اتریوم",
    usdPrice: "112,030,000",
    rialPrice: "112,030,000",
    volume: "112,030,000",
    marketCap: "112,030,000",
  },
  {
    name: "سولانا",
    usdPrice: "112,030,000",
    rialPrice: "112,030,000",
    volume: "112,030,000",
    marketCap: "112,030,000",
  },
  {
    name: "دوج‌کوین",
    usdPrice: "112,030,000",
    rialPrice: "112,030,000",
    volume: "112,030,000",
    marketCap: "112,030,000",
  },
];

export default class DataGrid extends PureComponent {
  render() {
    const columnStyles = {
      style: {
        direction: "ltr",
      },
      className: "text-center whitespace-nowrap",
      headerClassName: "text-center bg-base-200 mr-1 pt-2",
    };
    return (
      <Table
        autoHeight
        autoWidth
        autoContainerWidth
        width={1000}
        height={1000}
        headerHeight={30}
        rowHeight={50}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
        style={{
          width: "100%",
          direction: "ltr",
          overflowX: "auto",
        }}
      >
        <Column label="نام" dataKey="name" width={500} {...columnStyles} />
        <Column label="قیمت" dataKey="usdPrice" width={900} {...columnStyles} />
        <Column
          label="قیمت ریالی"
          dataKey="rialPrice"
          width={900}
          {...columnStyles}
        />
        <Column
          label="حجم بازار"
          dataKey="volume"
          width={900}
          {...columnStyles}
        />
        <Column
          label="ارزش بازار"
          dataKey="marketCap"
          width={900}
          {...columnStyles}
        />
      </Table>
    );
  }
}
