import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


class Header extends React.Component {

    render() {
        return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-1">Allison Summers</h1>
                    <h6 className="display-6">3D Environment and Prop Artist</h6>
                </Container>
            </Jumbotron>
        </div>
        )
    }

}
export default Header