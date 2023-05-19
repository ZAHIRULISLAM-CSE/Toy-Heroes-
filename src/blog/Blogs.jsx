import React from "react";
import useTitle from "../customHooks/useTitle";

const Blogs = () => {

    useTitle("Toy Heros | Blogs")
  return (
    <div className="w-[85%] mx-auto mt-12">
      <div className="bg-gray-200 mb-5 p-4">
        <h1 className="text-2xl font-bold  mb-4">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="text-lg font-semibold">
          <br />
          Access Token:An access token is a secured credential token ,through
          this token we can protect user database resource.Through this we can
          protect our client api requests to authenticate the specific client
          and give authorization access to specific resources.
          <br />
          <br />
          Refresh Token:A refresh token is a long times credential that is used
          to obtain a new access token without requiring the user to
          reauthenticate.When Access token expires then refresh token can be
          used to request for a new access token,we can protect our resource
          with jwt token.
          <br />
          <br />
          Where to store:We can store these token in http only browser cookies
          or local storage.But,http only cookies is more secure than the local
          storage.
        </p>
      </div>
      <div className="bg-gray-300 mb-5  p-4">
        <h1 className="text-2xl font-bold  mb-4">
          Comparision between SQL and NoSQL databases?
        </h1>
        <p className="text-xl font-semibold">
          <br />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sql
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No Sql
                  </th>
                </tr>
              </thead>
              <tbody>
                    <tr
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">Structured Query Language</td>
                      <td className="px-6 py-4">Not only SQL</td>
                    </tr>
                    <tr
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">SQL databases are based on the relational data model</td>
                      <td className="px-6 py-4"> NoSQL databases employ various data models such as key-value, document, column</td>
                    </tr>
                    <tr
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">SQL databases scales vertically</td>
                      <td className="px-6 py-4"> NoSQL databases  scales horizontal</td>
                    </tr>
                    <tr
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">SQL databases are well-suited for applications that require complex querying, transactions, and strict data consistency</td>
                      <td className="px-6 py-4">NoSQL databases excel in scenarios with large-scale, rapidly changing, and unstructured data</td>
                    </tr>
              </tbody>
            </table>
          </div>
        </p>
      </div>
      <div className="bg-gray-200 mb-5  p-4">
        <h1 className="text-2xl font-bold  mb-4">
        What is express js? What is Nest JS?
        </h1>
        <p className="text-lg font-semibold">
          <br />
          Express.js: It  is a web application framework built with
          Node.js that gives us many tools and utilities for building web
          applications and APIs. Express.js makes it easier to handle HTTP
          requests and responses, provides a routing mechanism.We can communicate to database with get,put,delete,update method through express.
          <br />
          <br />
          <span>Nest Js:</span>Next.js is a popular open-source Node Js framework. Through Nest js we can make efficient, scalable, and enterprise-grade backend applications using Node. js.
          <br />
          <br />
          Some Features of nest Js: 
          <br />
          1.Modular architecture <br />
          2.Dependency Injection <br />
          3.Decorators and Metadata<br />
          4.Controllers and Routing<br />
        </p>
        
      </div>
      <div className="bg-gray-300 mb-5  p-4">
        <h1 className="text-2xl font-bold  mb-4">
        What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-lg font-semibold">
          <br />
          MongoDb Aggregate:In MongoDB, the aggregate function is a powerful feature that allows us to perform advanced data aggregation operations on collections.We can transform data in many ways such as  grouping, filtering, sorting, joining and many more.
          <br />
          <br />
          Workings: <br />
          1.$match:It allows us to select documents that meet certain conditions.
          <br />
          2.$group:we can use it to calculate counts, sums, averages, and other aggregate functions.
          <br />
          3.$sort:We can sort data in ascending or descending order.
          <br />
          4.$limit and $skip:They are useful for pagination or restricting the number of results.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
