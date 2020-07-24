import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DynGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: 'PostId', field: 'postId'},
                {headerName: 'Id', field: 'id'},
                {headerName: 'Name', field: 'name'},
                {headerName: 'Email', field: 'email'},
                {headerName: 'Body', field: 'body'}

            ],
            rowData: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div
                className="ag-theme-material"
                style={{ height: '600px', width: '1200px' }}
            >
                <AgGridReact
                 enableSorting={true}
                 pagination={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default DynGrid;
