import React from 'react';

const Wrapper = React.forwardRef(({ children, styles  , key}, ref) => {
    return (
        <div key={key} ref={ref} className={`${styles} bg-[#F7F7F7] flex flex-col items-center justify-center gap-5 rounded-xl`}>
            {children}
        </div>
    );
});


Wrapper.displayName = 'Wrapper';

export default Wrapper;

