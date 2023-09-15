import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addCategorystart, updateCategorystart } from '../../../redux/action/category.action';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import { toast } from 'react-toastify';

let initialstate = {
	name: '',
	image: '',
	status: ''
}

export default function AddOrEditCategory() {

	let categories = useSelector(state => state.category.categories)
	// console.log(categories);

	let {id} = useParams();

	// console.log(id);

	if(id){
		let category;
		category = categories.find((cate)=> cate.id === id);
		// console.log(category);

		if (category){
			delete category.id

			initialstate = {...category}
		}
	}

	const dispatch = useDispatch();

	const navigate = useNavigate();

	let [formData, setFormdata] = useState(initialstate);

	let { name, image, status } = formData;

	const inputchange = (event) => {

		setFormdata((prevValue) => ({
			...prevValue,
			[event.target.name]: event.target.value
		}))
	}

	const fileChange = (event) => {
		uploadFile(event.target.files[0]);
	}

	const uploadFile = (file) => {

		const storageRef = ref(storage, file.name);

		const uploadTask = uploadBytesResumable(storageRef, file);

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		uploadTask.on('state_changed',
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				// console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						// console.log('Upload is paused');
						break;
					case 'running':
						// console.log('Upload is running');
						break;
				}
			},
			(error) => {
				// Handle unsuccessful uploads
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					// console.log('File available at', downloadURL);

					setFormdata((prevValue) => ({
						...prevValue,
						image : downloadURL
					}))
				});
			}
		);

	}

	const submit = (event) => {
		event.preventDefault();

		if(id){
			dispatch(updateCategorystart(id, formData))
			toast.success(" Category update successfully...");
		}else{
			dispatch(addCategorystart(formData))
			toast.success(" Category Add successfully...");
		}


		setTimeout(() => {
			navigate('/admin/category')
		}, 500);
	}

	return (
		<div className="card">
			<div className="card-header bg-primary text-white d-flex justify-content-between">
				<div>Add Category</div>
				<div><Link to="/admin/category" className='btn btn-success'>Back</Link></div>
			</div>
			<div className="card-body">
				<form onSubmit={submit}>
					<div className="mb-4">
						<label htmlFor="name" className="form-label">Name</label>
						<input type="text" className="form-control"
							id="name" name='name'
							value={name} onChange={inputchange} />
							{
								image && <div className='mt-2'> <img src={image} style={{ height : "100px"}} /> </div>
							}
					</div>


					<div className="mb-3">
						<label htmlFor="image" className="form-label">Image</label>
						<input className="form-control"
							type="file" id="image"
							onChange={fileChange}/>
					</div>


					<div className='mb-3'>
						<label htmlFor="status">Status</label>
						<select className="form-control" id='status' name='status' defaultValue={status} onChange={inputchange}>
							<option hidden>select category</option>
							<option value="1">Active</option>
							<option value="0">InActive</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	)
}
