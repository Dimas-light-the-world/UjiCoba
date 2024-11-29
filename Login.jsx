import React from 'react';
const LoginPage = ({ setPage }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <button type="button" className="w-full bg-blue-500 text-white p-2 rounded" onClick={() => setPage('timeline')}>Login</button>
            </form>
            <p className="mt-4 text-gray-600">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setPage('register')}>Register</span></p>
        </div>
    );
};
export default LoginPage;