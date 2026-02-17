import { CallToAction } from "./CallToAction";
import { ContactModal } from "./contactLogic/ContactModal";
// import { DemoModal } from "./contactLogic/DemoModal";
import QuickContactCTA from "./QuickContactCTA";
import { useState } from "react";

function ContactPage() {
    const [contactOpen, setContactOpen] = useState(false);
    // const { scheduleDemo } = useScheduleDemo();

    // const [demoOpen, setDemoOpen] = useState(false);
    return (
        <>
            <CallToAction
                onContactClick={() => setContactOpen(true)}
                // onDemoClick={() => setDemoOpen(true)}
            />
            
            <QuickContactCTA />

            {/* <DemoModal
                open={demoOpen}
                onClose={() => setDemoOpen(false)}
            /> */}

            <ContactModal
                open={contactOpen}
                onClose={() => setContactOpen(false)}
            />
        </>
    );
}

export default ContactPage;

