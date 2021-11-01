import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
import { useSelector } from 'react-redux'

const Shop = () => {
    const balance = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const { withdrawMoney, deposityMoney } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.deposityMoney(100)) }}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Update Balance {balance}
            <button className="btn btn-primary mx-2" onClick={() => { deposityMoney(100) }}>+</button>
        </div>
    )
}

export default Shop