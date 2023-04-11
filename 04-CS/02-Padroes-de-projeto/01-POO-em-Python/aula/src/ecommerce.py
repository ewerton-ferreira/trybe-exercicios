import re
from dataclasses import dataclass
from enum import Enum


class Customer:
    def __init__(self, name: str, email: str, address: str) -> None:
        self.name = name
        self.__email = email
        self.address = address

# equivale ao get do javascript - React
    @property
    def email(self):
        return self.__email

# equivale ao set do javascript
    @email.setter
    def email(self, value):
        if not re.match(r"[^w]+@[^w]+\.[^w]+", value):
            raise ValueError("Email inválido")
        self.__email = value

    def __str__(self) -> str:
        return f"{self.name};{self.__email};{self.address}"

    def show_details(self):
        print(f'Nome:{self.name}|Email:{self.__email}|Endereço:{self.address}')


@dataclass
class Product:
    name: str
    unit_price: float
    stock_quantity: int = 0


class ShoppingCart:
    def __init__(self) -> None:
        self._items: list[tuple[Product, int]] = []

    def add_item(self, product_quantity: tuple[Product, int]):
        self._items.append(product_quantity)

    def items_quantity(self) -> int:
        # fazendo de forma estruturada
        return sum(item[1] for item in self._items)

    def total_price(self) -> float:
        # fazendo de forma desestruturada
        return sum(
            product.unit_price * quantity for product, quantity in self._items
            )
        # seria o mesmo que
        # return sum(item[0].unit_price * item[1] for item in self._items)


class Order:
    def __init__(self, customer: Customer, cart: ShoppingCart) -> None:
        self.customer = customer
        self.cart = cart
        self.total_price = cart.total_price()
        self.status = OrderStatus.PENDING


class OrderStatus(Enum):
    PENDING = 0
    PAID = 1
    FAILED = 2
    CANCELED = 3
    SHIPPED = 4
    DELIVERED = 5
