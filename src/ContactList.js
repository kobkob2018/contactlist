import React from 'react';
import Contact from './Contact';
import ContactEditForm from './ContactEditForm';
import ContactForm from './ContactForm';
import { Grid } from '@material-ui/core';
import './ContactList.css';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {contacts: [
				{
					cid:0, 
					name: "John Smith", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107",
					img: "avatar_default.jpg", 
					editMode:false
				},
				{
					cid:1, 
					name: "Michael Zimber", 
					phone: "(123) 456-789",
					title: "Sales Manager", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107", 
					img: "michael zimber.jpg", 
					editMode:false
				},
				{
					cid:2, 
					name: "Alex Jonathan", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107", 
					img: "alex jonathan.jpg", 
					editMode:false
				},
				{
					cid:3, 
					name: "John Smith", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107", 
					img: "avatar_3.jpg", 
					editMode:false
				},
				{
					cid:4, 
					name: "sandra smith", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107", 
					img: "sandra smith.jpg", 
					editMode:false
				},
				{
					cid:5, 
					name: "John Smith", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107",
					img: "avatar_5.jpg",  
					editMode:false
				},
				{
					cid:6, 
					name: "monica smith", 
					phone: "(123) 456-789",
					title: "Marketing Manager", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107",
					img: "monica smith.jpg",  
					editMode:false
				},
				{
					cid:7, 
					name: "janeth carton", 
					phone: "(123) 456-789",
					title: "Graphics Designer", 
					googlemap: "", 
					address: "795 Folsom Ave, Suite 600", 
					city: "San Francisco", 
					country: "CA", 
					zip: "94107",
					img: "janeth carton.jpg",  
					editMode:false
				},



			],
			nextItemId:2,
			editId: false,
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleEdit = (editId) => {
		
		const contacts = this.state.contacts;
			const removeEditId = this.state.editId;
			const updatedContacts = contacts.map(x => (
				x.cid === removeEditId ? 
				{ ...x, editMode: false } : 
					x.cid === editId ? 
					{ ...x, editMode: true } : 
					x
			));
			this.setState({editId:editId,contacts:updatedContacts});
		
	}
	handleSave = (
		editId,
		name,
		phone,
		title,
		googlemap,
		address,
		city,
		country,
		zip,
	) => {

		const contacts = this.state.contacts;
		const updatedContacts = contacts.map(x => (x.cid === editId ? 
			{ ...x,
				editMode: false, 
				name:name, 
				phone:phone,				
				title:title,
				googlemap:googlemap,
				address:address,
				city:city,
				country:country,
				zip:zip,
			} : x));
		this.setState({editId:false, contacts:updatedContacts});
	}	
	handleCancelEdit = (editId) => {

		const contacts = this.state.contacts;
		const updatedContacts = contacts.map(x => (x.cid === editId ? { ...x, editMode: false} : x));
		this.setState({editId:false, contacts:updatedContacts});
	}	
	handleAdd(
		name, 
		phone,
		title,
		googlemap,
		address,
		city,
		country,
		zip,
		) {
		let contacts = this.state.contacts;
		contacts.unshift({
			cid: this.state.nextItemId,
			name, 
			phone,
			title,
			googlemap,
			address,
			city,
			country,
			zip,
		});

		this.setState({nextItemId:this.state.nextItemId+1, contacts});
	}

	handleDelete(name) {
		let contacts = this.state.contacts;
		contacts = contacts.filter(contact => contact.name !== name);
		this.setState({contacts});
	}

	render() {
		const contacts = this.state.contacts;

		return (
			<div className="contact-list-app">
				 <Grid container spacing={16}>

				{
					contacts.map((contactItem) => {
						if(contactItem.editMode){
							return (
								<Grid xs="4" item>
									<ContactEditForm
										cid = {contactItem.cid}
										key = {contactItem.cid}
										name={contactItem.name}
										phone={contactItem.phone}
										title={contactItem.title}
										googlemap={contactItem.googlemap}
										address={contactItem.address}
										city={contactItem.city}
										country={contactItem.country}
										zip={contactItem.zip}
										img={contactItem.img}
										onSave={this.handleSave}
										onCancel={this.handleCancelEdit}
									/>
								</Grid>
							);
						}
						else{
							return (
								<Grid xs="4"  item>
								<Contact
									cid = {contactItem.cid}
									key = {contactItem.cid}
									name={contactItem.name}
									phone={contactItem.phone}
									title={contactItem.title}
									googlemap={contactItem.googlemap}
									address={contactItem.address}
									city={contactItem.city}
									country={contactItem.country}
									zip={contactItem.zip}
									img={contactItem.img}
									onDelete={this.handleDelete}
									onEdit={this.handleEdit}
								/>
								</Grid>
							);
						}
					}) // ;
				}
				<Grid xs="4"  item>
				<ContactForm
					onAdd={this.handleAdd}
				/>
				</Grid>
				</Grid>
			</div>
		);
	}
}

export default ContactList;