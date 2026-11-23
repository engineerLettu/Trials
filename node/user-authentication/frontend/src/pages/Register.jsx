import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = ({ setUser}) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const res = await axios.post("http://localhost:5000/api/auth/login", form); 
              setUser(res.data.user);
              navigate('/');
          } catch {
            setError("Invalid email or password");
        }
    }

    return(
        <div className='min-h-screen flex items-center justify-center bg-gray-100'> 
            <form className='bg-white p-6 rounded shadow-md' onSubmit={handleSubmit}>
                <h2 className='text-xl mb-4'>Login</h2>
                {error && <p className='text-red-500 mb-4'>{error}</p>}
                <input type="email" placeholder="email" name="email" className='border p-2 w-full mb-3' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                <input type="password" placeholder="password" name="password" className='border p-2 w-full mb-3' value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />

                <button className='bg-blue-500 text-white p-2 w-full' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Register;