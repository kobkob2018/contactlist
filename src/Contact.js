import React from 'react';
import profile from './profile.svg';
import spriteicone from './spriteicone.png';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDelete(event) {
		// event.target.parentNode.parentNode.remove();
		this.props.onDelete(this.props.name);
	}
	handleEdit(event) {
		// event.target.parentNode.parentNode.remove();
		this.props.onEdit(this.props.cid);
	}
	render() {
		const avater_img_src = `../asset/avatardefault.jpg`;
		//const avater_img_src = 'avatar_default.jpg';
		return (
			
			<div className="contact-card">
				<div className="contact-card-left">
					<img className="profile-photo" src={avater_img_src} alt={this.props.name} />
					<div className="contact-title">{this.props.title}</div>
				</div>
				<div className="contact-details">
					<div className="contact-name">{this.props.name}</div>
					<div className="contact-gmap">todo:gmap</div>
					<h3 className="contact-twitter-h3">Twitter, Inc.</h3>
					<div className="contact-address">{this.props.address}</div>
					<div className="contact-address-2">{this.props.city}, {this.props.country}</div>
					<div className="contact-phone">p: {this.props.phone}</div>
				</div>
				<div className="contact-card-edit-buttons">
					<a style={{ backgroundImage: `url(${spriteicone})` }} className="btn-img btn-img-delete" href="#" onClick={this.handleDelete}></a>
					<a style={{ backgroundImage: `url(${spriteicone})` }} className="btn-img btn-img-edit" href="#" onClick={this.handleEdit}></a>
				</div>
			</div>
		);
	}
}

export default Contact;