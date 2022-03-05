import React from 'react';
import "./Table.css"

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.selectedRows = []
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    getHeader = function () {
        const keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function () {
        const items = this.props.data;
        const keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}>
                <RenderCheckbox hasCheckbox={this.props.hasCheckbox} callBack={this.props.callBack} isSelectAll={false}
                                id={row.id}/>
                <RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    render() {
        return (
            <div className={"container"}>
                <table>
                    <thead>
                    <tr>
                        <td><input type={"checkbox"}/></td>
                        {this.getHeader()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}

function selectRow(e, id, callBack) {
    if (e.target.checked) {
        this.selectedRows.append(id)
    } else {
        this.selectedRows.removeAll(id)
    }
    callBack(this.selectedRows)
}

const RenderCheckbox = (props) => {
    console.log(props.callBack);
    if (props.hasCheckbox) {
        return <td><input type={"checkbox"} onClick={(e) => selectRow(e, props.id, props.callBack)}/></td>;
    }
    return null;
}
