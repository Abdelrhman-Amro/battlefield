const Product = require('./models/product')

const p1 = new Product('FIRST')
p1.save()
Product.fetchAll(data => {
    console.log(data)
})
