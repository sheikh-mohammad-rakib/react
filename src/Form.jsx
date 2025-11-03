import { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        textarea: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    }
    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={submitForm} className="space-y-4">
                <div>
                    <label htmlFor="name" className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="textarea" className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        name="textarea"
                        value={formData.textarea}
                        onChange={handleChange}
                        id="textarea"
                        placeholder="Your message"
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
            </form>
        </div>
    )
}
