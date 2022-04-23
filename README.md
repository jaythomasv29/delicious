# delicious
A react app to display recipes from an API along with usage of react-router and image-slider
Demo Here: 

------
### `UseEffect()` Hook
* Use of useEffect, similar to componentDidMount() to asynchronously retrieve data from an API endpoint for recipes.

-----------

### Styled Components
* Used CSS variables to keep CSS in scope of components
* Rendered various styles and usage of flexbox and css grid
-----------

### React Router
* `<Routes>, <Route>, <NavLink>, <BrowserRouter> were all used`
* `useParams()` hook to get parameter dynamically
-----------
### Framer-Motion

-----------
### Async Fetching Data from API
* `async / await` functions to `fetch(url)` from various endpoints
* Utilized `useEffect() to load recipe data and load depending on parameter once user clicks on UI
### React-Splide
* Using `<Splide>` and `<SplideSlide>` to create a carouself

-----------

### React Icons
* Various react icons from 
* [React Icons Reference](https://react-icons.github.io/react-icons)
### CSS Grid
* Dynamically add a CSS Grid that fits to screen using `grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));`

### Framer Motion
* [Framer Motion Documentation](https://www.framer.com/docs/)
* Add pleasant animations during page load using props `<motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    />`