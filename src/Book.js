import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

class Book extends React.Component {
    render() {
        return (
            <>
            <Container>
                <Carousel style={{ backgroundColor: 'grey', color: 'white', height: '300px'}}>
                    {this.props.books.map((data, idx) => {
                        return (
                            <Carousel.Item key={idx}>
                                <div id='carousel-title' className='text-center'>
                                    <h2>{data.title}</h2>
                                    <div id='carousel-content'>
                                        <div>
                                            <h3>Description:</h3>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>
            </>


        )
    }
}export default Book;