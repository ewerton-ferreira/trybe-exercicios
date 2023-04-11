from src.ecommerce import Customer, Product, ShoppingCart
import pytest


def test_customer_create():
    customer = Customer('Eli', 'eli@betrybe,com', 'Rua 10')
    assert customer.name == 'Eli'
    assert customer.email == 'eli@betrybe,com'
    assert customer.address == 'Rua 10'


def test_customer_update_email_invalid():
    customer = Customer('Eli', 'eli@betrybe,com', 'Rua 10')
    with pytest.raises(ValueError, match='Email inválido'):
        customer.email = 'elibetrybe.br'


def test_product_create():
    product = Product('Camiseta', 50.00, 10)
    assert product.name == 'Camiseta'
    assert product.unit_price == 50.00
    assert product.stock_quantity == 10


def test_shopping_cart_add_item():
    cart = ShoppingCart()
    product_1 = Product('Camiseta', 50.00)
    product_2 = Product('Calça', 152.50)
    cart.add_item((product_1, 2))
    cart.add_item((product_2, 1))
    assert len(cart._items) == 2
    assert cart._items[0] == (product_1, 2)
    assert cart._items[1] == (product_2, 1)
    # Outra forma de testar
    # assert cart.items_quantity() == 3
    # assert cart._items[0] == (product_1, 2)
    # assert cart._items[1] == (product_2, 1)


def test_shopping_cart_items_quantity():
    cart = ShoppingCart()
    assert cart.items_quantity() == 0
    product_1 = Product('Camiseta', 50.00)
    cart.add_item((product_1, 2))
    assert cart.items_quantity() == 2


def test_shopping_cart_total_price():
    cart = ShoppingCart()
    product_1 = Product('Camiseta', 50.00)
    product_2 = Product('Calça', 152.50)
    cart.add_item((product_1, 2))
    cart.add_item((product_2, 1))
    assert cart.total_price() == 252.50
