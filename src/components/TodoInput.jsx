

const Input = ({ onClick, onChange, value }) => {
    return (
        <div className="text-center my-7">
            <input type="text" className="text-center p-2 border rounded-md" placeholder="Enter your todo" onChange={onChange} value={value} />
            <button className="bg-violet-300 p-2 ml-3 rounded-md hover:text-white hover:bg-violet-600" onClick={onClick} disabled={value === ""}>Add Todo</button>
        </div>
    )
}


export default Input;