import React from 'react'
import FAQ from "./faq.component"
import faqsData from "../../fixtures/faqs.json"


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
        </FAQ>
    )
}