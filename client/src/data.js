import previewLISG from './img/preview-lisg.jpg';
import previewBlog from './img/preview-blog.jpg';
import previewCssContext from './img/preview-css-contest.jpg';
import previewPortfolioCineLC from './img/preview-portfoliocinelc.jpg';
import previewPizzaPaiFid from './img/preview-pizzapai-fid.jpg';
import previewSRS from './img/preview-srs.png';
import previewWenta from './img/preview-wenta.jpg';

const projects = [{
  name: 'LoL Item Sets Generator',
  summary: 'Contenus téléchargeables pour le jeu League of Legends',
  description: 'Outil qui propose du contenu téléchargeable pour le jeu vidéo League of Legends. Les contenus sont générés à partir de l\'API REST du jeu. Une application permet de mettre à jour ces données automatiquement et comptabilise plus d\'un million de téléchargements.',
  img: previewLISG,
  link: 'https://lol-item-sets-generator.org',
  show: true
}, {
  name: 'Mon blog',
  summary: 'Blog personnel',
  description: '',
  img: previewBlog,
  link: 'https://blog.nicolas-coutin.com',
  show: true
}, {
  name: 'CSS context',
  summary: 'Concours "CSS pique-les-yeux" de l\'IUT d\'Annecy',
  description: 'Concours organisé par un professeur. L\'objectif étant de mettre en page un document HTML uniquement à l\'aide de CSS. Ce CSS visait la mention spéciale : "pique-les-yeux".',
  img: previewCssContext,
  link: 'https://css-contest.nicolas-coutin.com',
  show: false
}, {
  name: 'Pizza Paï fidélité',
  summary: 'Site fidélité de Pizza Paï (cadre professionnel)',
  description: '',
  img: previewPizzaPaiFid,
  link: 'https://espacefidelite.pizzapai.fr',
  show: true
}, {
  name: 'MJo Peintures',
  summary: 'Exposition de peintures de Marie-jo Coutin',
  description: '',
  img: null,
  link: 'https://mjopeintures.com',
  show: false
}, {
  name: 'MinEevee\'s blog',
  summary: 'Blog d\'une dessinatrice',
  description: '',
  img: null,
  link: 'https://mineevee.com',
  show: false
}, {
  name: 'Statut des services Scalair',
  summary: 'Listing et statuts des incidents/maintenances sur les services de Scalair (cadre professionnel)',
  description: 'Refonte du site',
  img: previewSRS,
  link: 'https://status.scalair.fr',
  show: true
}, {
  name: 'Wenta.fr',
  summary: 'Site vitrine commissioné par M. Wenta, traducteur',
  description: `Traducteur – interprète assermenté langue polonaise, expert près la Cour d'Appel de REIMS`,
  img: previewWenta,
  link: 'https://wenta.fr',
  show: true
}];

export { projects };
