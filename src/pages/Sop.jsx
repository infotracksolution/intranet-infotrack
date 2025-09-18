import Header from "../components/Header"
import Footer from "../components/Footer"

const Sop = () => {

    return (
        <>
            <Header />
            <div className="px-6 lg:px-16 py-8 lg:py-20 w-full max-w-5xl mx-auto">
                <h2 className="font-bold text-2xl mb-6 text-gray-800">
                     Standard Operating Procedures
                </h2>
                <h3 id="normal" className="font-bold text-xl mb-2 text-gray-800">Normal day procedure</h3>
                <div>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:00 - 08:15:
                        </strong>
                        <a href="#id1">Breakfast.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:15 - 08:25: 
                        </strong>
                        <a href="#id2">Organizing and cleaning, if needed.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:25 - 08:40:
                        </strong>
                        <a href="#">Check work from previous workdays and prepare for Technicial meeting.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:40 - 09:00:
                        </strong>
                        <a href="#id4">Technician Meeting: Discuss WOs and schedule.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:00 - 09:10:
                        </strong>
                        <a href="#id5">Management Meeting: Report to director about Tech meeting.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:10 - 09:30:
                        </strong>
                        <a href="#id6">Prepare for work orders.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:30 - 12:30:
                        </strong>
                        <a href="#id7">Work.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            12:30 - 13:00:
                        </strong>
                        <a href="#id8">Lunch.</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            13:00 - 15:30:
                        </strong>
                        <a href="#id7">Work</a>
                    </p>
                    <p className="pl-4 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            15:30 - 16:00:
                        </strong>
                        <a href="#id9">Discuss about work and make next workdays schedule.</a>
                    </p>
                </div>
                <div id="id1">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Breackfast</h3>
                    <p className="text-gray-500 ml-4">
                        When entering the office put your stuff in the locker. You can have your breackfast at the fron of the office relaxed on the couches with a cup of coffee.
                    </p>
                </div>
                <div id="id2">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Organizing and Cleaning</h3>
                    <p className="text-gray-500 ml-4">
                        Discuss verbally who'll vacuum the floor, mop the floor, wipe the desks etc.
                    </p>
                </div>
                <div id="id4">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Technicial Meeting Prep</h3>
                    <p className="text-gray-500 ml-4">
                        Check the work orders from your previous workday. Make notes if you want to discuss a particular WO. Be aware and specific abot the status of your WOs whether individually or in collaboration.
                    </p>
                </div>
                <div id="id5">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Management Meeting</h3>
                    <p className="text-gray-500 ml-4">
                        Enlighten the director about the outcomes of the Technicial Meeting such as the schedule. If no comments move on forward with the day.
                    </p>
                </div>
                <div id="id6">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Prepare for WOs</h3>
                    <p className="text-gray-500 ml-4">
                        After the meetings every technician must be aware of their schedule and tasks. Prepare for the tasks such as going through your checklist of youur necessities and loading them into your truck. Define your driving routes, keep in mind with rush hours and government street closing.
                    </p>
                </div>
                <div id="id7">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Work</h3>
                    <p className="text-gray-500 ml-4">
                        Check the other SOPs according to your tasks. Other SOPs are survey, installation and troubleshooting.
                    </p>
                </div>
                <div id="id8">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Lunch</h3>
                    <p className="text-gray-500 ml-4">
                        Take a break from work and have some lunch. Energy up and stay hydrated.
                    </p>
                </div>
                <div id="id9">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Recap</h3>
                    <p className="text-gray-500 ml-4">
                        Coming back to the office, unload the tools, equipment and put them back at their designated place unless you're certain you'll be needing them the next day. While doing that, talk and enlighten the other team members about your tasks.
                    </p>
                </div>
                <div>
                    <p className="text-gray-800 ml-4 my-6">
                        * Keep in mind that this is just how a normal work day would look like. There might be sometimes that this wouldn't be the case for whatever reason it may be. At that moment we'll need to improvise, adapt and overcome.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg my-1 text-red-700">EMERGENCIES!!!</h3>
                    <p className="text-gray-500 ml-4">
                        If an emergency situation occurs, it doesn't matter if it is personal or work related, immediately alert the team through whatsapp or call them.
                    </p>
                </div>

                <h3 id="leave" className="font-bold text-xl mt-12 mb-2 text-gray-800">Request for Leave</h3>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    1. Leave Entitlement:
                </p>
                <p className="ml-4">
                    - Employees receive 1 day (paid) leave each month, which may be saved until needed.
                </p>
                <p className="ml-4">
                    - Employees may not request a 12-day (long-term) leave unless approved and signed by the manager.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    2. Leave Request Procedure:
                </p>
                <p className="ml-4">
                    - The requested leave must be written, signed by the employee, and submitted to HR.
                </p>
                <p className="ml-4">
                    - All requests must be authorized and signed by the manager before approval is granted.
                </p>
                <p className="ml-4">
                    - Employees who take leave without signed approval will be suspended.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    3. Leave Conditions:
                </p>
                <p className="ml-4">
                    - Employees cannot extend beyond the number of paid leave days available.
                </p>
                <p className="ml-4">
                    - If additional leave days are needed and no paid days remain, the leave will be considered unpaid and at the employee’s own risk.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    4. Work Arrangements During Leave:
                </p>
                <p className="ml-4">
                    - Employees must ensure their work is arranged in such a way that it does not experience disturbance during their absence.
                </p>
                <p className="ml-4">
                    - Employees must notify personal clients of their leave and inform them who will handle their issues.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    5. Special Circumstances:
                </p>
                <p className="ml-4">
                    - If an employee is unsure about being absent due to other responsibilities, they must notify the manager immediately.
                </p>
                <p className="ml-4">
                    - Duties must be arranged to remain undisturbed; only with valid reasoning will exceptions be considered.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    6. Accountability:
                </p>
                <p className="ml-4">
                    - Employees failing to arrange their duties properly will receive a written warning.
                </p>
                <p className="ml-4">
                    - If work is delayed, employees are required to catch up after working hours if necessary.
                </p>

                <h3 id="leave" className="font-bold text-xl mt-12 mb-2 text-gray-800 capitalize">Infotrack ticketing workflow</h3>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    1. Purpose
                </p>
                <p className="ml-4">
                    This SOP defines the standardized process for creating, updating, tracking, escalating, and closing tickets in the company ticketing system (mHelpDesk). It ensures consistent handling of customer requests, internal tasks and sales activities, enforces service level targets, and provides clear roles and responsibilities.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    2. Scope
                </p>
                <p className="ml-4">
                    Applies to all Infotrack Solutions employees who create or act on tickets in mHelpDesk — including technicians, sales staff, managers, and administrative personnel. All work-related activities (internal and external) must be logged as tickets.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    3. Definitions
                </p>
                <p className="ml-4">
                    - Ticket: A record in mHelpDesk describing a request, malfunction, sales opportunity, or internal task.
                </p>
                <p className="ml-4">
                    - New: Ticket created but not yet handles/assigned.
                </p>
                <p className="ml-4">
                    - Open: Tickets currently under active handling; includes sub-states (In Progress, On Hold, Estimated).
                </p>
                <p className="ml-4">
                    - Closed: Final states: Ready for invoicing, Invoiced, Closed.
                </p>
                <p className="ml-4">
                    - SLA (business day): Refers to official working days; use local office calendar for holidays.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    4. Required Ticket Fields (mandatory)
                </p>
                <p className="ml-4">
                    Every ticket must contain:
                </p>
                <p className="ml-6">
                    - Issue Type (malfunction / request / sales / internal)
                </p>
                <p className="ml-6">
                    - Subject (clear short description)
                </p>
                <p className="ml-6">
                    - Customer (or internal department)
                </p>
                <p className="ml-6">
                    - Assigned Tech (person responsible)
                </p>
                <p className="ml-4 italic">
                    Tickets missing mandatory fields must be completed immediately by the creator or the assignee.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    5. Roles & Responsibilities
                </p>
                <p className="ml-4">
                    - Ticket Creator (any employee): Create tickets for every activity (internal/external). Provide full details and contact info.
                </p>
                <p className="ml-4">
                    - Assigned Technician: Accept responsibility when assigned. Provide updates, move ticket through states, and finalize work.
                </p>
                <p className="ml-4">
                    - Manager: Review escalations, approve extensions beyond maximum durations, and confirm invoices/closing.
                </p>
                <p className="ml-4">
                    - Admin/Finance: Generate invoices from tickets in “Ready for invoicing” and mark “Invoiced”.
                </p>
                <p className="ml-4 italic">
                    Failure to create a ticket: disciplinary action and non-recognition for the work performed (per company policy).
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    6. Ticket Lifecycle — Rules & Timeframes
                </p>
                <p className="ml-4">
                    1. Create (Immediate): Create a ticket immediately for every new malfunction/request/sale.
                </p>
                <p className="ml-4">
                    2. New Tab: Triaged within 3 business days or escalate.
                </p>
                <p className="ml-4">
                    3. Open — Substates: Estimated, In Progress, On Hold, Waiting for Parts.
                </p>
                <p className="ml-4">
                    4. Closed Substates: Ready for invoicing, Invoiced, Closed.
                </p>
                <p className="ml-4">
                    5. Updates Cadence: All tickets updated before Fridays 12:00 PM.
                </p>
                <p className="ml-4">
                    6. Accountability: Assigned Tech is responsible for updates, escalations, and completions.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    7. Escalation & Exceptions
                </p>
                <p className="ml-4">
                    Escalation triggers: Ticket in New - 3 days, In Progress - 3 days, complaints, SLA breaches.
                </p>
                <p className="ml-4">
                    Escalation path: Assigned Tech - Team Lead - Manager (decision within 24 business hours).
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    8. Examples of Valid Reasons for Holding a Ticket
                </p>
                <p className="ml-4">
                    - Waiting for customer-supplied parts.
                </p>
                <p className="ml-4">
                    - Customer requested delay.
                </p>
                <p className="ml-4">
                    - External dependency (ISP outage etc.).
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    9. Reporting & Metrics
                </p>
                <p className="ml-4">
                    Weekly metrics: number of new tickets, triaged within SLA, average In Progress duration, escalations, closed tickets, invoices generated.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    10. Non-Compliance Consequences
                </p>
                <p className="ml-4">
                    - Failure to create tickets: disciplinary fine, work non-recognition.
                </p>
                <p className="ml-4">
                    - Repeated failures: managerial review and corrective action.
                </p>
                <p className="my-2 font-bold text-gray-800 text-lg">
                    11. Revision & Ownership
                </p>
                <p className="ml-4">
                    - SOP owner: Operations Manager.
                </p>
                <p className="ml-4">
                    - Review cycle: annually or after major changes.
                </p>
                <p className="ml-4">
                    - Last updated: (add date).
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Sop