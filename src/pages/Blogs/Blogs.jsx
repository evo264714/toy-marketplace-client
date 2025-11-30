import useTitle from "../../hooks/useTitle";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaDatabase,
  FaServer,
  FaSearch,
} from "react-icons/fa";

const Blogs = () => {
  useTitle("Blogs");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const blogQuestions = [
    {
      id: 1,
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      icon: FaCode,
      answer: {
        sections: [
          {
            title: "Access Token",
            content:
              "An access token is a credential issued by an authentication server that allows a client to access protected resources. It's typically short-lived (minutes to hours) and contains user permissions and scope information.",
          },
          {
            title: "Refresh Token",
            content:
              "A refresh token is a long-lived credential used to obtain new access tokens without requiring user re-authentication. It enables seamless user experiences by automatically refreshing access in the background.",
          },
          {
            title: "How They Work",
            content:
              "1. User logs in and receives both tokens\n2. Access token is used for API requests\n3. When access token expires, refresh token is used to get a new one\n4. Refresh token can also be revoked for security",
          },
          {
            title: "Storage Recommendations",
            content:
              "• Access tokens: In memory or short-lived HTTP-only cookies\n• Refresh tokens: Secure HTTP-only cookies or server-side storage\n• Avoid localStorage due to XSS vulnerabilities\n• Consider using secure, signed cookies with proper attributes",
          },
        ],
      },
    },
    {
      id: 2,
      question: "Compare SQL and NoSQL databases?",
      icon: FaDatabase,
      answer: {
        sections: [
          {
            title: "Data Model",
            content:
              "SQL: Structured tables with predefined schemas\nNoSQL: Flexible models (key-value, document, graph, columnar)",
          },
          {
            title: "Scalability",
            content:
              "SQL: Vertical scaling (hardware upgrades)\nNoSQL: Horizontal scaling (distributed clusters)",
          },
          {
            title: "Schema Flexibility",
            content:
              "SQL: Rigid schema, changes require migrations\nNoSQL: Dynamic schema, adapts to changing data",
          },
          {
            title: "Query Language",
            content:
              "SQL: Standardized SQL with complex joins\nNoSQL: Database-specific APIs and query languages",
          },
          {
            title: "ACID Compliance",
            content:
              "SQL: Full ACID compliance\nNoSQL: Often eventual consistency for performance",
          },
          {
            title: "Use Cases",
            content:
              "SQL: Complex transactions, structured data (banking, e-commerce)\nNoSQL: Big data, real-time apps, unstructured data (social media, IoT)",
          },
        ],
      },
    },
    {
      id: 3,
      question: "What is Express.js? What is Nest.js?",
      icon: FaServer,
      answer: {
        sections: [
          {
            title: "Express.js",
            content:
              "A minimal, unopinionated web framework for Node.js. Known for its simplicity, flexibility, and extensive middleware ecosystem. Perfect for building RESTful APIs and web applications with minimal boilerplate.",
          },
          {
            title: "Nest.js",
            content:
              "A progressive TypeScript framework built on top of Express.js. Uses MVC-like architecture with dependency injection. Emphasizes modularity, testability, and enterprise-grade application structure.",
          },
          {
            title: "Key Differences",
            content:
              "• Express: Minimalist, flexible, less opinionated\n• Nest: Structured, TypeScript-first, built-in patterns\n• Express: Faster for simple APIs\n• Nest: Better for complex, maintainable applications",
          },
        ],
      },
    },
    {
      id: 4,
      question: "What is MongoDB aggregate and how does it work?",
      icon: FaSearch,
      answer: {
        sections: [
          {
            title: "Overview",
            content:
              "MongoDB's aggregation framework processes data through a pipeline of operations, transforming and analyzing documents in collections.",
          },
          {
            title: "Pipeline Stages",
            content:
              "• $match: Filter documents\n• $group: Group and aggregate data\n• $project: Reshape documents\n• $sort: Order results\n• $lookup: Join collections\n• $unwind: Deconstruct arrays",
          },
          {
            title: "How It Works",
            content:
              "1. Documents flow through pipeline stages sequentially\n2. Each stage transforms the input\n3. Final output contains processed results\n4. Uses expression operators for computations",
          },
          {
            title: "Common Use Cases",
            content:
              "• Data analysis and reporting\n• Complex data transformations\n• Multi-collection joins\n• Real-time analytics\n• Data cleaning and normalization",
          },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Developer
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
              Knowledge Base
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore in-depth explanations of key web development concepts,
            authentication patterns, database technologies, and modern
            frameworks.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search topics, technologies, concepts..."
              className="w-full pl-10 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-200"
            />
          </div>
        </div>

        {/* Blog Questions */}
        <div className="space-y-6">
          {blogQuestions.map((blog, index) => {
            const IconComponent = blog.icon;
            const isOpen = openQuestion === index;

            return (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {blog.question}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to {isOpen ? "collapse" : "expand"} answer
                      </p>
                    </div>
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {isOpen ? (
                      <FaChevronUp className="text-blue-500 text-lg" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-lg" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 border-t border-gray-100">
                    <div className="space-y-6">
                      {blog.answer.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {section.title}
                          </h4>
                          <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-200">
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                        <span className="text-sm font-medium">Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Want to Learn More?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive documentation and join our developer
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                View Documentation
              </button>
              <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Tech Topics", value: "50+" },
            { label: "Code Examples", value: "100+" },
            { label: "Active Readers", value: "10K+" },
            { label: "Updated", value: "Weekly" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
