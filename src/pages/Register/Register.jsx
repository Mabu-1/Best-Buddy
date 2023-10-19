import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [regitserError,setRegisterError] =useState('');
    const [showPassword,setShowPassword] =useState(false);
    const location = useLocation();
    const navigate = useNavigate();
   const {createUser,handleUpdateProfile} =useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
      
        console.log(name, photo, email, password);
         setRegisterError('');
           
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) 
        {
             setRegisterError('Your password should have at least one special character');
             return;
        }
         
          // create user
        createUser(email, password)
        .then(() => {
            
            handleUpdateProfile(name,photo)
            toast('User Registration Successfully!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                style: {
                  backgroundColor: 'green',
                  color: 'black',
                  border: '2px solid #f00',
                  borderRadius: '8px', 
                  padding: '16px', 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                },
                closeOnClick: true,
                theme: 'colored',
              });
              navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            const errorMessage = error.message;
            setRegisterError(errorMessage);
        })

        
    }

    return (
        <div>
          
            <div>
                <h2 className="text-6xl font-bold my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       
                      
               <div className="mb-4 relative">
               <input className="input input-bordered w-full"
                 type={showPassword ? "text" :"password" }
                 name="password" 
                 id="" 
                 placeholder="Password" 
                 required/>
                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ?<FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
               </div>
               {
                regitserError && <p className="text-red-700">{regitserError}</p>
            }
            
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                

                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;