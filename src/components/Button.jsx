const Button = ({label, icon}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      <img 
        src={icon}
        className="mr-2 rounded-full w-5"  
      /> 
      {label}
    </button>
  )
}

export default Button