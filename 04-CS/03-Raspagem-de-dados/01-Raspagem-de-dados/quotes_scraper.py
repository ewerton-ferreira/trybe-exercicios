import requests
from parsel import Selector


def fetch_content(url: str, wait: int = 1) -> str:
    try:
        response = requests.get(url, timeout=wait)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""
    else:
        return response.text


def extract_quotes(content: str) -> list[dict]:
    selector = Selector(content)
    quotes = []
    selector.css('div.quote')
    for quote in selector.css('div.quote'):
        text = quote.css('span.text::text').get()
        author = quote.css('small.author::text').get()
        tags = quote.css('a.tag::text').getall()
        quotes.append(
            {
                'text': text,
                'author': author,
                'tags': tags,
            }
        )
    return quotes


def get_next_page(content: str) -> str | None:
    selector = Selector(content)
    next_page = selector.css('li.next > a::attr(href)').get()
    return next_page


def get_all_quotes() -> list[dict]:
    base_url = 'https://quotes.toscrape.com'
    next_page = '/'
    quotes = []

    while next_page:
        url = base_url + next_page
        page_content = fetch_content(url)
        quotes.extend(extract_quotes(page_content))
        next_page = get_next_page(page_content)

    return quotes


if __name__ == "__main__":
    # url = "https://quotes.toscrape.com"
    # page_content = fetch_content(url)
    # quotes = extract_quotes(page_content)
    # print(quotes)
    quotes = get_all_quotes()
