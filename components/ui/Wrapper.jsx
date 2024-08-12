import React from 'react';

const Wrapper = React.forwardRef(({ children, styles }, ref) => {
    return (
        <div ref={ref} className={`${styles} bg-[#F7F7F7] flex flex-col items-center justify-center gap-5 rounded-xl`}>
            {children}
        </div>
    );
});

export default Wrapper;

