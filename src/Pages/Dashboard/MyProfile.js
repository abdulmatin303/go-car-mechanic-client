import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const MyProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '50a06926a134a6cb570feab334799660';

    const onSubmit = async data => {
        // console.log('data:', data);

        // for imageBB 
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log("imgBB Result",result)
                if (result.success) {
                    const img = result.data.url;
                    const profileInfo = {
                        name: data.name,
                        email: data.email,
                        education: data.education,
                        location: data.location,
                        phone: data.phone,
                        linkedIn: data.linkedIn,
                        img: img
                    }

                    fetch('https://frozen-anchorage-94808.herokuapp.com/myProfile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profileInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('My profile Created Successfully');
                                // console.log(profileInfo);
                                reset();
                            }
                            else {
                                toast.error('Failed');
                            }
                        })
                }

            })


    }

    return (
        <div>
            <div className='text-center'>
                <h2 className="text-2xl font-bold text-emerald-400">Create Your Profile</h2>

                
            </div>

            <div className='flex justify-center'>



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

                        <select {...register('education')} class=" input-bordered select w-full max-w-xs">

                            <option>Masters</option>
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
                                    message: 'Phone Number Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>



                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            class="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">LinkedIn Profile</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your LinkedIn Id"
                            class="input input-bordered w-full max-w-xs"
                            {...register("linkedIn", {
                                required: {
                                    value: true,
                                    message: 'LinkedIn Id Required'
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