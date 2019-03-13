/**
 *
 * @namespace thispersondoesnotexist
 * @memberof faker.image
 */
var Thispersondoesnotexist = function (faker) {

    var self = this;
    self.categories = ["people"];

    /**
     * image
     *
     * @param {number} width
     * @param {number} height
     * @param {boolean} randomize
     * @method faker.image.thispersondoesnotexist.image
     */
    self.image = function (width, height, randomize) {
        return self[faker.random.arrayElement(self.categories)](width, height, randomize);
    };
    /**
     * avatar
     *
     * @method faker.image.thispersondoesnotexist.avatar
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
     * @param {boolean} https
     * @method faker.image.thispersondoesnotexist.imageUrl
     */
    self.imageUrl = function (width, height, category, providerOption, https) {
        var protocol = 'http://';
        var url ='www.thispersondoesnotexist.com/image';
        
        if (typeof https !== 'undefined' && https === true) {
            protocol = 'https://';
        }

        url = protocol + url;

        return url;
    };
    /**
     * people
     *
     * @param {number} width
     * @param {number} height
     * @param {string} providerOption
     * @method faker.image.thispersondoesnotexist.people
     */
    self.people = function (width, height, providerOption) {
        return faker.image.thispersondoesnotexist.imageUrl(width, height, 'people', providerOption);
    };
}

module["exports"] = Thispersondoesnotexist;