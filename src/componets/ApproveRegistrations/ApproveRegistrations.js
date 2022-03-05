import React, {useState} from 'react';
import Table from "../Table/Table";
import data from "./table_mock.json"

const App = () => {
    const [users, setusers] = useState(data);
    let state = {
        selectedUsers: [],
    }

    let handleCallback = (selectedUsers) =>{
        this.setState({selectedUsers: selectedUsers})
    }
    return (
        <div>
            <Table data={users} hasCheckbox={true} callBack={handleCallback}/>
        </div>
    );
};

export default App;
