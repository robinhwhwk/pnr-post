function Input(props) {
    return (
        <input {...props} className={"bg-brighter p-2 border border-dark-brighter rounded-md block " + props.className}/>
    )
}

export default Input;