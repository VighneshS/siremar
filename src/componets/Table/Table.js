import React from 'react';
import "./Table.module.css"

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.props.data.data[0]);
    }

    getHeader = function () {
        const keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function () {
        const items = this.props.data.data;
        const metadata = this.props.data.metadata;
        const keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}>
                <RenderCheckbox hasCheckbox={this.props.hasCheckbox} selectedUsers={this.props.selectedUsers}
                                isSelectAll={false}
                                id={row.id}/>
                <RenderRow key={index} data={row} keys={keys} metadata={metadata}/>
                <RenderActionButtons actions={this.props.actions} data={row}/>
            </tr>
        })
    }

    render() {
        return (<div>
                <table>
                    <thead>
                    <tr>
                        <RenderCheckbox hasCheckbox={this.props.hasCheckbox} callBack={this.props.callBack}
                                        isSelectAll={false}/>
                        {this.getHeader()}
                        <RenderActionHeader actions={this.props.actions}/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                </table>
            </div>);
    }
}

function getRandomUniqueId() {
    return Math.random().toString(36).substring(5);
}

const RenderRow = (props) => {
    let html;
    return props.keys.map((key, index) => {
        html = ""
        props.metadata.styles.forEach(style => {
            if (style.column === key) {
                html = <td key={getRandomUniqueId()}>{style.styleFunction({value: props.data[key]})}</td>
            }
        })
        if (!html) {
            html = <td key={getRandomUniqueId()}>{props.data[key]}</td>
        }
        return html;
    })
}

function selectRow(e, id, selectedUsers) {
    if (e.target.checked) {
        selectedUsers.push(id)
    } else {
        selectedUsers.pop(id)
    }
}

function selectAllRow(e, callBack) {

}

const RenderActionHeader = (props) => {
    if (props.actions) {
        return <th>ACTIONS</th>;
    }
    return null;
}

const RenderActionButtons = (props) => {
    if (props.actions) {
        return props.actions.map((key, index) => {
            return <td key={getRandomUniqueId()}>
                <button onClick={(e) => key.callBack(e, props.data)}>{key.action}</button>
            </td>
        });
    }
    return null;
}

const RenderCheckbox = (props) => {
    if (props.isSelectAll) {
        return <td><input type={"checkbox"} onClick={(e) => selectAllRow(e, props.selectedUsers)}/></td>;
    } else if (props.hasCheckbox) {
        return <td><input type={"checkbox"} onClick={(e) => selectRow(e, props.id, props.selectedUsers)}/></td>;
    }
    return null;
}
