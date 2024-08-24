import React from 'react';

const Dashboard = () => {
    return (
        <div
            className="bg-white shadow-md border border-gray-300"
            style={{
                width: '1675px',    // Fixed width
                height: '800px',    // Fixed height
                borderRadius: '12px', // Border radius
                padding: '24px'     // Padding for internal spacing
            }}
        >
            <h2
                className="font-semibold"
                style={{
                    fontFamily: 'Inter, sans-serif', // Font family
                    fontWeight: 600, // Weight
                    fontSize: '36px', // Size
                    lineHeight: '28px', // Line height
                    marginBottom: '18px' // Paragraph spacing
                }}
            >
                Welcome, Jane Doe
            </h2>
            {/* Add your dashboard content here */}
        </div>
    );
};

export default Dashboard;
