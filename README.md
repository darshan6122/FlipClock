# Flip Clock

A simple **flip clock** that displays the current time with a smooth flipping animation for each digit. The clock is fully responsive and the digits flip when they change, providing an aesthetically pleasing, traditional flip clock experience with rounded edges.

## Features

- **Flipping effect**: Each changing digit flips smoothly.
- **Rounded edges**: The flip cards have rounded corners for a modern look.
- **Responsive design**: The clock scales based on the viewport size, ensuring it's perfect for both small and large screens.
- **Live time update**: The clock updates every second to display the current time.

## Demo

You can see a live demo of the clock by opening the `index.html` file in your web browser.

## File Structure

```/flip-clock
  ├── index.html
  ├── styles.css
  ├── script.js
  └── README.md
```


### 1. `index.html`
The main HTML file that contains the structure for the flip clock.

### 2. `styles.css`
The CSS file that styles the clock, including the flip animation and rounded edges.

### 3. `script.js`
The JavaScript file handles the logic for updating the clock every second and triggering the flip animation for the changing digits.

---

## Installation

To run this flip clock on your local machine:

1. **Download the project files**:
    - Clone or download this repository to your local computer.

2. **Open `index.html`**:
    - Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari).

3. **View the flip clock**:
    - The clock will start running and updating every second.

---

## Customization

- **Font Size**: The clock's font size adjusts to the viewport width (via `font-size: 10vw;` in CSS). You can change this value in the `styles.css` file to make the clock bigger or smaller.
- **Color Scheme**: The background and digit colors can be customized in the `styles.css` file under `.flip-card .front` and `.flip-card .back`.
- **Animation Speed**: The speed of the flip animation can be adjusted by modifying the `transition` duration in the `.flip-card` CSS class:
    ```css
    transition: transform 0.6s ease-in-out;
    ```
    Change `0.6s` to your desired duration for a faster or slower flip effect.

- **Border Radius**: The rounded edges of the flip cards can be adjusted by changing the `border-radius` value in the `.flip-card` and `.flip-card .front`/`.back` CSS classes:
    ```css
    border-radius: 0.5em;
    ```

---

## License

This project is open-source and available under the MIT License.

---

## Acknowledgements

- This project was built using **HTML**, **CSS**, and **JavaScript**.
- Special thanks to online tutorials and resources for helping in the creation of this flip clock.

---

## Contact

For any questions or suggestions, feel free to open an issue or contact me directly via email at [your-email@example.com](mailto:your-email@example.com).
