import{Form,Button} from 'react-bootstrap'

const UploadJewelrySalesCsv = () =>
{
 

  return (
    <div className="col-sm-6 offset-sm-3">
    <br/>
    <br/>
   
      <Form>
      <Form.Group controlId="formFile" className="mb-3">
    <Form.Label  className="form_header">  Upload jewelry sales CSV </Form.Label>
    <Form.Control type="file"  placeholder=""/>
     </Form.Group>
    </Form>

     <Button variant="primary" type="submit">
      Upload CSV
     </Button>

    
     
    </div>
  );  
 

}
export default UploadJewelrySalesCsv;
