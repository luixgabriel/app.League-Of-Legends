import fetch from 'node-fetch';

class HomeController {
  async index(req, res) {
    const response = await fetch('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/zeepxanflorp', {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': 'RGAPI-e602468d-707f-4b7a-93a2-069755b8ceaa',
      },
    });

    const data = await (response.json());
    const idLol = data.id;

    const player = await fetch(`https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${idLol}`, {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': 'RGAPI-e602468d-707f-4b7a-93a2-069755b8ceaa',
      },
    });

    const playerData = await (player.json());
    res.json(playerData);
  }
}
export default new HomeController();
