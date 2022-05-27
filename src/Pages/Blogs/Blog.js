import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-12'>
            <h3 className='text-center text-3xl font-medium text-emerald-400'>My Blogs</h3>
            <div className='mt-6'>
                <div className='shadow'>
                    <h4 className='text-2xl text-center text-sky-500'>How will you improve the performance of a React Application?</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
                <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500'>What are the different ways to manage a state in a React application?</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
                <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500'>How does prototypical inheritance work?</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
                <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500 pl-6 pr-6'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
                <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500 pl-6 pr-6'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
                <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500'> What is a unit test? Why should write unit tests?</h4>
                    <p className='p-6 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;