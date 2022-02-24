1. What is the difference between Component and PureComponent? give an
example where it might break my app.

A pure component will check for changes on its own props before continuing with its render, 
it uses a shallow comparison so it won’t find any changes on props that doesn’t change its reference
leading to situations where we skip the render call when without knowing it.


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

We normally use ShouldComponentUpdate con a component to skip a render if our props didn’t 
changed but if we’re consuming a context our component will always re-render when the value
of the context provider changes, that could lead to unwanted re-renders


3. Describe 3 ways to pass information from a component to its PARENT.

Render props
Callback props
Redux


4. Give 2 ways to prevent components from re-rendering.

React.memo
ShouldComponentUpdate ( PureComponents )


5. What is a fragment and why do we need it? Give an example where it might
break my app.

Normally we have to return the html elements that compose our component wrapped inside an 
html element but maybe we could be in a situation where we want to return a group of html elements
without the wrapper, that’s what we use the Fragment for.
It can break our app CSS because Fragments doesn’t count as elements in our DOM


6. Give 3 examples of the HOC pattern.

Redux connect function is a HOC, it adds as props the state we need to the component we provided.
React router withRouter function adds all the props related to the current app location to the component provided.
We could use it to connect a component to our API and feed it fetched data


7. what's the difference in handling exceptions in promises, callbacks and
async...await.

promises use catch to handle errors, if something fails in a group of promises the error will arrive to the closes catch 
to handle the problem, the promise chain can continue if needed.
callbacks and async…await must use the common try…catch blocks for error handling


8. How many arguments does setState take and why is it async.

It can take a value or a function (if we want to set a new state while using the old one the correct way is to use a 
function with the previous state as a parameter and the new state as a return value), setState doesn’t change the state
immediately  but instead queues a state change so in situation were change multiple states at once we won’t have a big 
hit on performance due to multiple renders


9. List the steps needed to migrate a Class to Function Component.

create a function that returns everything inside the render method of the class component
identify the state and move it to hooks
move all the side effects to useEffect
Change the component lifecycle methods for its hooks counterparts
	shouldComponentUpdate = react memo
	willUnmount = useEffect (the function inside useEffect must return a callback)
	didMount = useEffect with empty dependencies array


10. List a few ways styles can be used with components.

Inline styling
Styled components
CSS classes
CSS modules


11. How to render an HTML string coming from the server.

Using the React DOM server API