"use client"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactUs(){
    const [loading,set_loading] = useState<boolean>(false)
    const form: any = useRef()
    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_l2ay0f2", "template_c4pjfnx", form.current, {
            publicKey: "CLt7ZGjfiSQEopImB"
        }).then(() => {
            alert("✅ We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }
    return(
    <div className=" min-vh-100">
        <div className="text-center mt-5">
            <h1 className="fw-bold p-text">Ready to Build?</h1>
            <p>Get on a quick 30 min call with us!</p>
        </div>
        <div className="bg-light rounded mb-3 p-3">
            <form ref={form} onSubmit={send_application}>
                <div className="row">
                    <div className="col-sm mb-2">
                        <span>Name</span>
                        <input type="text" className="form-control" name="full_name" placeholder=""/>
                    </div>
                    <div className="col-sm mb-2">
                        <span>Company Name</span>
                        <input type="text" className="form-control" name="company_name" placeholder=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mb-2">
                        <span>Email</span>
                        <input type="text" className="form-control" name="email" placeholder=""/>
                    </div>
                    <div className="col-sm mb-2">
                        <span>Contact Number</span>
                        <input type="text" className="form-control" name="contact_number" placeholder=""/>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm mb-2">
                        <span>Your Budget (USD)</span>
                        <input type="text" className="form-control" name="budget" placeholder=""/>
                    </div>
                    <div className="col-sm mb-2">
                        <span>Service Interested In?</span>
                        <select className="form-control " name="service">
                            <option value="AI and Automation">AI and Automation</option>
                            <option value="Web App Development">Web App Development</option>
                            <option value="Custom Software Development">Custom Software Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="User Interface Design UI|UX">User Interface Design UI|UX</option>
                            <option value="Idea Validation">Idea Validation</option>
                            <option value="Project Management">Project Management</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mb-2">
                        <span>Tell us more about your project</span>
                        <textarea className="form-control" name="project_details"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button type="submit" className="btn p-btn">Send</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="container d-block mb-4 mt-4">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15188.379049987738!2d31.050825!3d-17.881022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45585aeea8dea1a5%3A0xdb02cf18c65a6b11!2sAurora%20Systems!5e0!3m2!1sen!2szw!4v1722775668872!5m2!1sen!2szw"  className="d-block w-100"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    )
}