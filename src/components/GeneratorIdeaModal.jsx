import React from 'react';
import { Button, Col, Row } from 'react-materialize';


let GeneratorIdeaModal = () => {
	return(
		<div>
			<Row>
				<Col s={12}>
					Go forth and program me a To-Do List, written in Javascript / jQuery.
				</Col>
			</Row>
			<Row>
				<Col s={6}>
					<Button className='btn btn-large black' waves='light'>
						No Thanks
					</Button>
				</Col>
				<Col s={6}>
					<Button className='btn btn-large red' waves='light'>
						I Accept
					</Button>
				</Col>
			</Row>
		</div>
		);
}
export default GeneratorIdeaModal;