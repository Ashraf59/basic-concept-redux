
//select DOM elements
const counterEl = document.getElementById("counter")
const incrementEl = document.getElementById("increment")
const decrementEl = document.getElementById("decrement")

//action identi

//Step-1: initial state
const initialState = {
    value: 0,
};

//Step-2: create reducer function
function counterReducer(state = initialState, action){
    if(action.type === "increment"){
        return{
            ...state,
            value: state.value + action.payload,
        }
    }
    else if(action.type === "decrement"){
        return{
            ...state,
            value: state.value - action.payload,
        }
    }

    else{
        return state;
    }
}

//Step-3: create redux store
const store = Redux.createStore(counterReducer)

//Step-4: Subscribe redux (eita jehetu react app na,
// venila javaScript er moddome kaj korci tai amader ke HTML ke UI te dekanor jonno store take subscribe korte hobe.)
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

//Updated initial value on UI
render();

//Store subcribe for rendaring on UI
store.subscribe(render)

//Step-4: Button Click Listener
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
        payload: 5
    });
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
        payload: 2
    })
})