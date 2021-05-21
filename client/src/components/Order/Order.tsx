import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import { FaSortAmountDown } from 'react-icons/fa';

enum OrderOptions {
    new = 'new',
    old = 'old',
    asc = 'asc',
    des = 'des'
}

interface OrderRule{
    date: boolean;
    name: boolean;
}

interface OrderOption{
    dateOption: OrderOptions | string;
    nameOption: OrderOptions | string;
}

const Order: React.FC = () => {
    const [orderRule, setOrderRule] = useState<OrderRule>({date: true, name: false});
    const [orderOptions, setOrderOptions] = useState<OrderOption>(
        {
            dateOption: OrderOptions.new,
            nameOption: OrderOptions.asc
        }
    );

    const radioButtonChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        if (e.target.name === 'order') {
            setOrderRule({
                date: !orderRule.date,
                name: !orderRule.name,
            });
        }  else {
            setOrderOptions({
                ...orderOptions,
                [e.target.name]: e.target.value
            })
        }
    }

    // useEffect(()=>{
    //     console.log(orderOptions)
    // }, [orderOptions]);

    // const checkRef = useCallback(node => {
    //     if (node !== null) {
    //         // setHeight(node.getBoundingClientRect().height);
    //         console.log(node)
    //     }
    // }, []);

    return (
        <div className={styles.orderDiv}>
            <p className={styles.orderP}><FaSortAmountDown className={styles.icon} />Order</p>
            <div>
                <label>
                    <input
                        type="radio"
                        id="date"
                        name="order"
                        value="date"
                        defaultChecked
                        onChange={radioButtonChangeHandler}
                    />
                    &nbsp;Date
                </label>
                <div
                    className={styles.eachRadioButtonDiv}
                    style={orderRule.date ? { display: 'block' } : { display: 'none' }}>
                    <label>
                        <input
                            type="radio"
                            id="new"
                            name="dateOption"
                            value={OrderOptions.new}
                            defaultChecked
                            onChange={radioButtonChangeHandler}
                            // ref={orderOptionsRef}
                        />
                        &nbsp;New
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="old"
                            name="dateOption"
                            value={OrderOptions.old}
                            onChange={radioButtonChangeHandler}
                            // ref={orderOptionsRef}
                        />
                        &nbsp;Old
                    </label>
                </div>

                <label>
                    <input
                        type="radio"
                        id="name"
                        name="order"
                        value="name"
                        onChange={radioButtonChangeHandler}
                    />
                    &nbsp;Name
                </label>
                <div 
                    className={styles.eachRadioButtonDiv}
                    style={orderRule.name ? { display: 'block' } : { display: 'none' }}>
                    <label>
                        <input
                            type="radio"
                            id="asc"
                            name="nameOption"
                            value="asc"
                            defaultChecked
                            onChange={radioButtonChangeHandler}
                        />
                        &nbsp;Ascending
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="des"
                            name="nameOption"
                            value="des"
                            onChange={radioButtonChangeHandler}
                        />
                        &nbsp;Descending
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Order;