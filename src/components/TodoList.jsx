

const Todos = ({todos}) => {
    return (
        <div>
            {
                todos.map((data) => {
                    return (
                        <div key={data.id} className="flex bg-slate-50 p-3">
                            <h3 className="text-2xl flex-1 pl-2">{data.inp}</h3>
                            <button className="py-2 px-4 bg-red-400 hover:bg-red-600 hover:text-white">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Todos;