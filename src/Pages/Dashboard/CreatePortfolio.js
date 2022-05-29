import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CreatePortfolio = () => {

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
                    const portfolioInfo = {
                        name: data.name,
                        email: data.email,
                        education: data.education,
                        skill: data.skill,
                        project1: data.project1,
                        project2: data.project2,
                        project3: data.project3,
                        img: img
                    }

                    fetch('http://localhost:5000/myPortfolio', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(portfolioInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('My portfolio Created Successfully');
                                console.log(portfolioInfo);
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
                <h2 className="text-2xl font-bold text-emerald-400">Create Your Portfolio</h2>

            </div>

            <div className='flex justify-center'>

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

                            <select {...register('education')} class=" input-bordered select w-full max-w-xs">

                                <option>Bsc in CSE</option>
                                <option>Bsc in IT</option>
                                <option>Bsc in ICT</option>
                                <option>Bsc in ETE</option>
                                <option>Bsc in EEE</option>
                                <option>Msc in CSE</option>
                                <option>Bsc in EEE</option>
                                <option>Bachelor</option>
                                <option>Masters</option>
                                <option>HSC</option>
                                <option>SSC</option>
                                <option>JSC</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Skill</span>
                            </label>
                            <input
                                type="text"
                                placeholder="React,  Node,...."
                                class="input input-bordered w-full max-w-xs"
                                {...register("skill", {
                                    required: {
                                        value: true,
                                        message: 'Skill is Required'
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
                                <span class="label-text">Project 1</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Project Link"
                                class="input input-bordered w-full max-w-xs"
                                {...register("project1", {
                                    required: {
                                        value: true,
                                        message: 'Project1 Link Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Project 2</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Project Link"
                                class="input input-bordered w-full max-w-xs"
                                {...register("project2", {
                                    required: {
                                        value: true,
                                        message: 'Project2 Link Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Project 3</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Project Link"
                                class="input input-bordered w-full max-w-xs"
                                {...register("project3", {
                                    required: {
                                        value: true,
                                        message: 'Project3 Link Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white mb-6' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePortfolio;