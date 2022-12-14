import react, { useState } from 'react';
import './styles.css'

const DojoTabs = props => {
    const [selected, setselected] = useState(0);
    const { tabs } = props;


    const clickHandler = (idx) => {
        console.log(idx);
        setselected(idx);

    }
    return (
        <div>
            <h1>Hello this is Tabs</h1>
            {tabs.map((e, key) =>
                <button className='btn'
                    onClick={
                        (e) => clickHandler(key)
                    }
                    key={key}
                    value={e.label}> {e.label}

                </button>
            )}
            <h1>{tabs[selected].content}</h1>
        </div>

    );
};

export default DojoTabs;