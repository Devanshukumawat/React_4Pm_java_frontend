function Example(props){

    console.log(props)

    // props.text = "Manny"  // Read only

    const {text} = props

    return(
        <>
            <h1>Learn Props... {text} {props.text}</h1>
        </>
    )
}

export default Example;