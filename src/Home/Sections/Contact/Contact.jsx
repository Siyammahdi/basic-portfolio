import { Formik, Form, Field, ErrorMessage } from 'formik';
import ComponentLayout from '../../ComponentLayout/ComponentLayout';
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaPhone, FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button from '../../Components/Button/Button';
import SubHeading from '../../Components/SubHeading/SubHeading';
import Heading from '../../Components/Heading/Heading';
import Swal from 'sweetalert2';
import ModalImg from "../../../assets/Others/modal.jpg" 

const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const onSubmit = (contactData, { resetForm }) => {
        // Handle form submission logic here
        console.log(contactData);

        fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(contactData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Impressive!",
                    text: "I'm just glad to receive your Message, replying to you as soon as possible",
                    imageUrl: ModalImg,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
            }
        })

        resetForm();
    };

    return (
        <ComponentLayout>
            <SubHeading>Contact</SubHeading>
            <Heading>I Want to Hear from You</Heading>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
                {/* Left column with contact information */}
                <div className="md:col-span-1 space-y-12">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full text-2xl text-white bg-cyan-400 p-4 mr-4">
                            <MdEmail />
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Email</h4>
                            <p>siyammahdi1@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="rounded-full text-2xl text-white bg-cyan-400 p-4 mr-4">
                            <FaPhone />
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Phone</h4>
                            <p>+880 1774 010 501</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded-full text-2xl text-white bg-cyan-400 p-4 mr-4">
                            <FaLocationDot />
                        </div>
                        <div>
                            <h4 className='text-2xl font-semibold text-white'>Address</h4>
                            <p>Kurigram, Rangpur, Bangladesh</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center list-none text-3xl space-x-4 mt-[72px] text-gray-300">
                            <li><a className="hover:text-blue-500" href="https://www.facebook.com/siyammahdi911"><FaFacebook /></a></li>
                            <li><a className="hover:text-gray-600" href="https://github.com/Siyammahdi"><FaGithub /></a></li>
                            <li><a className="hover:text-blue-700" href="https://linkedin.com"><FaLinkedin /></a></li>
                            <li><a className="hover:text-gray-600" href="https://twitter.com/siyam_mahdi"><FaXTwitter /></a></li>
                            <li><a className="hover:text-red-500" href="https://www.instagram.com/siyam.mah/"><FaInstagram /></a></li>
                        </div>
                    </div>
                </div>

                {/* Right column with contact form */}
                <div className="md:col-span-1">
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="">
                                    <Field type="text" name="name" placeholder="Your Name" className="input input-bordered w-full bg-transparent border-gray-600" />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div>

                                <div className="">
                                    <Field type="text" name="email" placeholder="Your Email" className="input input-bordered w-full bg-transparent border-gray-600" />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                </div>

                                {/* Add the Phone and Subject fields */}
                                <div className="">
                                    <Field type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full bg-transparent border-gray-600" />
                                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                                </div>

                                <div className="mb-4">
                                    <Field type="text" name="subject" placeholder="Subject" className="input input-bordered border-gray-600 w-full bg-transparent" />
                                    <ErrorMessage name="subject" component="div" className="text-red-500" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <Field as="textarea" className="textarea textarea-bordered w-full bg-transparent border-gray-600 h-44" placeholder="Type your message here" id="message" name="message" />
                                <ErrorMessage name="message" component="div" className="text-red-500" />
                            </div>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </ComponentLayout>
    );
};

export default Contact;
