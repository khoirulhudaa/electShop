interface ButtoInterface {
    type?: string,
    text?: string,
    status?: string,
    bgColor?: string,
    style?: string,
    handleClick?: () => void,
    typeButton?: "button" | "submit" | "reset", 
    disabled?: boolean,
    icon?: React.ReactNode, 
}

const Button = ({type, typeButton="button", text, status, handleClick, style, disabled=false, icon}: ButtoInterface) => {
    switch(type) {
        case "outline-with-icon":
            return (
                <button type={typeButton} onClick={disabled ? () => null : handleClick} className={`w-full flex items-center h-max px-[20px] py-[12px] bg-transparent border border-slate-300 rounded-lg text-center outline-0 cursor-pointer hover:brightness-[96%] active:scale-[0.99] flex items-center justify-center ${style}`}>
                    {icon} <p className="ml-4">{text}</p>
                </button>
            )
        case "outline":
            return (
                <button type={typeButton} onClick={disabled ? () => null : handleClick} className={`w-full h-max px-[20px] py-[12px] bg-transparent border border-slate-300 rounded-lg text-center outline-0 cursor-pointer hover:brightness-[96%] active:scale-[0.99] flex items-center justify-center ${style}`}>
                    {text}
                </button>
            )
        default: 
            return (
                <button type={typeButton} onClick={disabled ? () => null : handleClick} className={`${style} shadow-lg h-max px-[20px] py-[12px] ${status === 'primary' && disabled === false ? "bg-blue-500 hover:brightness-[96%] active:scale-[0.99] cursor-pointer" : status === 'delete' && disabled === false ? "bg-red-500 hover:brightness-[96%] active:scale-[0.99] cursor-pointer" : "bg-slate-300 cursor-not-allowed"} ${status === 'primary' && disabled === false ? "text-white": status === 'delete' && disabled === false ? "text-white" : "text-slate-500"} rounded-lg text-center border-0 outline-0 flex items-center justify-center`}>
                    {text}
                </button>
            )
    }
}

export default Button
