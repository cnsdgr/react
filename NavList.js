function NavList(props){

    const stil = {
        display: 'inline-block',
        margin: '0 10px'
    }
  
   
    const hover_btn={
        className:"btn btn-lg btn-danger my-2"

        }

        const nrm_btn={
            className:"btn btn-lg btn-warning my-2"

        }   


    return (
        <li style={stil}>
            <a  href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-lg btn-warning my-2"
                onMouseOver={(e) => Object.assign(e.target,hover_btn)}
                onMouseOut={(e) => Object.assign(e.target,nrm_btn)}
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default NavList;