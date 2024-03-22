## Focus Management
### Tab - Based Management
- Tab-based focus management refers to the practice of managing keyboard focus using the "Tab" key as users navigate through interactive elements on a web page. 
- It's an essential aspect of web accessibility, ensuring that users who rely on keyboard navigation, such as those with mobility impairments or visual impairments, can access and interact with all parts of a web application.

1. **Tab Navigation**: As the user presses the "Tab" key, focus moves sequentially through the interactive elements on the page. Each time the "Tab" key is pressed, focus shifts to the next focusable element in the document's order.

- HTML element that support tab based management by default 
In HTML, there are certain elements that support tabbing by default, meaning they are focusable using the "Tab" key without requiring any additional attributes or scripting. These elements are typically interactive or actionable elements that users expect to be able to interact with using the keyboard. Here are some common examples:

    1. **Links (`<a>`)**: Anchor elements (`<a>`) are focusable by default and can be activated by pressing the "Enter" key.

    2. **Buttons (`<button>`)**: Button elements (`<button>`) are focusable by default and can be activated by pressing the "Enter" key.

    3. **Form Fields**:
        - **Text Inputs (`<input type="text">`)**: Text input fields are focusable by default, allowing users to input text.
        - **Textareas (`<textarea>`)**: Textarea elements are focusable by default and allow users to input multi-line text.
        - **Checkboxes (`<input type="checkbox">`)**: Checkbox elements are focusable by default and can be toggled using the "Space" key.
        - **Radio Buttons (`<input type="radio">`)**: Radio button elements are focusable by default and can be selected using the "Space" key.
        - **Select Menus (`<select>`)**: Select elements are focusable by default, allowing users to select options from a dropdown menu.

    4. **Interactive Elements**:
        - **Buttons (`<button>`)**: In addition to being focusable, button elements can also execute JavaScript functions or trigger form submissions.
        - **Input Buttons (`<input type="button">`)**: Input buttons are focusable and can also execute JavaScript functions or trigger form submissions.

    5. **Content Sections**:
        - **Anchors with `href` Attributes**: Anchor elements with valid `href` attributes that point to in-page sections or anchors (`<a href="#section">`) can be focused and activated, allowing users to navigate within the same page.

### Elements that do no support tab 
- The tabindex attribute in HTML is used to explicitly specify the tab order of focusable elements on a web page. By default, focusable elements are navigated by the user in the order they appear in the HTML source code. 
- However, the tabindex attribute allows developers to customize this order, making it possible to control which elements receive focus first when the user navigates using the "Tab" key.

### KeyBoard Shortcut
- A keyboard shortcut is a combination of one or more keys that, when pressed simultaneously or in sequence, performs a specific action within a software application or operating system. 
- Keyboard shortcuts are designed to improve productivity, efficiency, and accessibility by allowing users to execute commands without relying on mouse input or navigating through menus.


### Skip Links 
- Skip links are anchor links placed at the beginning of a web page's HTML source code that allow keyboard users to skip directly to specific sections of the page, bypassing repetitive navigation links and other content that may not be relevant to them. 
- Skip links are particularly useful for users who navigate websites using screen readers or keyboard-only input devices, as they provide a way to quickly access the main content of a page without having to tab through every link in the navigation menu.

Here's how skip links typically work:

1. **Placement**: Skip links are usually placed at the very beginning of the HTML source code of a web page, before any other content. They are often hidden visually using CSS (`display: none;`) so that they are only visible to screen readers and keyboard users.

2. **Anchor Links**: Skip links are anchor links (`<a>` elements) with `href` attributes that point to the corresponding sections of the page that users want to skip to. These sections are typically identified by the use of HTML `id` attributes.

   ```html
   <a href="#main-content" class="skip-link">Skip to main content</a>
   ```

3. **Section IDs**: Each section of the page that users may want to skip to should have a unique `id` attribute assigned to it. This `id` is then used as the target for the skip link's `href` attribute.

   ```html
   <div id="main-content">
       <!-- Main content of the page -->
   </div>
   ```

4. **Styling**: Skip links are often visually hidden by default using CSS to avoid cluttering the design of the page. However, they may become visible when focused to provide visual feedback to keyboard users.

   ```css
   .skip-link {
       position: absolute;
       left: -9999px;
       top: auto;
       width: 1px;
       height: 1px;
       overflow: hidden;
   }

   .skip-link:focus {
       left: auto;
       top: auto;
       width: auto;
       height: auto;
       overflow: visible;
   }
   ```
5. **Accessibility**: It's important to ensure that skip links are accessible to all users, including those who use screen readers. This includes providing descriptive text within the skip link to inform users of its purpose and making sure that the link is keyboard accessible and properly announced by screen readers.

### Active Element 
- The "active element" in web development refers to the currently focused element on a webpage.
-  When users interact with a webpage using their keyboard, mouse, or other input devices, one of the elements on the page is typically highlighted or otherwise visually indicated to show that it has focus

### Tab Trapping 
- Tab trapping, also known as keyboard trap or focus trap, refers to a technique used in web development to restrict keyboard focus within a specific region or component of a web page. 
- This prevents users from tabbing out of a certain area unintentionally, ensuring that keyboard focus remains within a defined boundary.


### Page Navigation 
Page navigation refers to the process of moving between different pages or sections within a website or web application. Effective page navigation is crucial for providing users with a seamless and intuitive browsing experience, allowing them to easily find and access the content they're looking for. There are several common methods of page navigation:

1. **Hyperlinks**: Hyperlinks are the most fundamental method of navigation on the web. Users can click on text or images that are linked to other pages or sections within the same page to navigate.

2. **Navigation Menus**: Navigation menus, typically located at the top or side of a webpage, provide links to important sections or pages of a website. These menus can be horizontal or vertical and may include dropdown menus for organizing and accessing subpages.

3. **Breadcrumb Navigation**: Breadcrumbs are a navigational aid that shows the hierarchical structure of the website and indicates the user's current location within that structure. Users can click on breadcrumb links to navigate to higher-level pages.

4. **Pagination**: Pagination is used to divide large amounts of content across multiple pages, such as search results or product listings. Users can navigate through pages using numbered links or "Previous" and "Next" buttons.

5. **Tabs**: Tabs are commonly used to organize content into different sections, with each tab representing a different page or category. Users can click on tabs to switch between sections without leaving the current page.

6. **Search Functionality**: Search bars allow users to quickly find specific content by entering keywords or phrases. Search results typically include links to relevant pages or sections of the website.

7. **Sitemap**: A sitemap is a hierarchical list of all the pages on a website, often organized by category or section. Users can navigate through the sitemap to discover pages they may not have found through other means.

8. **Anchor Links**: Anchor links are used to navigate within the same page by linking to specific sections or headings. Users can click on anchor links in a table of contents or within the text to jump to relevant sections.

9. **Buttons and Calls to Action**: Buttons and calls to action (CTAs) can be used to prompt users to take specific actions, such as signing up for a newsletter, downloading a file, or completing a purchase.

10. **Footer Links**: Footer sections often contain links to important pages, such as the privacy policy, terms of service, contact information, and social media profiles.
