import json

def load_games_from_json(file_path: str) -> list[dict]:
    file = open(file_path, "r")
    games = json.load(file)
    file.close()
    return games


def load_games_from_json(file_path: str) -> list[dict]:
    games = []
    try:
        with open(file_path, 'r') as file:
            games = json.load(file)
    except FileNotFoundError as err:
        print("Arquivo não encontrado")
        print(err)
    except json.decoder.JSONDecodeError:
        print("Formato de arquivo inválido")

    return games

def get_all_games(games: list[dict]):
    all_games = set()
    for game in games:
        name_game = game['Title']
        all_games.add(name_game)
    return sorted(list(all_games))

def get_all_consoles(games: list[dict]):
    all_consoles = set()
    for game in games:
        console = game['Release']['Console']
        all_consoles.add(console)
    return all_consoles

def get_all_genres(games: list[dict]):
    all_genres = set()
    for game in games:
        genres = game['Metadata']['Genres']
        for genre in genres.split(','):
            all_genres.add(genre)
    return all_genres

def get_avg_scores_by_genre(games: list[dict]):
    all_genres = get_all_genres(games)
    scores_by_genre = {genre: [] for genre in all_genres}
    for game in games:
        score = game['Metrics']['Review Score']
        genres = game['Metadata']['Genres']
        for genre in genres.split(','):
            scores_by_genre[genre].append(score)
    avg_scores_by_genre = {}
    for genre, scores in scores_by_genre.items():
        avg_scores_by_genre[genre] = round(sum(scores) / len(scores), 2)

    return avg_scores_by_genre

def export_json_review_by_genre(avg_scores_by_genre: dict):
    with open('reviews_by_genre.json', 'w') as file:
        json.dump(avg_scores_by_genre, file)

def export_json_review_by_games(all_games: dict):
    with open('reviews_by_games.json', 'w') as file:
        json.dump(all_games, file, indent=4)


if __name__ == '__main__':
    video_games = load_games_from_json("video_games.json")
    # print(f'Lista Completa:\n {video_games}')
    consoles = get_all_consoles(video_games)
    print(f'Consoles:\n {consoles}')
    games = get_all_games(video_games)
    # games_str = '\n'.join(games)
    # for i, game in enumerate(games):
        # print(f'{i + 1} - {game}')
    genres = get_all_genres(video_games)
    print(f'Categorias:\n {genres}')
    avg_scores_by_genre = get_avg_scores_by_genre(video_games)
    print(f'Média de notas por categoria:\n {avg_scores_by_genre}')
    export_json_review_by_genre(avg_scores_by_genre)
    export_json_review_by_games(games)
