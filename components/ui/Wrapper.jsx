

function Wrapper({children , styles}) {
    return (
        <div className={`${styles} bg-[#F7F7F7] flex items-center justify-center`}>
            {children}
        </div>
    )
}

export default Wrapper
