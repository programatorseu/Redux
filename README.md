# Redux

With hooks we do not need redux 

-> extremely testable

for testing state 

when we have state that change from A --> B 

we want to test it 

--> pull out state into data store 

--> action 



```bash
npm i redux@4.1.2 react-redux@7.2.6
```

2.create store.js and enanble dev tools

	- checking if we are in browser and have extension enabled -- > enable

or do nothin 



src/reducers folder 

reducers/index.js 

we import `src/reducers/` -> without anything in the end - it take by deafult `index.js`

### 1.1 Reducers

src/reducers/index.js

-> combine reducer - is like giantic switch stmt on each passed tiny reducer 

reducer take current state and action ( must have type)

​	-> it need always return state

`action.payload` -> value of modified state  --> flux standard actions (spec with payload)

reducer will be called with every change therefore we need to by default pass value : 

```js
export default function location(state = "Seattle, WA", action) {
    switch(action.type) {
        case "CHANGE_LOCATION":
            return action.payload;
        default:
            return state;
    }
}
```



### 1.2 Action Creator pattern

src/actionCreator/changeTheme.js

-> take paylaod and return object

```js
export default function changeLocation(location) {
    return {type: "CHANGE_LOCATION", payload: location}
}
```



### 1.3 Providers

App.js

-> connect redux to react 

1. delete useState -> we are not going to use hooks 
2. import provider from react redux
3. import store from store 
4. replace Theme.Context provider with `<Provider store={store}>`



Search:

->> import useSelector for our <option>

-> `useSelector` pass state and return from store only part we care about like for example : 

```>s
  const animal = useSelector((state) => state.animal);
```



### 1.4 Dispatching Actions

1. get useDispatch - >to update store in reducer 
2. import useDispatach from react-redux

3. import all action creators
4. call it from input

```js
  <select
    value={theme}
    className="w-60 mb-5 block"
    onChange={(e) => dispatch(changeTheme(e.target.value))}
    onBlur={(e) => dispatch(changeTheme(e.target.value))}
  >
```

### 1.5 Redux Dev tools

install firefox add-on `Redux DevTools`

