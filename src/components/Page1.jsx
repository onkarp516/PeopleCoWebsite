import React, { useState } from 'react';
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import img1 from "../Assets/Avatar1.png";
import edit from "../Assets/Edit.png";
import del from "../Assets/Delete.png";
import ArrowRightup from "../Assets/ArrowRightup.png";
import Refresh from "../Assets/Refresh.png";



const Page1 = () => {
    const [dummyData, setDummyData] = useState([
        { id: 1, name: 'Olivia Rhye', subtitle: '@olivia', status: 'Active', role: 'Product Designer', emailaddress: 'olivia@untitledui.com' },
        { id: 2, name: 'Phoenix Baker', subtitle: '@phoenix', status: 'Active', role: 'Product Manager', emailaddress: 'phoenix@untitledui.com' },
        { id: 3, name: 'Lana Steiner', subtitle: '@lana', status: 'Active', role: 'Frontend Developer', emailaddress: 'lana@untitledui.com' },
        { id: 4, name: 'Demi Wilkinson', subtitle: '@demi', status: 'Active', role: 'Backend Developer', emailaddress: 'demi@untitledui.com' },
        { id: 5, name: 'Candice Wu', subtitle: '@candice', status: 'Active', role: 'Full Stack Developer', emailaddress: 'candice@untitledui.com' },
        { id: 6, name: 'Natali Craig', subtitle: '@natali', status: 'Active', role: 'UX Designer', emailaddress: 'natali@untitledui.com' },
        { id: 7, name: 'Drew Cano', subtitle: '@drew', status: 'Active', role: 'UX Copywriter', emailaddress: 'drew@untitledui.com' },
        { id: 8, name: 'Orlando Diggs', subtitle: '@orlando', status: 'Active', role: 'UI Designer', emailaddress: 'orlando@untitledui.com' },
        { id: 9, name: 'Andi Lane', subtitle: '@andi', status: 'Active', role: 'Product Manager', emailaddress: 'andi@untitledui.com' },
        { id: 10, name: 'Kate Morrison', subtitle: '@kate', status: 'Active', role: 'QA Engineer', emailaddress: 'kate@untitledui.com' },
    ]);
    // const [showPopup, setShowPopup] = useState(false);
    // const [recordToDelete, setRecordToDelete] = useState(null);

    // const handleDeleteClick = (recordId) => {
    //     setRecordToDelete(recordId);
    //     setShowPopup(true);
    // };

    // const handleConfirmDelete = () => {
    //     setDummyData(dummyData.filter(record => record.id !== recordToDelete));
    //     setShowPopup(false);
    // };

    // const handleCancelDelete = () => {
    //     setShowPopup(false);
    // };
    const [deletePopupOpen, setDeletePopupOpen] = useState(false);
    const [editPopupOpen, setEditPopupOpen] = useState(false);
    const [thirdPopupOpen, setThirdPopupOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const handleEdit = (record) => {
        setSelectedRecord(record);
        setEditPopupOpen(true);
    };

    const handleDelete = (record) => {
        setSelectedRecord(record);
        setDeletePopupOpen(true);
    };

    const handleThirdPopup = (record) => {
        setSelectedRecord(record);
        setThirdPopupOpen(true);
    };

    const closePopup = () => {
        setDeletePopupOpen(false);
        setEditPopupOpen(false);
        setThirdPopupOpen(false);
        setSelectedRecord(null);
    };

    const handleDeleteConfirm = () => {
        // Handle delete logic here
        setDummyData(dummyData.filter(record => record.id !== selectedRecord));
        closePopup();
    };

    return (
        <div className="p-0" >
            <div
                className="bg-white shadow-lg rounded-lg p-6"
                style={{ width: '1675px', height: '819px', borderRadius: '12px', border: '1px solid #e0e0e0' }}
            >
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Team Members</h2>
                        <button
                            className="bg-[#E9D7FE] text-[#6941C6] rounded-full px-3 py-1"
                            style={{
                                backgroundColor: '#E9D7FE', // Slightly lighter shade of #6941C6
                                fontFamily: 'Inter, sans-serif', // Keep consistent font family if needed
                                fontWeight: 500, // Optional: Keep font bold
                                fontSize: '14px', // Optional: Font size can be adjusted if needed
                                borderRadius: '50px', // Keeps the rounded button shape
                                lineHeight: "20px",
                            }}
                        >
                            100 users
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Updated search input with icon on the right side */}
                        <div
                            className="flex items-center px-3 py-1 bg-white"  // Changed background color to white
                            style={{
                                borderTop: '1px solid #CBD5E1',   // Top border in black
                                borderLeft: '1px solid #CBD5E1',  // Left border in black
                                borderRight: '1px solid #CBD5E1', // Right border in black
                                borderBottom: '1px solid #000000' // Bottom border in #6941C6
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white border-none outline-none" // Changed background color to white
                            />
                            <FaSearch className="text-gray-400 ml-2" />
                        </div>

                        {/* Updated filter icon styling */}
                        <div className="flex items-center justify-center p-1 bg-white">
                            <FaFilter className="text-black" />
                        </div>
                        <button
                            className="bg-[#6941C6] text-white px-4 py-2"
                            style={{
                                borderRadius: '5px',
                                fontFamily: 'Inter, sans-serif', // Font family set to Inter
                                fontWeight: 500, // Font weight set to 700
                                fontSize: '14px', // Font size set to 14px
                                lineHeight: '16.8px', // Line height set to 16.8px
                                letterSpacing: '0.08em', // Letter spacing set to 8%
                            }}
                        >
                            <span style={{ fontSize: "25px", fontWeight: "500", verticalAlign: 'sub' }}>+</span> ADD MEMBER
                        </button>

                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
                        <thead>
                            <tr className="border-b-2">
                                <th className="border-b p-2 text-left">Name</th>
                                <th className="border-b p-2 text-left">Status</th>
                                <th className="border-b p-2 text-left">Role</th>
                                <th className="border-b p-2 text-left">Email Address</th>
                                <th className="border-b p-2 text-left">Teams</th>
                                <th className="border-b p-2 text-left"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData.map((item) => (
                                <tr key={item.id} className="border-b" style={{ borderSpacing: 0, marginBottom: "20%" }}>
                                    {/* First column with image and text */}
                                    <td className="border-b p-2">
                                        <div className="flex items-center">
                                            <img
                                                src={img1}
                                                alt="Profile"
                                                className="rounded-full w-12 h-12 mr-4"
                                                onClick={() => handleThirdPopup(item)}
                                            />
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-gray-500">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Second column with button */}
                                    <td className="border-b p-2">
                                        <button className="flex items-center bg-white border border-gray-300 rounded px-3 py-1">
                                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            <span className="text-gray-700">{item.status}</span>
                                        </button>
                                    </td>

                                    {/* Additional columns */}
                                    <td className="border-b p-2">{item.role}</td>
                                    <td className="border-b p-2">{item.emailaddress}</td>
                                    <td className="border-b p-2"><button
                                        className="bg-[#E9D7FE] text-[#6941C6] rounded-full px-3 py-1"
                                        style={{
                                            backgroundColor: '#E9D7FE', // Slightly lighter shade of #6941C6
                                            fontFamily: 'Inter, sans-serif', // Keep consistent font family if needed
                                            fontWeight: 500, // Optional: Keep font bold
                                            fontSize: '14px', // Optional: Font size can be adjusted if needed
                                            borderRadius: '50px', // Keeps the rounded button shape
                                            lineHeight: "20px",
                                        }}
                                    >
                                        Design
                                    </button>
                                        <button
                                            className="bg-[#B2DDFF] text-[#175CD3] rounded-full px-3 py-1"
                                            style={{
                                                backgroundColor: '#B2DDFF', // Slightly lighter shade of #6941C6
                                                fontFamily: 'Inter, sans-serif', // Keep consistent font family if needed
                                                fontWeight: 500, // Optional: Keep font bold
                                                fontSize: '14px', // Optional: Font size can be adjusted if needed
                                                borderRadius: '50px', // Keeps the rounded button shape
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Product
                                        </button>
                                        <button
                                            className="bg-[#C7D7FE] text-[#3538CD] rounded-full px-3 py-1"
                                            style={{
                                                backgroundColor: '#C7D7FE', // Slightly lighter shade of #6941C6
                                                fontFamily: 'Inter, sans-serif', // Keep consistent font family if needed
                                                fontWeight: 500, // Optional: Keep font bold
                                                fontSize: '14px', // Optional: Font size can be adjusted if needed
                                                borderRadius: '50px', // Keeps the rounded button shape
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Marketing
                                        </button>
                                        <button
                                            className="bg-[E4E7EC] text-[#000000] rounded-full px-3 py-1"
                                            style={{
                                                border: '1px solid black',
                                                backgroundColor: 'E4E7EC', // Slightly lighter shade of #6941C6
                                                fontFamily: 'Inter, sans-serif', // Keep consistent font family if needed
                                                fontWeight: 500, // Optional: Keep font bold
                                                fontSize: '14px', // Optional: Font size can be adjusted if needed
                                                borderRadius: '50px', // Keeps the rounded button shape
                                                lineHeight: "20px",
                                            }}
                                        >
                                            +4
                                        </button></td>

                                    <td className="border-b p-2">
                                        <div className="flex space-x-2">
                                            <img
                                                src={del}
                                                alt="Delete"
                                                className="w-10 h-10 cursor-pointer" // Adjust size as needed
                                                onClick={() => handleDelete(item.id)}
                                            />
                                            <img
                                                src={edit}
                                                alt="Edit"
                                                className="w-10 h-10 cursor-pointer" // Adjust size as needed
                                                onClick={() => handleEdit(item)}
                                            />

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="flex justify-between items-center mt-4" style={{ marginTop: "4px" }}>
                    <button className="flex items-center text-black bg-white px-4 py-2 rounded" style={{ border: "1px solid #D0D5DD", height: "40px" }}>
                        <FaArrowLeft className="mr-2" /> Previous
                    </button>
                    <div className="flex space-x-2 text-center">
                        {/* Pagination numbers */}
                        {Array.from({ length: 10 }, (_, index) => {
                            // Render numbers 1, 2, 3, then '...', then numbers 8, 9, 10
                            if (index === 3) {
                                return <span key={index} className="text-gray-600">...</span>;
                            } else if (index >= 3 && index < 7) {
                                return null;  // Skip rendering numbers 4, 5, 6, 7
                            } else {
                                return (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 ${index === 0 ? 'text-black' : 'text-gray-600'}`}
                                    >
                                        {index + 1}
                                    </span>
                                );
                            }
                        })}
                    </div>


                    <button className="flex items-center text-black bg-white px-4 py-2 rounded" style={{ border: "1px solid #D0D5DD" }}>
                        Next <FaArrowRight className="ml-2" />
                    </button>
                </div>

            </div>
            {thirdPopupOpen && (
                <div
                    className="absolute top-0 right-0 h-full bg-white rounded-lg shadow-lg p-6"
                    style={{
                        height: "86%",
                        width: "1195px",
                        marginTop: "103px",
                        marginRight: "41px",
                    }}
                >
                    <div className="flex justify-between items-center border-b pb-4" style={{ backgroundColor: "#2A5B7E" }}>
                        <div className="flex items-center">
                            <img
                                src={selectedRecord ? img1 : img1}
                                alt="Profile"
                                className="rounded-full w-12 h-12 mr-4"
                                style={{
                                    marginTop: "15px",
                                    height: "100px",
                                    width: "100px",
                                    marginLeft: "25px",
                                }}
                            />
                            <div>
                                <h2 className="text-white font-bold" style={{
                                    marginTop: "10px",
                                }}>{selectedRecord?.name}</h2>
                                <div className="flex space-x-4 text-white">
                                    <span style={{
                                        marginTop: "10px",
                                        fontSize: "14px",
                                    }}>
                                        {selectedRecord?.emailaddress} | {selectedRecord?.role}
                                    </span>
                                </div>
                                <div className="flex space-x-4 text-white">
                                    <span style={{
                                        fontSize: "14px",
                                    }}>User ID | Role</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-white" onClick={closePopup} style={{
                            marginBottom: "80px",
                            marginRight: "15px",
                            fontSize: "25px",
                        }}>
                            ×
                        </button>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-bold" style={{
                            backgroundColor: "#EFF5FA", height: "42px",
                            alignContent: "center",
                        }}>
                            <span style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "600", fontFamily: 'Inter', }}></span>Personal Information
                        </h3>
                        <table className="w-full border-t border-b border-gray-300">
                            <tbody>
                                {/* {[...Array(6)].map((_, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-2 text-gray-700">Data {index + 1}</td>
                                        <td className="p-2 text-gray-700">Value {index + 1}</td>
                                    </tr>
                                ))} */}
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>Date of Birth</td>
                                    <td className="p-2 text-[#64748B]">29-04-2005</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>Gender</td>
                                    <td className="p-2 text-[#64748B]">Female</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>Nationality</td>
                                    <td className="p-2 text-[#64748B]">Canadian</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>Contact no.</td>
                                    <td className="p-2 text-[#64748B]">1234567890</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>E-mail Address</td>
                                    <td className="p-2 text-[#64748B]">Oliviadesign@gmail.com</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2 text-black" style={{ fontWeight: "bold" }}>Work email Address</td>
                                    <td className="p-2 text-[#64748B]">Oliviadesign@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-4">
                            <h3 className="text-lg font-bold" style={{
                                backgroundColor: "#EFF5FA", height: "42px",
                                alignContent: "center",
                            }}>
                                <span style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "600", fontFamily: 'Inter', }}></span>Research & Publication Information
                            </h3>
                            <h4 className="text-md text-black" style={{
                                fontSize: "16px",
                                fontWeight: "600"
                            }} >AI and User Experience: The Future of Design</h4>
                            <p className="text-black mt-2" style={{
                                fontSize: "14px",
                            }}>
                                Published in the Journal of Modern Design. 2022
                            </p>
                            <p className="text-black mt-2" style={{
                                fontSize: "14px",
                            }}>
                                Al, loT based real time condition monitoring of Electrical Machines using Python<br /> language Abstract: Maintaining induction motors in good working order before they<br /> fail benefits small <span style={{ color: "#F15A22", fontWeight: "400" }}>See More...</span>
                            </p>
                            <a href="#" className="text-[#F15A22] font-bold mt-4 inline-block flex items-center">
                                <img src={ArrowRightup} alt="Arrow Icon" className="mr-2" />
                                SEE PUBLICATION
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {deletePopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6" style={{ maxWidth: '600px', width: '100%' }}>
                        <div className="flex justify-between items-center border-b pb-4">
                            <h2 className="text-xl font-bold">Delete Member Details</h2>
                            <button className="text-gray-500" onClick={closePopup}>×</button>
                        </div>
                        <p className="text-gray-700 mt-4">Are you sure you want to delete this Member details? This action cannot be undone.</p>
                        <div className="flex justify-end space-x-2 mt-4">
                            {/* <button className="bg-white text-black border border-gray-300 rounded px-4 py-2" onClick={closePopup}>Cancel</button> */}
                            <button className="bg-[#6941C6] text-white border border-gray-300 rounded px-4 py-2" onClick={handleDeleteConfirm}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
            {editPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '600px' }}>
                        <div className="flex justify-between items-center border-b pb-4">
                            <h2 className="text-xl font-bold">Edit Profile</h2>
                            {/* <button className="text-gray-500" onClick={closePopup}>×</button> */}
                        </div>
                        <div className="flex flex-col items-center mt-4">
                            <img src={selectedRecord ? img1 : img1} alt="Profile" className="rounded-full w-24 h-24 mb-4" />
                            <div className="flex space-x-2 mb-4">
                                <button className="bg-white text-black border border-gray-300 rounded px-2 py-0 inline-block flex items-center" style={{ height: "40px" }}>  <img src={Refresh} className="mr-2" />
                                    Change Password</button>
                                <button className="bg-white text-black border border-gray-300 rounded px-2 py-2 inline-block flex items-center" style={{ height: "40px" }}>  <img src={del} className="mr-2" />Remove Profile</button>
                            </div>
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700">Name</label>
                                        <input type="text" className="w-full border rounded px-2 py-1 mt-1" defaultValue={selectedRecord ? selectedRecord.name : ''} />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Email</label>
                                        <input type="text" className="w-full border rounded px-2 py-1 mt-1" defaultValue={selectedRecord ? selectedRecord.emailaddress : ''} />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Role</label>
                                        <input type="text" className="w-full border rounded px-2 py-1 mt-1" defaultValue={selectedRecord ? selectedRecord.role : ''} />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Status</label>
                                        <select className="w-full border rounded px-2 py-1 mt-1">
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Teams</label>
                                        <select className="w-full border rounded px-2 py-1 mt-1">
                                            <option>Design</option>
                                            <option>Product</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button className="bg-white text-black border border-gray-300 rounded px-4 py-2" onClick={closePopup}>Cancel</button>
                                <button className="bg-gray-500 text-white border border-gray-300 rounded px-4 py-2 cursor-not-allowed" disabled>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page1;
