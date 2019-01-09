import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

// import {routes} from './_routes';
import {Link} from 'react-router-dom'

class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            
        
        };
    }


    render() {
        return (
            <div>
            <div>
                <Navbar color="faded"  light expand="md">

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to='/'><Button className="nav-button" color="light">Personal</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/underEarth'><Button className="nav-button" color="light">UnderEarth</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/tether'><Button className="nav-button" color="light">Tether</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about'><Button className="nav-button" color="light">About</Button></Link>
                            </NavItem>
                        </Nav>

                </Navbar>
            </div>
            {/* <div className="navbar-route">
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main} />
            ))}
            </div> */}
            </div>
        );
    }

}

export default SiteBar;