export default function RoundedBar ({title}) {
    return(
        <div>
            <div className="bg-pink-700 w-min px-2 py-2 rounded-xl shadow-xl whitespace-nowrap">
                <p className="text-3xl font-bold text-gray-100">{title}</p>
            </div>
        </div>
    )
}