function Button(props) {
    let classNames = "border border-gray-300 rounded-full px-3 font-bold text-sm h-8 "
    if (props.outline) {
        classNames += "text-white "
    } else {
        classNames += "bg-gray-300 text-dark "
    }
    return (
        <button {...props} className={classNames + props.className} />
    )
}

export default Button;