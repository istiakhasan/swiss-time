import React from 'react';
import Helmet from 'react-helmet';

const Blog = () => {
return (
<main>
<Helmet>
        <title>blogs</title>
      </Helmet>
    <section className='md:w-8/12 w-11/12 mx-auto '>
        <div className='py-8 px-4 border-2 border-gray-600 rounded-lg my-4'>
            <h1 className='text-2xl '>Question:Difference between javascript and nodejs</h1>
            <p className='mt-3 text-md text-gray-700'><span className='font-bold'>Ans:</span> JavaScript can only run in
                the browsers and used on the client-side.It capable and play with the DOM.JavaScript can manipulate DOM
                .JavaScript is mainly used to create front end web applications .JavaScript follows the standard of
                JavaScript .It is a high-level language.On the other hand nodejs run outside the browser and used on the
                server-side .Node does not have the capability to add html .NOdejs gives us the ability to execute
                javaScript outside the browser.Node is used on the back end development that is server-side
                development.NOdejs is written in C++ while using the v8 engine.Node js is a javaScript runtime for
                building server side</p>
        </div>
        <div className='py-8 px-4 border-2 border-gray-600 rounded-lg my-4'>
            <h1 className='text-2xl '>Question:Differences between sql and nosql databases?</h1>
            <span className='font-bold'>Ans:</span>
            <div className='mt-3 text-md text-gray-700 md:flex justify-between'>

                <div>
                    <span className='block font-semibold'> SQL Databases:- </span>
                    <span className='block'>1.SQL database is table-based database</span>
                    <span className='block'>2.sql is a relational database management system </span>
                    <span className='block'>3.sql database suited form complex queries</span>
                    <span className='block'>4.sql architecture is a rlational architecture</span>
                    <span className='block'>5.SQL does not suport hierarchical storage of data</span>
                    <span className='block'>6.Sql support cross platform</span>
                    <span className='block'>7.Spl supports predefined schemas</span>
                    <span className='block'>8.SQL enables ACID properties</span>
                    <span className='block'>9.MySQL ,SQL server are sql database </span>
                </div>
                <div>
                    <span className='block font-semibold'> NoSql Databases:-</span>
                    <span className='block'>1.Supports document oriented, graph databases, key value pair-based.</span>
                    <span className='block'>2.NOn-relational database system</span>
                    <span className='block'>3.It is not good for comples queries</span>
                    <span className='block'> 4.NonSql is non relational architecture</span>
                    <span className='block'>5.NoSQL is best for hierarchical storage of data</span>
                    <span className='block'>6.High performance and easy to use </span>
                    <span className='block'> 7.NoSQL support dynamic schemas</span>
                    <span className='block'>8.NonSQL follows CPA properties</span>
                    <span className='block'> 9.Mongodb , mongoes, Redis are NonSQL database</span>
                </div>

            </div>
        </div>
        <div className='py-8 px-4 border-2 border-gray-600 rounded-lg my-4'>
            <h1 className='text-2xl '>Question: What is the purpose of jwt and how does it works?</h1>
            <p className='mt-3 text-md text-gray-700'><span className='font-bold'>Ans:</span>
                <span className='block font-semibold'>Purpose of JWT:</span>
                <span className='block'> JWT used to purpose to share information between two parties securely — a
                    client and a server.It's an encoded JSON containing a set of claims and a signature. It's usually
                    used in the context of other authentication mechanisms like OAuth, OpenID to share user-related
                    information. It's also a popular way to authenticate/authorize users in a microservice
                    architecture.</span>
                <span className='block font-semibold'>How does it work:</span>
                <span>
                   When the client app sends a sign in request. In other words, here is where  username/password
                     will travel Once verified, the API will create a JSON Web Token (more on this in a bit) and sign it using a
                    secret key .Then the API will return that token back to the client application
                    Finally, the client app will receive the token, verify it on its own side to make sure it's
                    authentic and then proceed to use it on every subsequent request to authenticate the user without
                    having to send their credentials anymore
                </span>
            </p>
        </div>

    </section>
</main>
);
};

export default Blog;