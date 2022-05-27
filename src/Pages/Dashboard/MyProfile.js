import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MyProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    const onSubmit = async data => {
        console.log('data:', data);
        
        axios.post('http://localhost:5000/myProfile', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added your Profile');
                    reset();
                }
            })

    }


    return (
        <div>


            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Education</span>
                        </label>

                        <select {...register('education')} class="select w-full max-w-xs">

                            <option>Master</option>
                            <option>Bachelor</option>
                            <option>HSC</option>
                            <option>SSC</option>
                            <option>JSC</option>

                        </select>


                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Location"
                            class="input input-bordered w-full max-w-xs"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            class="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Location is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;