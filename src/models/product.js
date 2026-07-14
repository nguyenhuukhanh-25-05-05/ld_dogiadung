/**
 * @param {Object} data
 * @param {number} data.id
 * @param {string} data.name
 * @param {number} data.price
 * @param {number} [data.oldPrice]
 * @param {string} [data.badge]
 * @param {string} data.image
 * @param {string} data.category
 */
export class Product {
  constructor({ id, name, price, oldPrice, badge, image, category }) {
    this.id = id
    this.name = name
    this.price = price
    this.oldPrice = oldPrice || null
    this.badge = badge || null
    this.image = image
    this.category = category
  }
}
