



const Body = 0=>{
    return(
        <div className={'absolute text-blue-300 bg-black h-[80px] w-full '}>
            <div className={'w-[50px] sm:w-[50px] md:w-[30%] relative justify-between items-center top-5 bottom-5 left-[250px]  '}>
                <input type={'text'}  placeholder={'Search for...'} className={'border-gray-200 border p-2 px-4 rounded-lg w-full' }/>
                <button className={'relative bg-blue-700 w-7 h-7 top-[-30px] left-10'}>
                    {/<FaSearch className={'relative right-0 text-white '}/>/}
                </button>

            </div>
        </div>
    )
}


export default Body;