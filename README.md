![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Text Paraphraser API for Node.js

## ✍️ Rewrite text while preserving meaning — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-paraphrase.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-paraphrase.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Text Paraphraser** rewrites your content while maintaining the original meaning. Perfect for content creation, avoiding plagiarism, and generating alternative versions of text with customizable voice tones.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-paraphrase
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiParaphraseService } = require('@sharpapi/sharpapi-node-paraphrase');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiParaphraseService(apiKey);

const text = 'The quick brown fox jumps over the lazy dog.';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.paraphrase(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRS).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiParaphraseService } = require('@sharpapi/sharpapi-node-paraphrase');

const service = new SharpApiParaphraseService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/paraphrase-text).

---

## Use Cases

- **Content Creation**: Generate alternative versions of marketing copy
- **Plagiarism Avoidance**: Rewrite content while keeping the original meaning
- **Simplification**: Make complex text more accessible
- **Tone Adjustment**: Change the writing style (formal, casual, professional)
- **A/B Testing**: Create variations for content testing
- **Content Repurposing**: Adapt content for different platforms

---

## API Endpoint

**POST** `/content/paraphrase`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRS)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/paraphrase-text)

---

## Related Packages

- [@sharpapi/sharpapi-node-translate](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate)
- [@sharpapi/sharpapi-node-proofread](https://www.npmjs.com/package/@sharpapi/sharpapi-node-proofread)
- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
