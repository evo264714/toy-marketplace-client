

const Blogs = () => {
    return (
        <div className="w-10/12 mx-auto my-4">
            <div className="border-solid border-2 border-indigo-600 rounded-xl my-4 p-10">
                <h2 className="text-3xl font-bold mb-2">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <div className="font-semibold">
                    <p><span className="font-extrabold">Answer:</span> Access Token:
                        An access token is a credential that is issued by an authentication server and used by a client (such as a web or mobile application) to access protected resources on a server. It represents the authorization granted to the client and contains information like user permissions, scope, and expiry time. Access tokens are typically short-lived and have limited access rights.</p>
                    <p>
                        Refresh Token:
                        A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to re-authenticate. It is typically issued alongside an access token and has a longer expiration time. The purpose of a refresh token is to enable a seamless user experience by automatically refreshing access tokens in the background, ensuring continuous access to protected resources.
                    </p>
                    <p>Storage of Tokens on the Client-side:
                        Both access tokens and refresh tokens should be securely stored on the client-side to prevent unauthorized access. Here are some common practices for storing tokens:

                        Access tokens are typically stored in memory or a client-side storage mechanism like browser cookies or local storage. However, its important to note that storing sensitive information like access tokens in browser cookies or local storage poses a security risk and can make the tokens vulnerable to cross-site scripting (XSS) attacks.
                        Refresh tokens, on the other hand, should be stored in a more secure manner, such as an HTTP-only cookie or in a secure server-side storage. By using HTTP-only cookies, the token is only accessible by the server and cannot be accessed or manipulated by client-side scripts, reducing the risk of XSS attacks.</p>
                </div>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-xl my-4 p-10">
                <h2 className="text-3xl font-bold mb-2">2. Compare SQL and NoSQL databases?</h2>
                <div className="font-semibold">
                    <p>
                        <span className="font-extrabold">Answer: </span>
                        Data Model:
                        SQL (Relational Databases): SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using keys (primary keys and foreign keys).

                        NoSQL (Non-Relational Databases): NoSQL databases use various data models, including key-value pairs, document-oriented, columnar, and graph-based structures. They offer more flexibility in data representation and allow for schema-less designs, meaning each record can have a different structure.
                    </p>
                    <br />
                    <p>Scalability:
                        SQL: SQL databases traditionally scale vertically by adding more powerful hardware resources. Vertical scaling has limitations in terms of the hardwares capacity.

                        NoSQL: NoSQL databases are designed to scale horizontally by distributing data across multiple servers or clusters. This allows for seamless scaling and handling of large amounts of data and high traffic loads.</p>


                    <p>
                        Schema and Flexibility:
                        SQL: SQL databases have a predefined schema that enforces a rigid structure for the data. Changes to the schema can be complex and require careful planning.

                        NoSQL: NoSQL databases offer more flexibility as they do not enforce a fixed schema. They allow for dynamic and evolving data structures, making it easier to adapt to changing requirements.
                    </p>
                    <br />
                    <p> Query Language:
                        SQL: SQL databases use Structured Query Language (SQL) as a standardized language for defining and manipulating data. SQL provides powerful querying capabilities and supports complex joins and aggregations.

                        NoSQL: NoSQL databases may have their own query languages or APIs specific to the chosen data model. The query languages vary across different NoSQL databases and may not have the same level of expressive querying features as SQL.</p>
                    <br />

                    <p>
                        ACID Compliance:
                        SQL: SQL databases are generally ACID-compliant (Atomicity, Consistency, Isolation, Durability). ACID properties ensure data integrity and guarantee that database transactions are reliable and consistent.

                        NoSQL: NoSQL databases often sacrifice strict ACID compliance in favor of performance and scalability. Some NoSQL databases provide eventual consistency or relaxed transactional guarantees, which can be acceptable for certain use cases.
                    </p>
                    <br />
                    <p>
                        Use Cases:
                        SQL: SQL databases are well-suited for applications that require complex queries, transactions, and structured data with well-defined relationships. They are commonly used in applications like e-commerce, banking, and enterprise systems.

                        NoSQL: NoSQL databases excel in handling large volumes of unstructured or semi-structured data, high-speed data ingestion, and real-time applications. They are commonly used in applications such as content management systems, social networks, and IoT platforms.
                    </p>
                    <br />
                </div>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-xl my-4 p-10">
                <h2 className="text-3xl font-bold mb-2">3. What is express js? What is Nest JS </h2>
                <div className="font-semibold">
                    <p>
                        <span className="font-extrabold">Answer: </span>
                        Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js is known for its simplicity, robustness, and extensive middleware ecosystem. It allows developers to handle HTTP requests, define routes, and manage server-side logic with ease.
                    </p>
                    <p>
                        Nest.js, on the other hand, is a TypeScript-based progressive framework for building efficient and scalable server-side applications. It is built on top of Express.js and takes advantage of TypeScripts static typing and object-oriented programming concepts. Nest.js follows the architectural pattern known as the MVC-like (Model-View-Controller) pattern and emphasizes modularity, extensibility, and testability.
                    </p>
                </div>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-xl my-4 p-10">
                <h2 className="text-3xl font-bold mb-2">4. What is MongoDB aggregate and how does it work</h2>
                <div className="font-semibold">
                    <span className="font-extrabold">Answer:</span>
                    <p>In MongoDB, the aggregate framework is a powerful tool for performing advanced data aggregation operations. It allows you to process and transform data in various ways, including grouping, filtering, sorting, joining, and computing aggregations on the data stored in MongoDB collections. The aggregate framework operates on a collection of documents and returns computed results based on the specified operations.
                    </p>

                    <p> Heres an overview of how the MongoDB aggregate framework works:</p>

                    <p>
                        Pipeline Stages:
                        The aggregate operation in MongoDB consists of a pipeline, which is an ordered sequence of one or more pipeline stages. Each stage performs a specific operation on the input documents and passes the modified documents to the next stage in the pipeline. Some common pipeline stages include:
                        $match: Filters the documents in the input based on specified conditions.
                        $group: Groups documents by specified fields and calculates aggregated values for each group.
                        $project: Shapes the documents in the output by specifying the fields to include or exclude and applying transformations.
                        $sort: Sorts the documents based on specified criteria.
                        $lookup: Performs a left outer join with another collection to combine data from multiple collections.
                    </p>

                    <p> Document Flow:
                        The aggregate pipeline processes documents in a sequential manner, passing each document through the stages of the pipeline. At each stage, the input documents are transformed according to the operation performed by that stage, resulting in modified documents.</p>

                    <p> Expression Operators:
                        The aggregate framework provides a wide range of expression operators that allow you to perform complex computations and transformations on the data within the pipeline stages. These operators include mathematical operations, logical operations, conditional expressions, string manipulation, array manipulation, and more.</p>

                    <p> Output:
                        The aggregate framework returns the computed results as a cursor, which can be iterated over to access the aggregated data. The output can include grouped data, computed values, transformed documents, or a combination of these, depending on the operations performed in the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;