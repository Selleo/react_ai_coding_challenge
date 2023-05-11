# Coding challenge: Image upload with AI generated alt text.

### Problem description

When you as a developer add images to your app you can specify `alt` attribute. However, when your app allows users to add images, they rarely contain alt text. So in order to improve a11y you want user uploaded images to have alt text as well. But to spare the users some typing you will generate alt text propositions for them.

### The app consists
- Image upload form
- List of images with alt text

### Requirements for image upload form
- The form should allow the user to select an image file to upload
- Only allow `jpeg's` and `png's` smaller than `10MB`
- The form should display a preview of the selected image
- Immediately after file selection perform the upload to image hosting site. (https://cloudinary.com/ has a free tier, but you can use anything)
- After the upload pass the image URL to asticaVision API [Example](https://www.astica.org/code-examples/javascript-API/asticaVision_sample.html) [DOCS](https://www.astica.org/api-docs/asticaVision/) to generate `description`
- Display information that `alt` suggestion is being generated when the upload and AI recognising process takes place
  - Do not block the alt textbox so user can always add own text manually (in case of the AI recognising fail or timeout)
- Display: 
  - Display information that the user will be able to edit the suggested alt text before submitting the form.
  - button `Accept description` which takes the AI generated description and inserts it in alt textbox.
    - Upon clicking the button replace anything that user wrote in the textbox.
- The user should be able to edit the alt text proposal before submitting the form
  - The submit button should be disabled if image is not uploaded and alt text is empty
- The form should submit the uploaded image by calling `createImage` from `src/api/image/requests.js` with `url, alt` params

### Requirements for displaying the list of images
- Load all images using `fetchImages` from `src/api/image/requests.js`
- The list should display all the uploaded images with their respective alt text
- To confirm that alt text works correctly you can open the voiceover utility on your mac

---

### App setup:

- `npm run app:setup`
- In separate terminal run `npm run start:server`
- Make sure you have the secret API key in the `.env.local` file (ask @arekm)

That's all. You can start working on the app.
