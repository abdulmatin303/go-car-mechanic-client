import React from 'react';
import output from '../../images/output.JPG';
import wrong from '../../images/wrong.JPG';
import correct from '../../images/correct.JPG';

const Blog = () => {
    return (
        <div className='container mx-auto mt-12'>
            <h3 className='text-center text-3xl font-medium text-emerald-400'>My Blogs</h3>
            <div className='mt-6'>
                <div className='shadow hover:text-rose-600'>
                    <h4 className='text-2xl text-center text-sky-500'>How will you improve the performance of a React Application?</h4>
                    <p className='p-6'>
                        We can improve the performance of a react application in different ways like:
                        <h5 className='font-bold'>- Keeping component state local where necessary.</h5>
                        <h5 className='font-bold'>- Use low resulaton images in React for fastest loading.</h5>
                        <h5 className='font-bold'>- Memoizing React components to prevent unnecessary re-renders.</h5>
                    </p>
                </div>
                <div className='shadow mt-6  hover:text-rose-600'>
                    <h4 className='text-2xl text-center text-sky-500'>What are the different ways to manage a state in a React application?</h4>
                    <p className='p-6'>
                        <p>There are different ways to manage a state in a react application like:</p>
                        <h5 className='font-bold'>- Using useState hooks for managing local (UI) state</h5>
                        <h5 className='font-bold'>- Using lifting state up for managing local (UI) state or using context api or third party library like redux.</h5>
                        <h5 className='font-bold'>- In React Router, we can get all the information using useHistory or useLocation to manage URL State in React</h5>
                    </p>
                </div>
                {/* <div className='shadow mt-6'>
                    <h4 className='text-2xl text-center text-sky-500'>How does prototypical inheritance work?</h4>
                    <p className='p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi corrupti minus, quibusdam quidem, dolorem eius sequi explicabo quo quasi quis, voluptates similique. Officia est laudantium unde eos ex consectetur rem in atque soluta obcaecati sit repudiandae, porro ratione temporibus corrupti reiciendis. Corrupti nobis quos sunt dolores accusantium explicabo. Repellat?</p>
                </div> */}
                <div className='shadow mt-6  hover:text-rose-600'>
                    <h4 className='text-2xl text-center text-sky-500 pl-6 pr-6'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                    <p className='p-6'>
                        We do not set the state directly in React.If we try to update state directly then it won't re-render the component.
                        That's why we do not see the change in user interface. <br />
                        For Example:
                       <img src={wrong} alt="" />

                        Instead of  we  use setState()  method.  It gives an update to a component's state object. When state changes,  the component responds  by re-rendering.  
                        <br />
                        For Example:
                        <img src={correct} alt="" />
                       
                    </p>
                </div>
                <div className='shadow mt-6  hover:text-rose-600'>
                    <h4 className='text-2xl text-center text-sky-500 pl-6 pr-6'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    <p className='p-6'>
                        <div className='flex justify-center justify-items-center'>
                            <img src={output} alt="" />
                        </div>
                    </p>
                </div>
                <div className='shadow mt-6  hover:text-rose-600'>
                    <h4 className='text-2xl text-center text-sky-500'> What is a unit test? Why should write unit tests?</h4>
                    <p className='p-6 mb-12'><span className='text-green-500'>Unit testing</span> is a type of software testing where small units or components of a software's module are tested. The purpose of unit test is to validate that each small unit of the software components code performs as expected. It is done during the development of an application by the developers.
                        <br /> <br />
                        <span className='text-green-500'>Why should write unit tests?</span> <br /> Unit tests help to fix error or bugs early in the development stage and it saves costs.
                        It helps the developers to understand what he has written and make changes quickly if needed.
                        Unit tests help with code re-use in your development phase that will make your software efficient.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;