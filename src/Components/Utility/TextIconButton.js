import "./TextIconButton.css";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

function TextIconButton({ text, icon, iconOnLeft, onClick, className, disabled }) {
    const combinedClassNames = classNames(className, "text-icon-button");

    return <Button
        variant="outlined"
        color="inherit"
        className={combinedClassNames}
        startIcon={iconOnLeft && <Icon>{icon}</Icon>}
        endIcon={!iconOnLeft && <Icon>{icon}</Icon>}
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </Button>
}

export default TextIconButton;