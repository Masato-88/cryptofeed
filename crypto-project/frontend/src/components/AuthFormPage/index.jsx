import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend"


export default function AuthFormPage() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const { formType } = useParams()
    const navigate = useNavigate();

    let actionText
        formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'

    // Execute auth logic on form submit
    async function handleSubmit(event) {
    // prevent the page from refreshing when the form is submitted
    event.preventDefault()
    // check what the URL parameter is to determine what request to make
    if (formType === 'login') {
        const { token } = await logIn(formData)
        localStorage.setItem('userToken', token)
    } else {
        const { token } = await signUp(formData)
        localStorage.setItem('userToken', token)
    }
    // redirect to the home page after signing/logging in
    navigate('/')
}


    return (
        <div className="flex items-center justify-center h-[90vh]">
            <div className="bg-blue-900 rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl text-center font-bold text-gray-200 mb-10">{actionText}</h2>
                <form className="space-y-7" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 text-black rounded-md"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 rounded-md"
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="center w-50 py-2 px-4 bg-green-700 text-gray-100 rounded-md">
                            {actionText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
