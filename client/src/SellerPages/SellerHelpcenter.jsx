import React, { useState } from 'react';

const SellerHelpCenter = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      title: 'Ordering Books',
      content: 'Learn how to place an order for books, including payment and shipping options.'
    },
    {
      title: 'Book Availability',
      content: 'Check if the book you want is in stock or available for pre-order.'
    },
    {
      title: 'Returns and Refunds',
      content: 'Find out the process for returning books and requesting a refund.'
    },
    {
      title: 'Account Management',
      content: 'Learn how to create, manage, and update your bookstore account.'
    },
    {
      title: 'Shipping Information',
      content: 'Get details on shipping methods, costs, and delivery times.'
    }
  ];

  const handleTopicClick = (index) => {
    setSelectedTopic(index === selectedTopic ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Help Center</h2>
      <p className="mb-4">Here you can find answers to frequently asked questions about our bookstore.</p>

      <div className="list-group">
        {topics.map((topic, index) => (
          <div key={index} className="list-group-item">
            <h5
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: 'pointer' }}
              onClick={() => handleTopicClick(index)}
            >
              {topic.title}
              <span>{selectedTopic === index ? '-' : '+'}</span>
            </h5>
            {selectedTopic === index && <p className="mt-2">{topic.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerHelpCenter;
