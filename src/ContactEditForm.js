import React from 'react';
import profile from './profile.svg';
import bin from './bin.svg';
import './Contact.css';
import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
class ContactEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cid: this.props.cid, 
			name: this.props.name, 
			phone: this.props.phone,
			title: this.props.title,
			googlemap: this.props.googlemap,
			address: this.props.address,
			city: this.props.city,
			country: this.props.country,
			zip: this.props.zip,
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        
	}

	handleChange(event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
		console.log(name);
	}

	handleSubmit(event) {
		console.log(this.state);
		const {
			cid, 
			name, 
			phone,
			title,
			googlemap,
			address,
			city,
			country,
			zip,
		} = this.state;
		this.props.onSave(
			cid, 
			name, 
			phone,
			title,
			googlemap,
			address,
			city,
			country,
			zip,
		);
		event.preventDefault();
    }
	handleCancel(event) {
       
		const {cid} = this.state;
        
        this.props.onCancel(cid);
		event.preventDefault();
	}    
	render() {
		return (
			<>
						<Modal
			open="true"
  			
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			>
			<div id="contact-form">
				<form>
				<h2>Edit Contact</h2>
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

					<Button variant="contained" color="primary" onClick={this.handleSubmit} >save</Button>
                    <Button variant="contained" color="secondery" onClick={this.handleCancel} >cancel</Button>
                    
				</form>
			</div>
			</Modal>
			</>
		);
	}
}

export default ContactEditForm;