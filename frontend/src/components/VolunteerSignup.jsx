import React, { useState, useEffect } from 'react';
import US_STATES from "./state";
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
let area = ['Mentoring youth', 'Environmental work', 'Event assistance', 'Fundraising', 'Other'];
let available = ['Weekdays', 'Weekends', 'Mornings', 'Afternoons', 'Evenings']
const VolunteerSignup = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        volunteeringAreas: [],
        availability: '',
        preferredVolunteerType: '',
        skills: '',
        languages: '',
        additionalDetails: '',
        howDidYouHear: '',
        consent: false,
    });

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (Array.isArray(formData[name])) {
                if (checked) {
                    setFormData((prev) => ({
                        ...prev,
                        [name]: [...prev[name], value],
                    }));
                } else {
                    setFormData((prev) => ({
                        ...prev,
                        [name]: prev[name].filter((item) => item !== value),
                    }));
                }
            } else {
                setFormData((prev) => ({ ...prev, [name]: checked }));
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Your details was saved.");
        navigate("/invoced");
    };

    return (
        <>
        <SEO title="Volunteer | Barack Obama" description="Welcome to the official Obama Foundation  volunteerSignupPage."></SEO>
        <div className='bg-slate-700'>
            <div className="max-w-3xl mx-auto p-4 ">
                <h1 className="text-3xl  font-bold m-4 text-white text-center">Volunteer Application Form</h1>
                <p className='text-white pb-10 text-center'>Thank you for your interest in volunteering with us!
                    Please fill out this form to join our mission and make a positive impact in the community.</p>
                <form onSubmit={handleSubmit} className="space-y-4  bg-white p-4 rounded-xl">
                    <div className='flex gap-2 justify-between max-md:flex-col'>
                        <div className='w-full'>
                            <label className="block mb-1 ">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    <div className='flex gap-2 justify-between max-md:flex-col'>
                        <div className='w-full'>
                            <label className="block mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block mb-1">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className='flex gap-2 justify-between max-md:flex-col'>
                        <div className='w-full'>
                            <label className="block mb-1">Street Address</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className='flex gap-2 justify-between max-md:flex-col'>
                        <div className='w-full'>
                            <label className="block mb-1">State / Province</label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            >
                                {US_STATES.map((state) => (
                                    <option key={state.value} value={state.value}>
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className="block mb-1">ZIP / Postal Code</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>

                    <fieldset className="border border-gray-300 rounded-lg p-4">
                        <legend className=" mb-2">Preferred Volunteering Areas</legend>
                        <div className="space-y-3">
                            {area.map((area) => (
                                <div key={area} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="volunteeringAreas"
                                        value={area}
                                        checked={formData.volunteeringAreas.includes(area)}
                                        onChange={handleChange}
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="text-gray-700">{area}</label>
                                </div>
                            ))}
                            {formData.volunteeringAreas.includes('Other') && (
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="otherArea"
                                        placeholder="Please specify"
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}
                        </div>
                    </fieldset>


                    <div className='flex gap-2 justify-between max-md:flex-col'>
                        <div className='w-full'>
                            <label className="block mb-1">Availability</label>
                            <select
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            >
                                {available.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='w-full'>
                            <label className="block mb-1">Preferred Volunteer Type</label>
                            <select
                                name="preferredVolunteerType"
                                value={formData.preferredVolunteerType}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                            >
                                {['One-time events', 'Weekly commitment', 'Monthly', 'On-call'].map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1">Relevant Skills or Experience</label>
                        <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Languages Spoken</label>
                        <input
                            type="text"
                            name="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Why Do You Want to Volunteer With Us?</label>
                        <textarea
                            name="additionalDetails"
                            value={formData.additionalDetails}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">How Did You Hear About Us?</label>
                        <select
                            name="howDidYouHear"
                            value={formData.howDidYouHear}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                        >
                            {['Social media', 'Word of mouth', 'Website', 'Event', 'Other'].map((source) => (
                                <option key={source} value={source}>
                                    {source}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label>
                            I agree to the terms and conditions and allow you to contact me.
                        </label>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default VolunteerSignup;
