import {useState} from 'react';
import {Carousel, Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';


function Photos() {
 const [data, setData] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 const [error, setError] = useState(null);


 const handleSearch = async () => {
   const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${searchTerm.toLowerCase()}/photos?sol=1000&api_key=DEMO_KEY`;
     try {
       const response = await axios.get(url);
       if (response.status !== 200) {
         throw new Error(`${response.status} error`);
       }
        const photo = response.data;
        const img = photo.photos.map(p => p.img_src);
        setData(img);
     }
     catch (error) {
       console.error(error);
       setError("Api call error")
     }
 }

 return (
   <div>
     <Form className="container mb-3">
       <Row className="justify-content-center">
         <Col xs={6} style={{marginLeft: '10px', marginRight: '0px'}}>
           <Form.Group>
             <Form.Control
               type="text"
               placeholder="Search Images"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </Form.Group>
         </Col>
         <Col xs={1} style={{marginLeft: '-40px'}}>
           <Button style={{ borderTopLeftRadius: '0%', borderBottomLeftRadius: '0%'}} variant="primary" onClick={handleSearch}>Search</Button>
         </Col>
       </Row>
     </Form>
     {error ? <p className="text-danger">{error}</p> : (
       <Carousel>
         {data.map((image, i) => (
           <Carousel.Item key={i}>
             <img
               className="d-block mx-auto"
               src={image}
               alt={`${i} slide`}
               style={dimension}
             />
           </Carousel.Item>
         ))}
       </Carousel>
     )}  
   </div>
 );
}

const dimension = {
 height: '75vh',
 objectFit: 'cover',
 width: '90vw'
};

export default Photos;




