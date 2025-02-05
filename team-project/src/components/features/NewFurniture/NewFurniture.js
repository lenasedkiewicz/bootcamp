import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { connect } from 'react-redux';
import StickyBar from '../StickyBar/StickyBar';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    splitPage: true,
    viewport: this.props.viewport.mode,
    productsCount: 8,
    pageCount: 0,
    fade: true,
  };

  handlePageChange(newPage) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: true });
    }, 500);
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ fade: true });
    }, 750);
  }

  componentDidUpdate() {
    if (this.props.viewport.mode !== this.state.viewport) {
      const newProductsCount = this.getProductCountToViewport(this.props.viewport.mode);

      this.setState({
        productsCount: newProductsCount,
        viewport: this.props.viewport.mode,
      });
    }
  }

  getProductCountToViewport(mode) {
    switch (mode) {
      case 'mobile':
        return 1;
      case 'tablet':
        return 2;
      default:
        return 8;
    }
  }

  handlePageCountChange(newCount) {
    this.setState({ pageCount: newCount });
  }

  getCurrentPageCountLength = () => {
    let length =
      this.props.products.filter(item => item.category === this.state.activeCategory)
        .length / 8;
    return length;
  };

  leftAction = e => {
    if (this.state.activePage > 0) {
      let page = this.state.activePage - 1;
      this.setState({ activePage: page });
    }
    e.preventDefault();
  };

  rightAction = e => {
    let currentPageCount = this.getCurrentPageCountLength();
    let active = this.state.activePage;
    let activeToSet = active + 1;

    this.handlePageCountChange(currentPageCount);
    if (activeToSet < currentPageCount) {
      this.handlePageChange(activeToSet);
    }
    e.preventDefault();
  };

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, productsCount, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsCount);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        leftAction={this.leftAction.bind()}
        rightAction={this.rightAction.bind(this)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.name}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={`row + ${fade ? styles.fadeIn : styles.fadeOut}`}>
              {categoryProducts
                .slice(activePage * productsCount, (activePage + 1) * productsCount)
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-6'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
            <StickyBar />
          </div>
          <div className={`row + ${fade ? styles.fadeIn : styles.fadeOut}`}>
            {categoryProducts
              .slice(activePage * productsCount, (activePage + 1) * productsCount)
              .map(item => (
                <div key={item.id} className='col-lg-3 col-md-6'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
          <StickyBar />
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  viewport: PropTypes.string,
  mode: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

const mapStateToProps = state => ({
  viewport: state.viewport,
});

export default connect(mapStateToProps)(NewFurniture);
