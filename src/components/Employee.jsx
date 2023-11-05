import EditEmployee from "./EditEmployee";

export default function Employee(props) {
    return (
        <div className="min-w-[250px] max-w-[350px] py-8 px-8 m-2 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                className="object-cover h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src={props.image}
                alt="profile"
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">{props.role}</p>
                </div>

                <EditEmployee
                    id={props.id}
                    name={props.name}
                    role={props.role}
                    image={props.image}
                    updateEmployee={props.updateEmployee}
                />
            </div>
        </div>
    );
}
