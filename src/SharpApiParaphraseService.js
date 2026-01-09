const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for paraphrasing text using SharpAPI.com
 */
class SharpApiParaphraseService extends SharpApiCoreService {
  /**
   * Generates a paraphrased version of the provided text.
   *
   * @param {string} text
   * @param {string|null} language
   * @param {number|null} maxLength
   * @param {string|null} voiceTone
   * @param {string|null} context
   * @returns {Promise<string>} - The status URL.
   */
  async paraphrase(text, language = null, maxLength = null, voiceTone = null, context = null) {
    const data = { content: text };
    if (language) data.language = language;
    if (maxLength) data.max_length = maxLength;
    if (voiceTone) data.voice_tone = voiceTone;
    if (context) data.context = context;

    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_PARAPHRASE.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiParaphraseService };