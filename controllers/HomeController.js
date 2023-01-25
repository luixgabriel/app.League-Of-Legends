import fetch, { Headers } from 'node-fetch';

class HomeController {
  async index(req, res) {
    res.render('index');
  }

  async playerData(req, res) {
    const headers = {
      'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Riot-Token': process.env.APIKEY,
    };

    const { name } = req.body;

    try {
      const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
        headers,
      });

      const data = await (response.json());

      if (data.status) {
        return res.render('404');
      }
      const idLol = data.id;

      const player = await fetch(`https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${idLol}`, {
        headers,
      });

      const playerData = await (player.json());

      if (playerData.length <= 0) {
        return res.render('404');
      }
      return res.render('player', { playerData });
    } catch (error) {
      console.log(error);
      return res.json({ message: 'ERRO' });
    }
  }
}
export default new HomeController();
