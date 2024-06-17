import React, { useState } from 'react';
import { v4 } from 'uuid';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const createRoomId = (e) => {
        e.preventDefault();
        const id = v4();
        setRoomId(id);
        toast.success('Room created successfully');
    };

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const Join = (e) => {
        e.preventDefault();
        if(!roomId || !username) {
            toast.error('Room Id and username is required');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state: {username},
        });
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <input 
                    type="text" 
                    placeholder="Enter room id" 
                    value={roomId} 
                    onChange={(e) => setRoomId(e.target.value)} 
                    className="w-64 p-2 border border-gray-300 rounded"
                />
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="w-64 p-2 border border-gray-300 rounded"
                />
                <button onClick={Join} className="w-64 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Join</button>
                <span className="text-sm text-gray-600">
                    If you don't have a Room ID then, 
                    <button 
                        className="text-blue-500 ml-1" 
                        onClick={createRoomId}
                    >
                        Create
                    </button>
                </span>
            </form>
        </div>
    );
};

export default Home;
