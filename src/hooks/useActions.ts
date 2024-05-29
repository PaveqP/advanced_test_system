import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as testActions } from "../store/tests/tests.slice";

const rootActions = {
    ...testActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}