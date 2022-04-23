import Button from "@material-ui/core/Button"

const CustomButton = ({text,handleClick}) => {
    return (
        <Button variant="outlined">{text}</Button>
    )
}

export default CustomButton