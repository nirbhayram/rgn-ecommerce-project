import React from 'react'
import Heading from "../resuable/Heading"

export default function ContactForm() {
    return (
        <section className="py-2">
            <div className="container">
                <Heading title="Contact us" />
                <div class="input-group mb-3">
                    <div class="input-group-prepend col-6">
                        <span class="input-group-text" id="basic-addon1">Name</span>
                    </div>
                    <input type="text" class="form-control col-6" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend col-6">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" class="form-control col-6" placeholder="Your e-mail" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend col-6">
                        <span class="input-group-text" id="basic-addon1">Message</span>
                    </div>
                    <textarea type="text" class="form-control col-6" placeholder="Your message" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </section>
    )
}
