import './Title.css';

function Title({ rows }) {
    return rows.map(row => <div key={row} className="title">
        {row}
    </div>);
}

export default Title;
