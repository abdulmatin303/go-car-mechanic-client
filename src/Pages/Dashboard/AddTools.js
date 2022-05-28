import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddTools = () => {

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
        .then(res=>res.json())
        .then(result => {
            // console.log("imgBB Result",result)
            if(result.success){
                const img = result.data.url;
                const productInfo = {
                    name: data.name,
                    available: data.available,
                    minimum: data.minimum,
                    price: data.price,
                    description: data.description,
                    img:img
                }

                fetch('http://localhost:5000/service',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productInfo)
                })
                .then(res=> res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Tools Added in Database');
                        // console.log(productInfo);
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
                            <span class="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            class="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Availabilie</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Availabilie"
                            class="input input-bordered w-full max-w-xs"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Availabilie Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Minimum"
                            class="input input-bordered w-full max-w-xs"
                            {...register("minimum", {
                                required: {
                                    value: true,
                                    message: 'Minimum Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            class="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price Required'
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




                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default AddTools;