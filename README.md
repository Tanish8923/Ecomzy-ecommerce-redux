## Installation

1. **Clone the repository**:
   
   git clone https://github.com/your-username/project-name.git

2. **Navigate to the project directory**:
 
   cd project-name

3. **Install dependencies**:

    npm install

4. **Run the app**:

    npm start


# ✨ Simplifying State Management: Building Ecomzy 🛒 with Redux Toolkit and React! ✨

Excited to share my recent project **Ecomzy-ecommerce-redux**, where I explored **Redux Toolkit** to manage global state effectively in a dynamic e-commerce application. This project deepened my understanding of state management, API handling, and user experience flow. Here's what I learned and implemented:

---

## 🛠️ Key Features and Highlights:

### 🔹 Redux Toolkit Integration
  - Created `cartSlice` and `authSlice` to handle cart and authentication states.
  - Combined slices into a centralized store for seamless state management.
  - Wrapped the app in a `Provider` and passed the store as props, making global states accessible across the app.

### 🔹 Hooks in Action
  - Explored `useDispatch` for dispatching actions to update the state.
  - Used `useSelector` to access specific slices of the state efficiently.

### 🔹 Pages and Components
  - **Pages**: Home, Login, SignUp, Cart for a complete e-commerce flow.
  - **Components**: NavBar, Footer, Product, CartItem, LoginForm, SignupForm, and Spinner for modular and reusable code.

### 🔹 Functionalities and User Flow
  - **Dynamic NavBar**:
    - Displays **Sign In** and **Sign Up** buttons if the user is logged out.
    - Shows **Cart** and **Logout** buttons if logged in.
  
  - **Home Page**:
    - Displays all products fetched from an API.
    - Products have an **Add to Cart** button, which toggles to **Remove from Cart** if the product is already in the cart.

  - **Authentication Flow**:
    - Attempting to add products to the cart without logging in redirects users to the **Sign Up** page.
    - A toast notification pops up: *"Please log in or sign up to add items to your cart."*

  - **Cart Page**:
    - Displays all items added to the cart along with total items and total price.
    - Users can remove products directly from the cart.

  - **Remove from Home**:
    - Products can also be removed from the cart while browsing on the Home page.

---

## 🔹 Libraries and Tools
  - **Redux Toolkit**, **React Icons**, **React Hot Toast**, **React Router DOM** for a feature-rich and robust application.

### 🔹 Tailwind CSS for Styling
  - Styled the entire application using **Tailwind CSS**, maintaining a clean and modern interface.

---

## 🔍 Key Learnings:
  - **Redux Toolkit** simplifies global state management and enhances scalability.
  - Using `useDispatch` and `useSelector` makes managing and accessing state effortless.
  - Designing user flows like authentication-first actions (e.g., adding to the cart) creates a smoother user experience.
  - Modular component design improves code reusability and maintainability.

---

Building **Ecomzy** was an exciting experience that expanded my knowledge of **Redux Toolkit** and state-driven development. Looking forward to exploring more advanced concepts in React! 🚀

🔗 Check out the project on GitHub: [Ecomzy-ecommerce-redux](https://github.com/Tanish8923/Ecomzy-ecommerce-redux)

---

#React #ReduxToolkit #Ecommerce #StateManagement #FrontendDevelopment #TailwindCSS #ProjectBasedLearning #WebDevelopment
