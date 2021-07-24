import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

function TextIconButton({ text, icon, iconOnLeft, onClick, className }) {
    return <Button
        variant="outlined"
        color="inherit"
        className={className}
        startIcon={iconOnLeft && <Icon>{icon}</Icon>}
        endIcon={!iconOnLeft && <Icon>{icon}</Icon>}
        onClick={onClick}
    >
        {text}
    </Button>
}

export default TextIconButton;