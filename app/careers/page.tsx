"use client"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Careers() {
    const [loading,set_loading] = useState<boolean>(false)
    const form: any = useRef()
    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_xwf6fms", "template_4fvy5ow", form.current, {
            publicKey: "CLt7ZGjfiSQEopImB"
        }).then(() => {
            alert("✅Application sent")
            form.current.reset()
        }).catch(() => {
            alert("⚠️Application not sent, please try again!")
        }).finally(()=>{
            set_loading(false)
        })
    }
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div>
                <h1 className="display-1 fw-bold">JOIN THE A-Team</h1>
                <p>We are big on passion, express yourself, make decisions that matter!</p>
                <div className="rounded p-3 bg-light">

                <form ref={form} onSubmit={send_application}>
                    <div className="row ">
                        <div className="col-sm mb-3">
                            <span>Full Name</span>
                            <input type="text" name="full_name" className="form-control" placeholder="John Doe" required />
                        </div>
                        <div className="col-sm mb-3">
                            <span>Occupation</span>
                            <input type="text" name="occupation" className="form-control" placeholder="Software Engineer" required />
                        </div>
                        <div className="col-sm mb-3">
                            <span>Email</span>
                            <input type="email" name="email" className="form-control" placeholder="john@doe.com" required />
                        </div>
                        <div className="col-sm mb-3">
                            <span>Mobile Number</span>
                            <input type="tel" name="mobile_number" className="form-control" placeholder="+1637........." required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm mb-3">
                            <span>Cover Letter</span>
                            <textarea className="form-control" name="cover_letter" required></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <button type="submit" className="btn p-btn" disabled={loading}>
                                {
                                     loading
                                     ?
                                     <div className="spinner-border spinner-border-sm text-light " role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    :
                                    "Send"
                                }
                                </button>
                        </div>
                    </div>
                </form>
                </div>

            </div>
        </div>
    )
}
