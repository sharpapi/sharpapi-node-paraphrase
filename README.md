![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Paraphrase")

# SharpAPI NodeJS Paraphrase SDK

## 🚀 Automate text paraphrasing with AI-powered API

### Leverage AI API to generate paraphrased versions of your text content for content creation, SEO, and more.

**SharpAPI.com Node.js Paraphrase SDK** enables developers to integrate advanced text paraphrasing capabilities into their Node.js applications. This SDK simplifies interaction with the SharpAPI paraphrasing service, providing a seamless way to generate alternative versions of your text content.

See more at [SharpAPI.com Website &raquo;](https://sharpapi.com/)

[![Version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-paraphrase.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-paraphrase.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

## Requirements

- Node.js >= 16.x

## Installation

```bash
npm i @sharpapi/sharpapi-node-paraphrase
```

---

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
   - [Initialization](#initialization)
   - [Available Methods](#available-methods)
4. [Examples](#examples)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation

### Prerequisites

- **Node.js** v16 or higher
- **npm** (Node Package Manager)

### Install via npm

You can install the SharpAPI Node.js Paraphrase SDK using npm:

```bash
npm install @sharpapi/sharpapi-node-paraphrase
```

### Install via Yarn

Alternatively, if you prefer using Yarn:

```bash
yarn add @sharpapi/sharpapi-node-paraphrase
```

---

## Configuration

### Setting Up Environment Variables

To protect your credentials, it's recommended to use a `.env` file to store your SharpAPI API key. Follow these steps:

1. **Create a `.env` File**

   In the root directory of your project, create a file named `.env`:

   ```plaintext
   SHARP_API_KEY=your_actual_api_key_here
   ```

2. **Install `dotenv` Package**

   To load environment variables from the `.env` file, install the `dotenv` package:

   ```bash
   npm install dotenv
   ```

3. **Load Environment Variables**

   At the beginning of your application (e.g., in `app.js` or `index.js`), add the following line to load the environment variables:

   ```javascript
   require('dotenv').config();
   ```

4. **Ensure `.env` is Ignored**

   Add `.env` to your `.gitignore` file to prevent sensitive information from being committed to version control:

   ```plaintext
   # .gitignore
   .env
   ```

---

## Usage

### Initialization

First, import and initialize the `SharpApiParaphraseService` with your API key:

```javascript
// Load environment variables
require('dotenv').config();

// Import the SharpApiParaphraseService
const { SharpApiParaphraseService } = require('@sharpapi/sharpapi-node-paraphrase');

// Initialize the SharpApiParaphraseService
const apiKey = process.env.SHARP_API_KEY;
const paraphraseService = new SharpApiParaphraseService(apiKey);
```

### Available Methods

The `SharpApiParaphraseService` class provides a method to paraphrase text:

#### paraphrase(text, language, maxLength, voiceTone, context)

- **Description:** Generates a paraphrased version of the provided text.
- **Parameters:**
  - `text` (string): The text to paraphrase.
  - `language` (string, optional): Language of the paraphrase (default: 'English').
  - `maxLength` (number, optional): Maximum length of the paraphrased text.
  - `voiceTone` (string, optional): Tone of the voice in the paraphrase (e.g., 'Neutral').
  - `context` (string, optional): Additional context for paraphrasing.
- **Returns:** A Promise that resolves to a status URL.
- **Usage:**
  ```javascript
  const statusUrl = await paraphraseService.paraphrase(
    "Original text to paraphrase.",
    "English",
    100,
    "Neutral",
    null
  );
  
  // Fetch the results using the core service
  const { SharpApiCoreService } = require('@sharpapi/sharpapi-node-core');
  const coreService = new SharpApiCoreService(apiKey);
  const resultJob = await coreService.fetchResults(statusUrl);
  console.log(resultJob.getResultJson());
  ```

## Examples

### Basic Paraphrasing

```javascript
require('dotenv').config();
const { SharpApiParaphraseService } = require('@sharpapi/sharpapi-node-paraphrase');
const { SharpApiCoreService } = require('@sharpapi/sharpapi-node-core');

async function paraphraseExample() {
  const apiKey = process.env.SHARP_API_KEY;
  const paraphraseService = new SharpApiParaphraseService(apiKey);
  const coreService = new SharpApiCoreService(apiKey);

  try {
    // Original text to paraphrase
    const originalText = "The quick brown fox jumps over the lazy dog.";
    
    // Paraphrase the text
    const statusUrl = await paraphraseService.paraphrase(originalText);
    
    // Fetch the results
    const resultJob = await coreService.fetchResults(statusUrl);
    const result = resultJob.getResultJson();
    
    console.log("Original Text:", originalText);
    console.log("Paraphrased Text:", result.paraphrased_text);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

paraphraseExample();
```

### Advanced Paraphrasing with Options

```javascript
require('dotenv').config();
const { SharpApiParaphraseService } = require('@sharpapi/sharpapi-node-paraphrase');
const { SharpApiCoreService } = require('@sharpapi/sharpapi-node-core');

async function advancedParaphraseExample() {
  const apiKey = process.env.SHARP_API_KEY;
  const paraphraseService = new SharpApiParaphraseService(apiKey);
  const coreService = new SharpApiCoreService(apiKey);

  try {
    // Original text to paraphrase
    const originalText = "The company has experienced significant growth in the last quarter, with revenue increasing by 25%.";
    
    // Paraphrase the text with specific options
    const statusUrl = await paraphraseService.paraphrase(
      originalText,
      "English",
      150,
      "Professional",
      "Financial report"
    );
    
    // Fetch the results
    const resultJob = await coreService.fetchResults(statusUrl);
    const result = resultJob.getResultJson();
    
    console.log("Original Text:", originalText);
    console.log("Paraphrased Text:", result.paraphrased_text);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

advancedParaphraseExample();
```

---

## API Documentation

For detailed usage and API methods, please refer to the [SharpAPI.com Documentation](https://sharpapi.com/documentation).

---

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

---

## Contributing

Check [CONTRIBUTION.md](CONTRIBUTION.md) file for details.

---

## License

This project is licensed under the [MIT License](LICENSE.md).

---

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/sharpapi/sharpapi-node-client/issues) or contact support at [contact@sharpapi.com](mailto:contact@sharpapi.com).

---

## Social Media

🚀 For the latest news, tutorials, and case studies, don't forget to follow us on:
- [SharpAPI X (formerly Twitter)](https://x.com/SharpAPI)
- [SharpAPI YouTube](https://www.youtube.com/@SharpAPI)
- [SharpAPI Vimeo](https://vimeo.com/SharpAPI)
- [SharpAPI LinkedIn](https://www.linkedin.com/products/a2z-web-ltd-sharpapicom-automate-with-aipowered-api/)
- [SharpAPI Facebook](https://www.facebook.com/profile.php?id=61554115896974)

---

**Happy Coding with SharpAPI Node.js Paraphrase SDK!**