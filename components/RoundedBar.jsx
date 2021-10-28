export default function RoundedBar ({title}) {
    return(
        <div>
            <div className="bg-black w-min px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
                <p className="text-2xl font-mono text-pink-600 uppercase">{title}</p>
            </div>
        </div>
    )
}