import fetch, { Headers } from 'node-fetch';

class HomeController {
  async index(req, res) {
    return res.render('index');
  }
  // async index(req, res) {
  //   const headers = {
  //     'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     'X-Riot-Token': process.env.APIKEY,
  //   };

  //   const name = 'luixgabriel';

  //   const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
  //     headers,
  //   });

  //   const data = await (response.json());
  //   const idLol = data.id;

  //   const player = await fetch(`https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${idLol}`, {
  //     headers,
  //   });

  //   const playerData = await (player.json());
  //   res.json(playerData);
  // }
}
export default new HomeController();
