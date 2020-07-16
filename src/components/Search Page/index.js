import React from 'react';
import {DatePicker,InputNumber,Select} from "antd";

const { Option } = Select;

const index = () => {

    function onFlightNumberChange(value) {
        console.log('changed to', value);
      }
    function onCarrierChange(val){
        console.log(val)
    }
    return (
        <div>
            <div style={style.box}>

            <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select Airline"
    optionFilterProp="children"
    onChange={onCarrierChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="EY">Emirates</Option>
    <Option value="ET">Eithad</Option>
    <Option value="QT">Qatar</Option>
  </Select>
               
    <div><InputNumber  onChange={onFlightNumberChange} placeholder="ex 245,311" /> </div>
               
               <div>
                   <DatePicker/>
                       </div>
                
                </div>
        </div>
    );
};

export default index;
const style = {
    resultBox: {
        borderRadious: 10,
        boxShadow:
        "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
        backgroundColor: "white",
        padding: 20,
        margin: "auto",
        width: 600,
        marginTop: 10
    },
    box: {
        borderRadious: 10,
        boxShadow:
        "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
        backgroundColor: "white",
        padding: 20,
        margin: "auto",
        width: 600,
    },
    mainHeader: {},
    searchBox: {
        display: "flex"
    },
    marginOfSearchBox: {

    }

};
