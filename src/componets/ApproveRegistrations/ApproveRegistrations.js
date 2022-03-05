import React, {useState} from 'react';
import Table from "../Table/Table";
import data from "./table_mock.json"

let selectedUsers: []
let actions: []

const App = () => {
    const [users, setusers] = useState(data);

    let handleEditCallBack = (e, row) => {
        console.log(e, row);
    }

    let handleCallback = (users) => {
        selectedUsers = users
        console.log(selectedUsers);
    }
    actions = [{
        "action": "Edit",
        "callBack": handleEditCallBack
    }]

    return (
        <div>
            <h1>Approve Registrations</h1>
            <Table data={users} hasCheckbox={true} callBack={handleCallback} actions={actions}/>
        </div>
    );
};

export default App;
