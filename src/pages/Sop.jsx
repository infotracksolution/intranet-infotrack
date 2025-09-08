import Header from "../components/Header"
import Footer from "../components/Footer"

const Sop = () => {

    return (
        <>
            <Header />
            <div className="px-6 lg:px-16 py-8 lg:py-20 w-full max-w-5xl mx-auto">
                <h2 className="font-bold text-2xl mb-6 text-gray-800">
                     Standard Operating Procedure
                </h2>
                <div>
                    <h3 className="font-bold text-lg my-2 text-gray-800">Normal Day</h3>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:00 - 08:15:
                        </strong>
                        <a href="#id1">Breakfast.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:15 - 08:25: 
                        </strong>
                        <a href="#id2">Organizing and cleaning, if needed.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:25 - 08:40:
                        </strong>
                        <a href="#">Check work from previous workdays and prepare for Technicial meeting.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            08:40 - 09:00:
                        </strong>
                        <a href="#id4">Technician Meeting: Discuss WOs and schedule.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:00 - 09:10:
                        </strong>
                        <a href="#id5">Management Meeting: Report to director about Tech meeting.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:10 - 09:30:
                        </strong>
                        <a href="#id6">Prepare for work orders.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            09:30 - 12:30:
                        </strong>
                        <a href="#id7">Work.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            12:30 - 13:00:
                        </strong>
                        <a href="#id8">Lunch.</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            13:00 - 15:30:
                        </strong>
                        <a href="#id7">Work</a>
                    </p>
                    <p className="pl-6 text-gray-500">
                        <strong className="pr-6 text-gray-800">
                            15:30 - 16:00:
                        </strong>
                        <a href="#id9">Discuss about work and make next workdays schedule.</a>
                    </p>
                </div>
                <div id="id1">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Breackfast</h3>
                    <p className="text-gray-500">
                        When entering the office put your stuff in the locker. You can have your breackfast at the fron of the office relaxed on the couches with a cup of coffee.
                    </p>
                </div>
                <div id="id2">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Organizing and Cleaning</h3>
                    <p className="text-gray-500">
                        Discuss verbally who'll vacuum the floor, mop the floor, wipe the desks etc.
                    </p>
                </div>
                <div id="id4">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Technicial Meeting Prep</h3>
                    <p className="text-gray-500">
                        Check the work orders from your previous workday. Make notes if you want to discuss a particular WO. Be aware and specific abot the status of your WOs whether individually or in collaboration.
                    </p>
                </div>
                <div id="id5">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Management Meeting</h3>
                    <p className="text-gray-500">
                        Enlighten the director about the outcomes of the Technicial Meeting such as the schedule. If no comments move on forward with the day.
                    </p>
                </div>
                <div id="id6">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Prepare for WOs</h3>
                    <p className="text-gray-500">
                        After the meetings every technician must be aware of their schedule and tasks. Prepare for the tasks such as going through your checklist of youur necessities and loading them into your truck. Define your driving routes, keep in mind with rush hours and government street closing.
                    </p>
                </div>
                <div id="id7">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Work</h3>
                    <p className="text-gray-500">
                        Check the other SOPs according to your tasks. Other SOPs are survey, installation and troubleshooting.
                    </p>
                </div>
                <div id="id8">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Lunch</h3>
                    <p className="text-gray-500">
                        Take a break from work and have some lunch. Energy up and stay hydrated.
                    </p>
                </div>
                <div id="id9">
                    <h3 className="font-bold text-lg my-2 text-gray-800">Recap</h3>
                    <p className="text-gray-500">
                        Coming back to the office, unload the tools, equipment and put them back at their designated place unless you're certain you'll be needing them the next day. While doing that, talk and enlighten the other team members about your tasks.
                    </p>
                </div>
                <div>
                    <p className="text-gray-800 my-10">
                        * Keep in mind that this is just how a normal work day would look like. There might be sometimes that this wouldn't be the case for whatever reason it may be. At that moment we'll need to improvise, adapt and overcome.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg my-2 text-red-700">EMERGENCIES!!!</h3>
                    <p className="text-gray-500">
                        If an emergency situation occurs, it doesn't matter if it is personal or work related, immediately alert the team through whatsapp or call them.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sop