import React from "react";

const Blogs = () => {
    return (
        <div className="lg:px-20 px-3">
            <div className=" ">
                <div className="my-6">
                    <p className="text-2xl text-teal-500">
                        How will you improve the performance of a React
                        Application?
                    </p>

                    <p className="text-xl text-slate-700">
                        {" "}
                        Lazy loading images or video in React . Optimize image
                        before placing in website. Because heavy image size take
                        more time to load Use CDN instead of downloadin file .
                        Because CDN depends on user geographic location. When
                        the user requests content from your website,they are
                        connected to edge server and are ensured the best online
                        experience possible. Before production deployment, user
                        should check and analyze your application bundle to
                        remove the plugins or modules that aren’t needed. For
                        this purpose user can use Webpack Bundle Analyzer. Use
                        javascript base animation instead of css animation
                    </p>
                </div>
                <div className="my-6">
                    <p className="text-2xl text-teal-500">
                        What are the different ways to manage a state in a React
                        application?
                    </p>
                    <p className="text-xl text-slate-700">
                        We may find four main types of state that should be need
                        to properly manage in React apps. They are Local
                        state,Global state,Server state,URL state. Through using
                        react hook like useState hook we can manage Local state
                        in React . There are some tools such as SWR and React
                        Query that make managing server state much easier.There
                        are several pieces of state that must be managed every
                        time you fetch or update data from an external server,
                        including loading and error state. We can Global state
                        using third party library . URL sate can be managed
                        through React Router.
                    </p>
                </div>
                <div className="my-6">
                    <p className="text-2xl text-teal-500">
                        Why you do not set the state directly in React. For
                        example, if you have `const [products, setProducts] =
                        useState([])`. Why you do not set `products = [...]`
                        instead, you use the `setProducts`
                    </p>
                    <p className="text-xl text-slate-700">
                        We use react hook instead of setting state directly
                        because the website may re-render if any changes occur.
                        For example in e-commerce site we add product in cart
                        for purchase. Then the quantity of product in that
                        website must be changed .When we use setState, it
                        creates a new item in the systems memory, a distinctly
                        different item from the original. Now, React has the
                        ability to distinguish what needs to be re-rendered
                        based on the previous state. When the user change the
                        quantity of product react application is re rendered.
                    </p>
                </div>
                <div>
                    <p className="text-2xl text-teal-500">
                        How does prototypical inheritance work?
                    </p>
                    <p className="text-xl text-slate-700">
                        Prototypical inheritance means to the capability to
                        access object properties from another object. All
                        JavaScript objects inherit properties and methods from a
                        prototype. In past , in order to get and set the
                        [[Prototype]] of an object, we use Object.getPrototypeOf
                        and Object.setPrototypeOf. Nowadays, in modern language,
                        it is being set using __proto__.When it comes to
                        inheritance, JavaScript only has one construct: objects.
                        Each object has a private property which holds a link to
                        another object called its prototype.When trying to
                        access a property of an object, the property will not
                        only be sought on the object but on the prototype of the
                        object, the prototype of the prototype, and so on until
                        either a property with a matching name is found or the
                        end of the prototype chain is reached.
                    </p>
                </div>
                <div className="my-9">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <p className="text-2xl text-teal-500">
                            How does prototypical inheritance work?
                        </p>
                        <p className="text-xl text-slate-700">
                            Unit testing is a method of testing the smallest
                            pieces of code, typically individual functions, in
                            isolation. These small pieces of code are called
                            units. A unit can be a line of code, a class, or a
                            method, for example. This involves verifying the
                            output of a function or component for a given input.
                            This testing methodology is done during the
                            development process by the software developers and
                            sometimes QA staff. For React components, this could
                            mean checking that the component renders correctly
                            for the specified props.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
