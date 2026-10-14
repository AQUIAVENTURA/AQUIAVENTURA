"""Checks that supplied hotel prices remain unchanged."""
import unittest
from html.parser import HTMLParser
from pathlib import Path


class HotelText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.active = False
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag == 'section':
            self.active = dict(attrs).get('id') == 'hoteleria'

    def handle_endtag(self, tag):
        if tag == 'section':
            self.active = False

    def handle_data(self, data):
        if self.active:
            self.parts.append(data)


class HotelPrices(unittest.TestCase):
    def test_document_prices_are_preserved(self):
        parser = HotelText()
        parser.feed((Path(__file__).resolve().parents[1] / 'public/aquiventura.html').read_text())
        text = ' '.join(parser.parts)
        prices = [
            '$40.000 COP / 10 USD Por persona - $100.000 COP / 25 USD 3 Personas',
            '$148.000 COP / 37 USD',
            '$240.000 COP / 60 USD hasta $480.000 COP / 120 USD',
            '$60.000 COP / 15 USD Por persona',
            '$52.000 COP / 13 USD - Pareja: $100.000 COP / 25 USD',
            '$400.000 COP / 100 USD - $708.000 COP / 177 USD',
            '$600.000 COP / 150 USD',
            '$56.000 COP / 14 USD por persona',
            '$100.000 COP / 25 USD',
            '$92.000 COP / 23 USD - $136.000 COP / 34 USD por huésped',
        ]
        for price in prices:
            with self.subTest(price=price):
                self.assertIn(price, text)


if __name__ == '__main__':
    unittest.main()