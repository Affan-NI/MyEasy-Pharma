import { CallToAction } from "./CallToAction";
import QuickContactCTA from "./QuickContactCTA";
import { useState } from "react";

function ContactPage() {
    return (
        <>
            <CallToAction />          
            <QuickContactCTA />
        </>
    );
}

export default ContactPage;

