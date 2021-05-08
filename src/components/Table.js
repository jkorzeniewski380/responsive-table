import React from 'react';
import './table.css';

function Table({ headers, content }) {
    const head = headers.map(header => <th>{header}</th>);
    const tableContent = content.map((row, idx) => {
        const rowContent = row.map((value, i) => {
            const styles = {
                position: "absolute",
                top: "13px",
                left: "6px",
                width: "45%",
                paddingRight: "10px",
                textAlign: "left",
                whiteSpace: "nowrap"
            };

            return <td key={i}><div style={styles}>{headers[i]}</div>{value}</td>;
        });

        return <tr key={idx}>{rowContent}</tr>
    });

    return (
        <table className="styled-table"> 
            <thead>
                <tr>
                    {head}
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>);
}

export default Table;