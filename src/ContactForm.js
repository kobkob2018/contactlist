import React from 'react';
import addContact from './add-contact.svg'
import './ContactForm.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal,Button } from '@material-ui/core';
import spriteicone from './spriteicone.png';
class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open:false, name: '', phone: '',title: '', googlemap:'',address:'',city:'',country:'',zip:''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	}

	handleSubmit(event) {
		const {
			name,  
			phone,
			title,
			googlemap,
			address,
			city,
			country,
			zip,
		} = this.state;
		this.props.onAdd(
			name, 
			phone,
			title,
			googlemap,
			address,
			city,
			country,
			zip,
		);
		this.setState( {name: '', phone: '',title: '', googlemap:'',address:'',city:'',country:'',zip:''});
		event.preventDefault();
	}

	handleOpen = (event)=> {
		this.setState({open: true});
	}
	handleClose = (event)=> {
		this.setState({open: false});
	}
	render() {
		const open = true;

		return (
			<>

			
			<Modal
			open={this.state.open}
  			onClose={this.handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			>
				
			<div id="contact-form">
				<form>
					<h2>Add new Contact</h2>
					<div className="form-fields">
						<label htmlFor="name">
							<span>NAME</span>
							<input name="name" value={this.state.name} onChange={this.handleChange} />
						</label>
						<label htmlFor="phone">
							<span>PHONE</span>
							<input name="phone" value={this.state.phone} onChange={this.handleChange} />
						</label>
						<label htmlFor="title">
							<span>TITLE</span>
							<input name="title" value={this.state.title} onChange={this.handleChange} />
						</label>
						<label htmlFor="googlemap">
							<span>GOOGLE MAP COORDINATES</span>
							<input name="googlemap" value={this.state.googlemap} onChange={this.handleChange} />
						</label>
						<label htmlFor="address">
							<span>ADDRESS</span>
							<input name="address" value={this.state.address} onChange={this.handleChange} />
						</label>
						<label htmlFor="city">
							<span>CITY</span>
							<input name="city" value={this.state.city} onChange={this.handleChange} />
						</label>
						<label htmlFor="country">
							<span>COUNTRY</span>
							<input name="country" value={this.state.country} onChange={this.handleChange} />
						</label>
						<label htmlFor="zip">
							<span>ZIPCODE</span>
							<input name="zip" value={this.state.zip} onChange={this.handleChange} />
						</label>												
					</div>

<AddCircleIcon/>
<div>
					<Button variant="contained" color="primary" onClick={this.handleSubmit} >save</Button>
                    <Button variant="contained" color="secondery" onClick={this.handleClose} >cancel</Button>
					</div>
				</form>
			</div>
			</Modal>
			<div className="contact-addButton-wrap">
			<a style={{ backgroundImage: `url(${spriteicone})` }} className="btn-img btn-img-add" href="#" onClick={this.handleOpen}></a>
				
			</div>
			</>
		);
	}
}

export default ContactForm;