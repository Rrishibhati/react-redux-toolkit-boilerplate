#   react-redux-toolkit-boilerplate

#   Installation flow
    git init
    npm install react react-dom @reduxjs/toolkit react-redux react-router-dom
    npm install -D parcel @babel/core

    Add script in package.json
    "scripts": {
        "test": "\"jest\"",
        "start": "parcel index.html",
        "build": "parcel build index.html"
    }

    React redux configuration
    1. Create Store
        configureStore() --- from RTK
    
    2. Provide store to app
        <Provider store={store}></Provider>   --- from react-redux

    3. Slice
            counterSlice = createSlice({
                name,
                initialState,
                reducers: {
                    setCounter : (state, action) => { state = action.payload }
                }
            })

            export { setCounter } from counterSlice.actions
            export default counterSlice.reducer

    4. Put that slice in store
        reducer : {
            counter : counterSlice,
            user: userSlice
        }

    5. use useDispatch and useSelector hooks for update
        const counter = useSelector(store => store.counter.count)
        const dispatch = useDispatch()
        const handleSetCounter = param => dispatch(setCounter(param))

    BestPractices
        Allways retrive data from store whatever you need in component only
            Good Practice 
                const counter = useSelector(store => store.counter.count)

            Bad Practice
                const store = useSelector(store => store)
                const counter = store.counter.count

