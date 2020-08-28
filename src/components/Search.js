import React from 'react';
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap';

const Search = props => {
  return (
    <section className="pt-4">
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <form onSubmit={props.onSubmit}>
              <InputGroup>
                <Form.Control
                  value={props.value}
                  onChange={props.onChange}
                  type="text"
                  placeholder="Search for beer" 
                  size="sm"
                />
                <InputGroup.Append>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="sm">
                      Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>        
            </form>
          </Col>
        </Row>
      </Container>
   </section>





    // <section className="search-section">
    //   <form className="form" id="search-form" onSubmit={props.onSubmit}>
    //     <input 
    //       type="text"
    //       className="form__input" 
    //       placeholder="Search for beer"
    //       value={props.value}
    //       onChange={props.onChange}
    //       >
    //       </input>
    //     <button className="form__button" form="search-form">Search</button>
    //   </form>
    // </section>
  )
}


export default Search;