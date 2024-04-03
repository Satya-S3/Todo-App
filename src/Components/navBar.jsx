import "bootstrap/dist/css/bootstrap.min.css";

const textStyle = {
      textShadow: "2px 2px 5px black"
    };

function navBar(){
      return <>
            <nav className="navbar bg-primary">
                  <h4 className="mx-5 text-white" style={textStyle}>TODO APP</h4>
            </nav>
      </>
}

export default navBar;