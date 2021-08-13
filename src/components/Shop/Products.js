import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {id: 'p1', price: 6, title: 'Book', description: 'Cool book'},
    {id: 'p2', price: 16, title: 'Second book', description: 'Cool book again'},

  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />

        ))}
      </ul>
    </section>
  );
};

export default Products;
