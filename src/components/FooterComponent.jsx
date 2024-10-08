import React from 'react';

const FooterComponent = () => { 
    
    return (
        <footer className="bg-blue-100 py-6 mt-10">
            <div className="container mx-auto text-center text-gray-400">
                <p className="text-sm">&copy; {new Date().getFullYear()} Employee Management System. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors duration-300">Contact Us</a>
                </div>
            </div>
        </footer>
    );
    
};

export default FooterComponent;