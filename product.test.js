const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('Manejo de producto', () => {
    describe('addProduct', () => {
        it('Se añadió un producto', () => {
            addProduct('Product1', 10);
            const products = getProducts();
            expect(products).toHaveLength(1);
            expect(products[0]).toMatchObject({ name: 'Product1', price: 10 });
        });

        it('The id has been increased', () => {
            addProduct('Product1', 10);
            addProduct('Product2', 20);
            const products = getProducts();
            expect(products[0].id).toBe(1);
            expect(products[1].id).toBe(2);
        });

        it('Missing name or price', () => {
            expect(() => addProduct(undefined, 10)).toThrow();
            expect(() => addProduct('Product1', undefined)).toThrow();
        });

        it('The product already exists', () => {
            addProduct('Product1', 10);
            expect(() => addProduct('Product1', 10)).toThrow();
        });
    });

    describe('removeProduct', () => {
        it('should remove a product', () => {
            addProduct('Product1', 10);
            removeProduct(1);
            const products = getProducts();
            expect(products).toHaveLength(0);
        });

        it('The product does not exist', () => {
            expect(() => removeProduct(1)).toThrow();
        });
    });

    describe('getProduct', ( ) => {
        it('Product obtained by id', () => {
            addProduct('Product1', 10);
            const product = getProduct(1);
            expect(product).toMatchObject({id:1, name:'Product1', price: 10})
        })

        it('The product does not exist', () => {
            expect(() => getProduct(1)).toThrow();
        });
    });

    describe('updateProduct', ( ) => {
        it('Product obtained by id', () => {
            addProduct('Product1', 10);
            updateProduct(1, 'UpdatedProduct1', 30)
            const product = getProduct(1);
            expect(product).toMatchObject({id: 1, name:'UpdatedProduct1', price: 30})
        });

        it('The product does not exist', () => {
            expect(() => updatedProduct(1, 'Product1', 10)).toThrow();
        });
    });
});