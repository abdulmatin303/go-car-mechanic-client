import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './MyReview.css';

const MyReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('We find your feedback successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className='add-review'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  className='rounded-md p-2' {...register("name", { required: true, maxLength: 120 })} defaultValue={user.displayName} />

                <input  className='rounded-md p-2' {...register("email", { required: true, maxLength: 150 })} defaultValue={user.email} />

                <textarea className='rounded-md p-2' {...register("description", { required: true})} placeholder="Your feedback" />

                <select  className='rounded-md p-2' {...register("rating", { required: true})}>
                     <option value="">Rating: from 1 to 5</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                </select>
                
                <input class="btn btn-primary w-full" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MyReview;