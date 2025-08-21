import Header from "../components/Header"
import Footer from "../components/Footer"

const Internal = () => {

    return (
        <>
            <Header />
            <section className="px-6 lg:px-16 py-8 lg:py-20 w-full max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold pb-4 text-gray-800">Internal Rules</h1>
                <p className="pb-4 pt-6 lg:pt-10 text-gray-500">
                    <strong className="text-gray-800">Food and Drink Policy:</strong> To maintain a clean and professional workspace and ensure everyone's comfort and safety, we ask all employees to adhere to the following rule regarding food and beverages: 
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Designated Area:</strong> All food and drink consumption must take place in the designated eating area(s), such as the break area or outside. 
                    </li>
                    <li>
                        <strong className="text-gray-800">Workspace Restrictions:</strong> Food and beverages are not permitted at workstations or within shared office spaces to prevent spills, odors, and distractions.
                    </li>
                    <li>
                        <strong className="text-gray-800">Exceptions:</strong> Water bottles with secure lids may be allowed at workstations.
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Coffee Machinery Guidelines:</strong> To promote cleanliness and ensure the proper use of coffee machinery, the following rule applies:
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Responsibility:</strong> Employees are required to clean and maintain coffee machinery after each use to ensure it remains in good condition for everyone.
                    </li>
                    <li>
                        <strong className="text-gray-800">Waste Disposal:</strong> Spills, used coffee grounds, and other waste must be disposed of properly to maintain a tidy environment.
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Locker Use for Bags:</strong> To maintain a neat and organized workspace, employees must follow this rule regarding personal bags:
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Storage Requirement:</strong> All personal bags must be stored in designated lockers provided by the company.
                    </li>
                    <li>
                        <strong className="text-gray-800">Workspace Clarity:</strong> Employees should keep workspaces clear of personal belongings to ensure tidiness and organization.
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Tool Bags Guidelines:</strong> To ensure safety and organization in the workspace, employees should adhere to the following rule regarding tool bags: 
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Designated Storage:</strong> Tool bags must be stored in designated areas when not in use.
                    </li>
                    <li>
                        <strong className="text-gray-800">Organization:</strong> Employees should keep their tool bags organized to prevent clutter and safety hazards.
                    </li>
                    <li>
                        <strong className="text-gray-800">Maintenance:</strong> Tools must be returned to their appropriate location after use, and damaged tools should be reported immediately.
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Workspace Cleanliness and Organization:</strong> To foster a professional environment and enhance productivity, employees should adhere to the following rule regarding work desks: 
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Clean and Organized Desks:</strong> Work desks must be kept clean and free of unnecessary clutter at all times.  
                    </li>
                    <li>
                        <strong className="text-gray-800">Trash Disposal:</strong> Trash and recyclables should be disposed of in appropriate bins to maintain workspace cleanliness.
                    </li>
                    <li>
                        <strong className="text-gray-800">Professionalism:</strong> A tidy desk reflects professionalism and helps ensure a safe and productive work environment. 
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Restroom Use Guidelines:</strong> To ensure the cleanliness and accessibility of restroom facilities, employees should follow this rule: 
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">Proper Use:</strong> Restrooms are to be used responsibly, ensuring that facilities are left clean and in good condition after use.
                    </li>
                    <li>
                        <strong className="text-gray-800">Hygiene:</strong> Employees must practice good hygiene by washing their hands thoroughly after using the restroom. 
                    </li>
                    <li>
                        <strong className="text-gray-800">Waste Disposal:</strong> Trash should be disposed of in the bins provided, and any issues with restroom facilities should be reported promptly to management.
                    </li>
                </ul>
                <p className="pb-4 pt-10 text-gray-500">
                    <strong className="text-gray-800">Substance-Free Workplace:</strong> To ensure a safe, professional, and productive work environment, employees must adhere to the following rule: 
                </p>
                <ul className="px-10 flex flex-col gap-2 list-disc text-gray-500">
                    <li>
                        <strong className="text-gray-800">No Drugs or Alcohol:</strong> The use, possession, sale, or distribution of illegal drugs, alcohol, or intoxicating substances is prohibited during work hours or on company property.
                    </li>
                    <li>
                        <strong className="text-gray-800">No Impairment:</strong> Employees must not report to work or perform job duties while under the influence of any substances that could affect their performance, safety, or judgment.
                    </li>
                    <li>
                        <strong className="text-gray-800">Enforcement:</strong> Violations of this rule may result in disciplinary action, including termination, in accordance with company policy.
                    </li>
                </ul>
                <p className="py-10 font-bold text-lg">
                    We appreciate your cooperation in helping us uphold a clean, safe, and productive workplace.
                </p>
            </section>
            <Footer />
        </>
    )
}

export default Internal