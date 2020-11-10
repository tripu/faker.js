/**
 *
 * @namespace faker.image
 * @property {object} lorempixel - faker.image.lorempixel
 * @property {object} unsplash - faker.image.unsplash
 * @property {object} lorempicsum - faker.image.lorempicsum
 * @property {object} thispersondoesnotexist - faker.image.thispersondoesnotexist
 * @default Default provider is unsplash image provider
 */
var Image = function (faker) {

  var self = this;
  var Lorempixel = require('./image_providers/lorempixel');
  var Unsplash = require('./image_providers/unsplash');
  var LoremPicsum = require('./image_providers/lorempicsum');
  var Thispersondoesnotexist = require('./image_providers/thispersondoesnotexist');

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.image
   */
  self.image = function (width, height, randomize) {
    var categories = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return self[faker.random.arrayElement(categories)](width, height, randomize);
  };
  /**
   * avatar
   *
   * @method faker.image.avatar
   */
  self.avatar = function () {
    return faker.internet.avatar();
  };
  /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @method faker.image.imageUrl
   */
  self.imageUrl = function (width, height, category, randomize, https) {
    var width = width || 640;
    var height = height || 480;
    var protocol = 'http://';
    if (typeof https !== 'undefined' && https === true) {
      protocol = 'https://';
    }
    var url = protocol + 'placeimg.com/' + width + '/' + height;
    if (typeof category !== 'undefined') {
      url += '/' + category;
    }

    if (randomize) {
      url += '?' + faker.random.number()
    }

    return url;
  };
  /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.abstract
   */
  self.abstract = function (width, height, randomize) {
    return faker.image.imageUrl(width, height, 'abstract', randomize);
  };
  /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.animals
   */
  self.animals = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'animals', providerOption, https);
  };
  /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.business
   */
  self.business = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'business', providerOption, https);
  };
  /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.cats
   */
  self.cats = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'cats', providerOption, https);
  };
  /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.city
   */
  self.city = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'city', providerOption, https);
  };
  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.food
   */
  self.food = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'food', providerOption, https);
  };
  /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.nightlife
   */
  self.nightlife = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'nightlife', providerOption, https);
  };
  /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.fashion
   */
  self.fashion = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'fashion', providerOption, https);
  };
  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.people
   */
  self.people = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'people', providerOption, https);
  };
  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.nature
   */
  self.nature = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'nature', providerOption, https);
  };
  /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.sports
   */
  self.sports = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'sports', providerOption, https);
  };
  /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.technics
   */
  self.technics = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'technics', providerOption, https);
  };
  /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {string} providerOption
   * @param {boolean} https
   * @method faker.image.transport
   */
  self.transport = function (width, height, providerOption, https) {
    return faker.image.imageUrl(width, height, 'transport', providerOption, https);
  };
  /**
   * dataUri
   *
   * @param {number} width
   * @param {number} height
   * @param {string} color
   * @method faker.image.dataUri
   */
  self.dataUri = function (width, height, color) {
    color = color || 'grey';
    var svgString = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="' + width + '" height="' + height + '"><rect width="100%" height="100%" fill="' + color + '"/><text x="' + width / 2 + '" y="' + height / 2 + '" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">' + width + 'x' + height + '</text></svg>';
    var rawPrefix = 'data:image/svg+xml;charset=UTF-8,';
    return rawPrefix + encodeURIComponent(svgString);
  };

  self.lorempixel = new Lorempixel(faker);
  self.unsplash = new Unsplash(faker);
  self.lorempicsum = new LoremPicsum(faker);
  self.thispersondoesnotexist = new Thispersondoesnotexist(faker);

}


module["exports"] = Image;
