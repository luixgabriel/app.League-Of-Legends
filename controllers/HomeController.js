import fetch from 'node-fetch';

class HomeController {
  async index(req, res) {
    fetch('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/luixgabriel', {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': 'RGAPI-e602468d-707f-4b7a-93a2-069755b8ceaa',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const idLol = data.id;
        res.json(idLol);
      });
  }
}
export default new HomeController();
