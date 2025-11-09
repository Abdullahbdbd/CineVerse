import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const{createUser}=use(AuthContext)

const handleCreateUser=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(()=>{
        toast.success('Register Complete')
        e.target.reset()
    })
    .catch(err=>{
        toast.warning(err.message)
    })


    
}

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleCreateUser}>
            <fieldset className="fieldset">

                {/* name  */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Your Name" required />

              {/* photo url  */}
              <label className="label">Photo Url</label>
              <input type="text" name="photo" className="input" placeholder="Your Photo Url" required />

              {/* email  */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Your Email" required />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Your Password" required />

              <button className="btn btn-neutral mt-4">Register</button>
              {/* Google */}
                <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>
            </fieldset>
          </form>

           <p className="text-sm">
            Allready Have An Account?
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
