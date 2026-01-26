import { CallToAction } from "./CallToAction";
import { ContactModal } from "./contactLogic/ContactModal";
import { DemoModal } from "./contactLogic/DemoModal";
import QuickContactCTA from "./QuickContactCTA";
import { useState } from "react";

function ContactPage() {
    const [contactOpen, setContactOpen] = useState(false);
    // const { scheduleDemo } = useScheduleDemo();

    const [demoOpen, setDemoOpen] = useState(false);
    return (
        <>
            <CallToAction
                onContactClick={() => setContactOpen(true)}
                onDemoClick={() => setDemoOpen(true)}
            />
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pb-10 flex justify-center">
                <QuickContactCTA />
            </div>

            <DemoModal
                open={demoOpen}
                onClose={() => setDemoOpen(false)}
            />

            <ContactModal
                open={contactOpen}
                onClose={() => setContactOpen(false)}
            />
        </>
    );
}

export default ContactPage;