import './Title.css';

import classnames from "classnames";

function Title({ rows, className }) {
    const combinedClassName = classnames("title", className)
    return rows.map(row => <div key={row} className={combinedClassName}>
        {row}
    </div>);
}

export default Title;
