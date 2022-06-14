import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decreaseAsyc, increaseAsyc } from "../modules/counterAsyc";

const CounterAsycContainer = () => {
    const number = useSelector((state) => state.counterAsyc.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increaseAsyc()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decreaseAsyc()), [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterAsycContainer;
