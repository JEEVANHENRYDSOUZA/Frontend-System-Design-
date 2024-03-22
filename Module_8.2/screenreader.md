## Screen Reader

### What is the use of Screen Reader
- To convert text to speech

### Third Party Screen Readers
1. **JAWS (Job Access With Speech)**: JAWS is one of the most widely used screen readers for Windows, developed by Freedom Scientific. It provides comprehensive support for accessing and navigating desktop applications, web browsers, and other software, using synthesized speech and keyboard commands.

2. **NVDA (NonVisual Desktop Access)**: NVDA is a free and open-source screen reader for Windows, developed by NV Access. It offers similar functionality to JAWS, including support for accessing and interacting with a wide range of applications and web content through speech output and keyboard navigation.

3. **VoiceOver**: VoiceOver is a built-in screen reader for macOS, iOS, and iPadOS devices, developed by Apple. It provides speech and braille output for navigating and interacting with the operating system, applications, and web content, as well as support for gesture-based navigation on touch-enabled devices.

4. **TalkBack**: TalkBack is a built-in screen reader for Android devices, developed by Google. It offers spoken feedback and touch exploration to assist users with navigating and interacting with their devices, including accessing apps, notifications, and web content.

5. **ChromeVox**: ChromeVox is a screen reader extension for the Google Chrome web browser, developed by Google. It provides spoken feedback and keyboard navigation for accessing and interacting with web content, including support for reading aloud entire web pages and navigating through elements using shortcuts.

### Accesibility For Screen Readers
- Document Structure
    Creating a well-structured document is crucial for ensuring accessibility, especially for screen reader users. Here's a guide on how to structure documents effectively for screen readers:

    1. **Use Semantic HTML**: Semantic HTML elements provide meaning to the content, making it easier for screen readers to interpret. Use appropriate elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` to structure your document.

    2. **Headings**: Use heading elements (`<h1>`, `<h2>`, `<h3>`, etc.) to organize content hierarchically. Headings should reflect the logical structure of the document, with `<h1>` as the main heading followed by subheadings (`<h2>`, `<h3>`, etc.) for sections and subsections.

    3. **Lists**: Use `<ul>` (unordered lists) and `<ol>` (ordered lists) for lists of items. Screen readers announce lists and provide navigation options for users to jump between list items.

    4. **Links**: Ensure that all links (`<a>` elements) have descriptive and meaningful text. Avoid using generic phrases like "click here" or "read more" as link text. Use the `title` attribute to provide additional context if necessary.

    5. **Images and Alternative Text**: Provide descriptive alternative text (`alt` attribute) for images to convey their purpose or content to screen reader users. For decorative images, use empty (`alt=""`) or null (`alt`) attributes to indicate that the image is decorative and should be ignored by screen readers.

    6. **Tables**: Use tables (`<table>`, `<th>`, `<tr>`, `<td>`) for tabular data and ensure they have appropriate headers (`<th>`) for each row and column. Screen readers can use table headers to navigate and interpret tabular data correctly.

    7. **Forms**: Label form fields (`<label>` elements) properly and associate them with their corresponding input fields using the `for` attribute or by nesting the input field within the label element. Use the `placeholder` attribute for additional hints, but ensure it doesn't replace the label.

    8. **Landmarks and Regions**: Use landmark roles (`role="banner"`, `role="navigation"`, `role="main"`, `role="complementary"`, `role="contentinfo"`, etc.) and ARIA landmarks to identify important sections of the document. Landmarks provide navigation landmarks for screen reader users to easily navigate to different sections of the page.

    9. **Accessible Rich Internet Applications (ARIA)**: Use ARIA attributes and roles to enhance the accessibility of interactive elements and dynamic content. ARIA roles (`role`), states (`aria-`), and properties (`aria-`) can be used to convey additional information about elements and their behavior to screen reader users.

### Aria Labelled by attribute
- The `aria-labelledby` attribute is used in HTML to associate a label with an element using the ID of another element on the page. This is particularly useful when the label text is not directly adjacent to the associated control or when the label requires additional formatting that is not possible with a standard HTML label element.

Here's how `aria-labelledby` works:

1. **Define a Label Element**: Create an element that serves as the label for another element. This could be a `<span>`, `<div>`, or any other suitable HTML element.

```html
<span id="label1">First Name</span>
```

2. **Use `aria-labelledby` Attribute**: Add the `aria-labelledby` attribute to the element you want to associate with the label. Set the value of the attribute to the ID of the label element.

```html
<input type="text" aria-labelledby="label1">
```

### Aria described by 
- The `aria-describedby` attribute is used in HTML to provide additional descriptive text or information for an element, typically when the content is too complex to be adequately conveyed through the element's default label or accessible name. This attribute is particularly useful for enhancing the accessibility of form controls, widgets, and other interactive elements.

Here's how `aria-describedby` works:

1. **Define Descriptive Text**: Create an element that contains the additional descriptive text or information you want to associate with another element.

```html
<div id="description1">Please enter your first name</div>
```

2. **Use `aria-describedby` Attribute**: Add the `aria-describedby` attribute to the element you want to associate with the descriptive text. Set the value of the attribute to the ID of the descriptive element.

```html
<input type="text" aria-describedby="description1">
```

### Aria roles , states , properties
- In the context of web accessibility and ARIA (Accessible Rich Internet Applications) specifications, "roles," "states," and "properties" are used to enhance the accessibility of web content for users with disabilities, particularly those who rely on assistive technologies like screen readers. Here's what each of these terms refers to:
1. **Roles**:
   - ARIA roles define the type or purpose of an element in a web page or web application.
   - Roles help assistive technologies like screen readers understand the structure and behavior of content on the page.
   - Roles can be assigned to HTML elements using the `role` attribute.
   - Some common ARIA roles include `role="button"`, `role="link"`, `role="textbox"`, `role="navigation"`, `role="alert"`, and many more.
   - Roles allow developers to create more semantic and accessible web content by accurately describing the purpose and functionality of elements.

2. **States**:
   - ARIA states represent the current condition or state of an element, such as whether it is expanded or collapsed, selected or not selected, enabled or disabled, etc.
   - States help convey dynamic changes in the user interface to assistive technologies.
   - States can be dynamically updated using JavaScript to reflect changes in the UI.
   - Some common ARIA states include `aria-expanded`, `aria-checked`, `aria-selected`, `aria-disabled`, `aria-hidden`, etc.
   - States allow developers to provide real-time feedback to users with disabilities about the state of interactive elements on the page.

3. **Properties**:
   - ARIA properties provide additional information about an element that is not conveyed by its role or state.
   - Properties help define the characteristics or behavior of an element that may affect its accessibility.
   - Properties are typically static and do not change dynamically like states.
   - Some common ARIA properties include `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-owns`, `aria-posinset`, `aria-setsize`, etc.
   - Properties allow developers to provide supplementary information to assistive technologies and improve the accessibility of web content.

