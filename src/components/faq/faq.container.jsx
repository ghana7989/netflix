import React from 'react'
import FAQ from "./faq.component"
import faqsData from "../../fixtures/faqs.json"
import OptForm from '../opt-form/optForm.component'


export function FAQContainer() {
    return (
        <FAQ>
            <FAQ.Title>Frequently Asked Questions </FAQ.Title>
            {faqsData.map(item => (
                <FAQ.Item key={item.id}>
                    <FAQ.Header>{item.header}</FAQ.Header>
                    <FAQ.Body>{item.body}</FAQ.Body>
                </FAQ.Item>
            ))}
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email Address..." />
                <OptForm.Button>GET STARTED</OptForm.Button>
            </OptForm>
        </FAQ>
    )
}